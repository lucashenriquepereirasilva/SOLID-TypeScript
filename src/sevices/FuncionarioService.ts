import Funcionario from "../classes/Funcionarios";
import { Request, Response } from "express";
import FuncionarioRepository from "../repositories/FuncionarioRepository";

export default class FuncionarioService {
   FuncionariosRepository = new FuncionarioRepository()

    async cadastroFuncionario(req:Request, res: Response){
        const fun:Funcionario =  new Funcionario()
        fun.nome = req.body.nome
       fun.email = req.body.email
       fun.cpf = req.body.cpf
       fun.telefone  = req.body.telefone
       fun.cargo = req.body.cargo
       fun.salario = req.body.salario
       fun.endereco = req.body.endereco
        try{
            const rs = await this.FuncionariosRepository.Cadastrar(fun)
            return res.status(201).json(rs)
        }
        catch(error) {
            return  res.status(500).json(error)
        }
        const rs = await this.FuncionariosRepository.Cadastrar(fun)
        return rs
    }


    async listarFuncionarios(req:Request, res:Response) {
        try{
            const rs = await this.FuncionariosRepository.Listar();
            return res.status(200).json(rs);
    }
    catch(error) {
        return res.status(500).json(error)
    }
}
}