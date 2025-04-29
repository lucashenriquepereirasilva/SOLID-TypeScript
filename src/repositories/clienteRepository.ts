
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
            conexao.query("INSERT INTO  cliente SET ?", obj,(error,result)=>{
                if(error) {
                    return reject(error)
                }
                else{
                 return resolve(obj)
                }
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