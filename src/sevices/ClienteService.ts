import Cliente from "../classes/Clientes";
import { Request, Response } from "express";
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
        try{
            const rs = await this.cliRepository.Cadastrar(cli)
            return res.status(201).json(rs)
        }
        catch(error) {
            return  res.status(500).json(error)
        }
        const rs = await this.cliRepository.Cadastrar(cli)
        return rs
    }


    async listarClientes(req:Request, res:Response) {
        try{
            const rs = await this.cliRepository.Listar();
            return res.status(200).json(rs);
    }
    catch(error) {
        return res.status(500).json(error)
    }
}
}