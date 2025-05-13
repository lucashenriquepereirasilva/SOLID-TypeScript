import Pessoa from "./Pessoa";

export default class Funcionario extends Pessoa {
    [x: string]: any;
    cargo!: string;
    salario!: number
}