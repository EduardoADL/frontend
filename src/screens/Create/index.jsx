import * as React from "react";
import { useState,useEffect } from "react";
import "./index.css";
import TextField  from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from "axios";
import {useForm} from "react-hook-form"


function Formulario (){

    const {register, handleSubmit} = useForm()
    
    const [modalFornecedor, setModalFornecedor] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8080/fornecedor")
            .then((response) => {
                setModalFornecedor(response.data)
                console.log(modalFornecedor)
            })
    }, [])

    const [tipoproduto, setTipoproduto] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8080/tipoproduto")
            .then((response) => {
                setTipoproduto(response.data)
                console.log(tipoproduto)
            })
    }, [])

     const addPost = async data => axios.post("http://localhost:8080/produto", data)
    .then(() => {
        alert("Enviado")
        window.location = '/'
    })
    .catch(()=>{
        alert("Email ou Telefone ja existente!")
    })

    return(
        <div className="formulario">
            <form onSubmit={handleSubmit(addPost)}>
            <div>
                    <TextField id="standard-basic" label="Nome do Produto" name="nome" InputLabelProps={{ shrink: true }} {...register("nome")} variant="standard" />
                </div>
                <div>
                    <TextField id="standard-basic" label="quantidade" name="quantidade" InputLabelProps={{ shrink: true }} {...register("quantidade")} variant="standard" />
                </div>
                <div>
                    <TextField id="standard-basic "  label="Preço de Venda" name="precovenda" InputLabelProps={{ shrink: true }} {...register("precovenda")} variant="standard" />
                </div>
                <div>
                    <TextField id="standard-basic"  label="Preço de Compra" name="precocompra" InputLabelProps={{ shrink: true }} {...register("precocompra")} variant="standard" />
                </div>
                <select {...register("fornecedor.id")} name="fornecedor.id" InputLabelProps={{ shrink: true }}>
                    {modalFornecedor.map((fornecedor) => (
                        <option key={fornecedor.id} value={fornecedor.id}>{fornecedor.nomefornecedor}</option>
                    ))}
                </select>
                <select {...register("tipoProduto.id")} name="tipoProduto.id" InputLabelProps={{ shrink: true }}>
                    {tipoproduto.map((tproduto) => (
                        <option key={tproduto.id} value={tproduto.id}>{tproduto.tipoproduto}</option>
                    ))}
                </select>
                <div className="botao" >
                    <Button variant="contained" type ="Submit"> Salvar </Button>
                </div>
                
            </form>
        </div>
    )

    
}

export default Formulario
