
import * as React from "react";
import { useEffect, useState } from 'react'
import "./index.css";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from "axios";
import { useParams } from "react-router-dom"
import { useForm } from "react-hook-form"
import { Link} from "react-router-dom"

function EditarTipoProduto() {

    const { register, handleSubmit, reset } = useForm()

    useEffect(() => {
        axios.get(`http://localhost:8080/tipoproduto/${id}`)
            .then((response) => {
                reset(response.data)
            })
    }, [])

    const addPost = data => axios.put(`http://localhost:8080/tipoproduto/${id}`, data)
        .then(() => {
            alert("Enviado")
            window.location = '/listatipoproduto'
        })
        .catch(() => {
            alert("Preencha os dados corretamente")
        })

    const { id } = useParams()

    return (
        <div className="formulario">
            <form onSubmit={handleSubmit(addPost)}>
                <div>
                    <TextField id="standard-basic" label="Tipo do Produto" name="tipoproduto" InputLabelProps={{ shrink: true }} {...register("tipoproduto")} variant="standard" />
                </div>
                <div className="botao" >
                    <Button variant="contained" type="Submit" > Salvar </Button>
                </div>
                <div >
                    <Link to="/listatipoproduto"><Button variant="contained"> Voltar </Button></Link>
                </div>

            </form>
        </div>
    )

}

export default EditarTipoProduto;