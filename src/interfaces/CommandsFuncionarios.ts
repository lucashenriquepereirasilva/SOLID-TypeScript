import CommandsPessoa from "./Commands.Pessoa";

export default interface CommandsFuncionarios<T>  extends CommandsPessoa<T> {
    PesquisarCargo(cargo:string): T[]
    PesquisarSalario(salario:number): T[]
}