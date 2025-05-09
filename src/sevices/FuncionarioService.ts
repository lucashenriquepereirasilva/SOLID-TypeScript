import { Request, Response} from "express"
import Funcionario from "../classes/Funcionarios";
import FuncionarioRepository from "../repositories/FuncionarioRepository";

export default class FuncionarioService{
    funRepository = new FuncionarioRepository()

    async listarFuncionario(req:Request, res:Response){
        try {
            const rs = await this.funRepository.Listar();
            return res.status(200).json(rs);
        } 
        catch (error) {
            return res.status(500).json(error)
        }
    }
}