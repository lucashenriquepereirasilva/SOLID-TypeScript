import Autor from "../classes/autor";
import CommandsPessoa from "../interfaces/Commands.Pessoa";
import { conexao } from "../database/config";

export default class AutorRepository implements CommandsPessoa<Autor>
     {
    PesquisarCpf(cpf: string): Promise<Autor> {
        throw new Error("Method not implemented.");
    }
    PesquisarEmail(email: string): Promise<Autor> {
        throw new Error("Method not implemented.");
    }
    Cadastrar(obj: Autor): Promise<Autor> {
        return new Promise((resolve,reject)=>{
            // antes de cadastrar um cliente, temos que cadastraro
            // endereco deste cliente e, então obtemos o id do endereco cadastrado
            // alocamos em uma 
            
            let id_end:any;
            conexao.query("INSERT INTO endereco(tipo_logradouro,logradouro, numero,complemento, cep,  bairro) Values(?,?,?,?,?,?)",

            [obj.endereco.tipo_logradouro,
                obj.endereco.logradouro,
                obj.endereco.numero,
                obj.endereco.complemento,
                obj.endereco.cep,
                obj.endereco.bairro],
                (error,end:any ) => {
                    if(error) {
                        return reject(error)
                    }
                    else{
                       id_end = end.insertId
                    }
                

        

            conexao.query("INSERT INTO  autor (nome,cpf,email,telefone,id_endereco,genero_literario) values (?,?,?,?,?,?)",
             [obj.nome,
                obj.cpf,
                obj.email,
                obj.telefone,
                id_end,
                obj.genero_literario],

                (error,result)=>{
                if(error) {
                    return reject(error)
                }
                else{
                 return resolve(obj)
                }
               })
            })
        
        
        })
    }
    Listar(): Promise<Autor[]> {
        return new Promise ((resolve,reject)=> {
            conexao.query("Select * from Autor", (error, result)=> {
                if(error) {
                    return reject (error)
                } else {
                    return resolve(result as Autor[])
                }
            })
         })
    }
    Apagar(id: number): Promise<string> {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: Autor): Promise<Autor> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(Id: number): Promise<Autor> {
        throw new Error("Method not implemented.");
    }
       
    }

    
    