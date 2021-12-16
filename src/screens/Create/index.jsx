import * as React from "react";
import "./index.css";
import TextField  from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from "axios";
import {useForm} from "react-hook-form"


function Formulario (){

    const {register, handleSubmit} = useForm()
    
     const addPost = async data => axios.post("http://localhost:8080/produto", data)
    .then(() => {
        alert("Enviado")
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
                <div className="botao" >
                    <Button variant="contained" type ="Submit"> Salvar </Button>
                </div>
                
            </form>
        </div>
    )

    
}

export default Formulario
