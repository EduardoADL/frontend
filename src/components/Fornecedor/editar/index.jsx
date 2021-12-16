
import * as React from "react";
import { useEffect, useState } from 'react'
import "./index.css";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from "axios";
import { useParams } from "react-router-dom"
import { useForm } from "react-hook-form"

function EditarFornecedor() {

const { register, handleSubmit, reset } = useForm()

useEffect(() => {
    axios.get(`http://localhost:8080/fornecedor/${id}`)
        .then((response) => {
            reset(response.data)
        })
}, [])

const addPost = data => axios.put(`http://localhost:8080/fornecedor/${id}`, data)
    .then(() => {
        alert("Enviado")
        window.location = '/listafornecedor'
    })
    .catch(() => {
        alert("Preencha os dados corretamente")
    })

const { id } = useParams()

return (
    <div className="formulario">
        <form onSubmit={handleSubmit(addPost)}>
            <div>
                <TextField id="standard-basic" label="Nome do Fornecedor" name="nomefornecedor" InputLabelProps={{ shrink: true }} {...register("nomefornecedor")} variant="standard" />
            </div>
            <div className="botao" >
                <Button variant="contained" type="Submit" > Salvar </Button>
            </div>

        </form>
    </div>
)

}

export default EditarFornecedor;