import express  from "express"

import cors from "cors"
import ClienteService from "./sevices/ClienteService"
import AutorService from "./sevices/AutorService"
import FuncionarioService from "./sevices/FuncionarioService"

const app =  express()
app.use(express.json())
app.use(cors())


const cli = new  ClienteService()
const autor = new AutorService()
const func =  new FuncionarioService()


app.get("/api/v1/cliente/listar", (req, res) => {
    cli.listarClientes(req,res)
})
app.get("/api/v1/autor/listar",(req,res)=>{
    autor.listarAutor(req,res);
})

app.get("/api/v1/funcionario/listar",(req,res)=>{
    func.listarFuncionario(req,res);
})

app.post("/api/v1/cliente/cadastro" , (req,res)=> {
    cli.cadastroCliente(req,res)
})

app.listen(5000,()=>{
    console.log(`Online em : http://127:0.0.1:5000`)
})