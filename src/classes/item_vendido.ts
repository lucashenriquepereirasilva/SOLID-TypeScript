import { NumericLiteral } from "typescript"
import produto from "./Produto"
import Venda from "./Venda"

export default class ItemVendido {
    id!: number
    venda!: Venda
    produto!: produto
    quantidade!: Number
}