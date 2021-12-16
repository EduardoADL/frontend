import * as React from "react";
import { useEffect, useState } from 'react'
import "./index.css";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from "axios";
import { useForm } from "react-hook-form"
import { useParams } from "react-router-dom"

function Editar() {


    const { register, handleSubmit, reset } = useForm()
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
    useEffect(() => {
        axios.get(`http://localhost:8080/produto/${id}`)
            .then((response) => {
                reset(response.data)
            })
    }, [])

    const addPost = data => axios.put(`http://localhost:8080/produto/${id}`, data)
        .then(() => {
            alert("Enviado")
            window.location = '/'
        })
        .catch(() => {
            alert("Email ou Telefone ja existente!")
        })

    const { id } = useParams()

    return (
        <div className="formulario">
            <form onSubmit={handleSubmit(addPost)}>
                <div>
                    <TextField id="standard-basic" label="nome" name="nome" InputLabelProps={{ shrink: true }} {...register("nome")} variant="standard" />
                </div>
                <div>
                    <TextField id="standard-basic" label="quantidade" name="quantidade" InputLabelProps={{ shrink: true }} {...register("quantidade")} variant="standard" />
                </div>
                <div>
                    <TextField id="standard-basic " label="precovenda" name="precovenda" InputLabelProps={{ shrink: true }} {...register("precovenda")} variant="standard" />
                </div>
                <div>
                    <TextField id="standard-basic" label="precocompra" name="precocompra" InputLabelProps={{ shrink: true }} {...register("precocompra")} variant="standard" />
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
                    <Button variant="contained" type="Submit" > Salvar </Button>
                </div>

            </form>
        </div>
    )

}

export default Editar;