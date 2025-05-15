import Venda from "../classes/Venda";
import { Request, Response } from "express";
import VendaRepository from "../repositories/VendaRepository";

export default class VendaService {
   vendRepository = new VendaRepository()

    async cadastroVenda(req:Request, res: Response){
        const vend:Venda =  new Venda()
       vend.cliente = req.body.id_cliente
      vend.funcionario = req.body.id_funcionario

     
        try{
            const rs = await this.vendRepository.Cadastrar(vend)
            return res.status(201).json(rs)
        }
        catch(error) {
            return  res.status(500).json(error)
        }
        const rs = await this.vendRepository.Cadastrar(vend)
        return rs
    }


    async listarVendas(req:Request, res:Response) {
        try{
            const rs = await this.vendRepository.Listar();
            return res.status(200).json(rs);
    }
    catch(error) {
        return res.status(500).json(error)
    }
}
}