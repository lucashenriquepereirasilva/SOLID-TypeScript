import Commands from "./comando";

export default interface CommandsPessoa<T> extends Commands<T>{
    PesquisarCpf(cpf:string): Promise <T>
    PesquisarEmail(email:string): Promise <T>
    
}