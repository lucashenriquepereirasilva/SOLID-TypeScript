import AutorRepository from "../repositories/AutorRepository";
import Autor from "../classes/autor";

import { Request, Response} from "express"

export default class AutorService{

    autRepository = new AutorRepository()

    async listarAutor(req:Request, res:Response){
        try {
            const rs = await this.autRepository.Listar();
            return res.status(200).json(rs);
        } 
        catch (error) {
            return res.status(500).json(error)
        }
    }
}