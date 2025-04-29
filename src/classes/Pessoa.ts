// criar a classe pai (superclasse) chamda pessoa
// que passará todos os seus dados ás classes
// filhas

/* 
A classe Pessoa segue p principio O(Open/Close)
Do SOLID , onde , temos a classe fechada para moficações e aberta para extensão
o qualificador abstract (abstrato) mantém a classe Pessoa, sempre abstrata , Não permitindo que ela sejá ,  materializada
, ou seja  , Não ser uma instãncia

*/

import Endereco from "./Endereco";


export default  abstract class Pessoa{
    id!:number;
    nome!: string
    cpf!: string
    email!: string
    telefone?: string
    endereco!: Endereco
}