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
        throw new Error("Method not implemented.");
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
    