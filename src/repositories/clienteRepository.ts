
import { error } from "console";
import Cliente from "../classes/Clientes";
import { conexao } from "../database/config";
import CommandsPessoa from "../interfaces/Commands.Pessoa";
import { resolve } from "path";
import { rejects } from "assert";

export default class ClienteRepository implements CommandsPessoa<Cliente>{
    PesquisarCpf(cpf: string): Promise<Cliente> {
        throw new Error("Method not implemented.");
    }
    PesquisarEmail(email: string): Promise<Cliente> {
        throw new Error("Method not implemented.");
    }
    Cadastrar(obj: Cliente): Promise<Cliente> {

        return new Promise((resolve,reject)=>{
            // antes de cadastrar um cliente, temos que cadastraro
            // endereco deste cliente e, então obtemos o id do endereco cadastrado
            // alocamos em uma 
            
            let id_end:any;
            conexao.query("INSERT INTO endereco(tipo_logradouro,logradouro, numero,complemento, cep,  bairro) Values(?,?,?,?,?)",

            [obj.endereco.tipo_logradouro,
                obj.endereco.logradouro,
                obj.endereco.numero,
                obj.endereco.complemento,
                obj.endereco.cep,
                obj.endereco.bairro],
                (error,end) => {
                    if(error) {
                        return reject(error)
                    }
                    else{
                       // id_end = end.insertId
                    }
                

        

            conexao.query("INSERT INTO  cliente SET ?", obj,(error,result)=>{
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
    Listar(): Promise<Cliente[]> {

     return new Promise ((resolve,reject)=> {
        conexao.query("Select * from cliente", (error, result)=> {
            if(error) {
                return reject (error)
            } else {
                return resolve(result as Cliente[])
            }
        })
     })
    }
    Apagar(id: number): Promise<string> {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: Cliente): Promise<Cliente> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(Id: number): Promise<Cliente> {
        throw new Error("Method not implemented.");
    }
  

}