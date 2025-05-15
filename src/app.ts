import express  from "express"

import cors from "cors"
import ClienteService from "./sevices/ClienteService"

import FuncionarioService from "./sevices/FuncionarioService"
import AutorService from "./sevices/AutorService"
import ProdutoRepository from "./repositories/produtoRepository"
import ProdutoService from "./sevices/ProdutoService"
import VendaService from "./sevices/VendaService"


const app =  express()
app.use(express.json())
app.use(cors())


const cli = new  ClienteService()

const fun =  new FuncionarioService()
const aut = new AutorService()
const prod = new ProdutoService()
const vend = new  VendaService()


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

app.get("/api/v1/produto/listar",(req,res)=>{
    prod. listarProdutos (req,res);
})
app.post("/api/v1/produto/cadastrar",(req,res)=>{
    prod. cadastroProduto (req,res);
})

app.post("/api/v1/cliente/cadastro" , (req,res)=> {
    cli.cadastroCliente(req,res)
})

app.get("/api/v1/venda/listar",(req,res)=>{
    vend.listarVendas(req,res);
})
app.post("/api/v1/venda/cadastrar",(req,res)=>{
    vend.cadastroVenda(req,res);
})

app.listen(5000,()=>{
    console.log(`Online em : http://127:0.0.1:5000`)
})