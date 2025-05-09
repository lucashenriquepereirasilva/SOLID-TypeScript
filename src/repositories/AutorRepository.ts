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
        throw new Error("Method not implemented.");
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

    
    