import * as React from "react";
import "./index.css";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from "axios";
import { useForm } from "react-hook-form"


function FormularioFornecedor() {

    const { register, handleSubmit } = useForm()

    const addPostFornecedor = async data => axios.post("http://localhost:8080/fornecedor", data)
        .then(() => {
            alert("Enviado")
            window.location = '/listafornecedor'
        })
        .catch(() => {
            alert("preencha os dados corretamente!")
        })

    return (
        <div className="formulario">
            <form onSubmit={handleSubmit(addPostFornecedor)}>
                <div>
                    <TextField id="standard-basic" label="Nome do Fornecedor" name="nomefornecedor" inputProps={{ 'data-testid': 'nomefornecedor' }} InputLabelProps={{ shrink: true }} {...register("nomefornecedor")} variant="standard" />
                </div>

                <div className="botao" >
                    <Button variant="contained" type="Submit"> Salvar </Button>
                </div>

            </form>
        </div>
    )


}

export default FormularioFornecedor