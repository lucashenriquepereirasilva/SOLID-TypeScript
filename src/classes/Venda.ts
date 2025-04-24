import Cliente from "./Clientes"
import Funcionario from "./Funcionarios"

export default class Venda{

    id!: number
    cliente!: Cliente
    funcionario!: Funcionario
    data_hora!: Date

}