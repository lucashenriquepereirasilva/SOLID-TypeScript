import Cliente from "../classes/Clientes";
import { Request } from "express";
import ClienteRepository from "../repositories/clienteRepository";

export default class ClienteService {
   cliRepository = new ClienteRepository()
    async cadastroCliente(req:Request, res: Response){
        const cli:Cliente =  new Cliente()
        cli.nome = req.body.nome
        cli.email = req.body.email
        cli.cpf = req.body.cpf.
        cli.telefone  = req.body.telefone
        cli.aniversario = req.body.aniversario
        cli.endereco = req.body.endereco
        const rs = await this.cliRepository.Cadastrar(cli)
        return rs
    }
}