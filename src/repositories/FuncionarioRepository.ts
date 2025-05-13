import Funcionario from "../classes/Funcionarios";
import { conexao } from "../database/config";
import CommandsFuncionarios from "../interfaces/CommandsFuncionarios";

export default class FuncionarioRepository implements CommandsFuncionarios<Funcionario>
     {
    PesquisarCargo(cargo: string): Funcionario[] {
        throw new Error("Method not implemented.");
    }
    PesquisarSalario(salario: number): Funcionario[] {
        throw new Error("Method not implemented.");
    }
    PesquisarCpf(cpf: string): Promise<Funcionario> {
        throw new Error("Method not implemented.");
    }
    PesquisarEmail(email: string): Promise<Funcionario> {
        throw new Error("Method not implemented.");
    }
    Cadastrar(obj: Funcionario): Promise<Funcionario> {
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
                

        

            conexao.query("INSERT INTO  funcionario (nome,cpf,email,telefone,id_endereco,cargo,salario) values (?,?,?,?,?,?,?)",
             [obj.nome,
                obj.cpf,
                obj.email,
                obj.telefone,
                id_end,
                obj.cargo,
            obj.salario],

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
    Listar(): Promise<Funcionario[]> {
        return new Promise ((resolve,reject)=> {
            conexao.query("Select * from Funcionario", (error, result)=> {
                if(error) {
                    return reject (error)
                } else {
                    return resolve(result as Funcionario[])
                }
            })
         })
    }
    Apagar(id: number): Promise<string> {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: Funcionario): Promise<Funcionario> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(Id: number): Promise<Funcionario> {
        throw new Error("Method not implemented.");
    }
      
    }
    
    