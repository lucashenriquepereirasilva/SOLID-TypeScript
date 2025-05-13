import express  from "express"

import cors from "cors"
import ClienteService from "./sevices/ClienteService"

import FuncionarioService from "./sevices/FuncionarioService"
import AutorService from "./sevices/AutorService"

const app =  express()
app.use(express.json())
app.use(cors())


const cli = new  ClienteService()

const fun =  new FuncionarioService()
const aut = new AutorService()


app.get("/api/v1/cliente/listar", (req, res) => {
    cli.listarClientes(req,res)
})
app.get("/api/v1/autor/listar",(req,res)=>{
    aut.listarAutor(req,res);
})
app.post("/api/v1/autor/cadastrar",(req,res)=>{
    aut.cadastroAutor(req,res);
})

app.get("/api/v1/funcionario/listar",(req,res)=>{
    fun.listarFuncionarios(req,res);
})
app.post("/api/v1/funcionario/cadastrar",(req,res)=>{
    fun.cadastroFuncionario(req,res);
})

app.post("/api/v1/cliente/cadastro" , (req,res)=> {
    cli.cadastroCliente(req,res)
})

app.listen(5000,()=>{
    console.log(`Online em : http://127:0.0.1:5000`)
})