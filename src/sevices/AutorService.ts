import Autor from "../classes/autor";
import { Request, Response } from "express";
import AutorRepository from "../repositories/AutorRepository";

export default class AutorService {
   AutorRepository = new AutorRepository()

    async cadastroAutor(req:Request, res: Response){
        const aut:Autor =  new Autor()
        aut.nome = req.body.nome
        aut.email = req.body.email
        aut.cpf = req.body.cpf
        aut.telefone  = req.body.telefone
        aut.aniversario = req.body.aniversario
        aut.endereco = req.body.endereco,
        aut.genero_literario = req.body.genero_literario
        try{
            const rs = await this.AutorRepository.Cadastrar(aut)
            return res.status(201).json(rs)
        }
        catch(error) {
            return  res.status(500).json(error)
        }
        const rs = await this.AutorRepository.Cadastrar(aut)
        return rs
    }


    async listarAutor(req:Request, res:Response) {
        try{
            const rs = await this.AutorRepository.Listar();
            return res.status(200).json(rs);
    }
    catch(error) {
        return res.status(500).json(error)
    }
}
}