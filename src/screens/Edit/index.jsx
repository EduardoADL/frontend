import * as React  from "react";
import {useEffect} from 'react'
import "./index.css";
import Menu from "../../component/menu/index"
import TextField  from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from "axios";
import {useForm} from "react-hook-form"
import {useParams} from "react-router-dom"
function Editar () {

    const {register, handleSubmit, reset} = useForm()
    
    useEffect(()=>{
        axios.get(`http://localhost:8080/produto/${id}`)
        .then((response)=>{
            reset(response.data)
        })
    },[])
    
    const addPost = data => axios.put(`http://localhost:8080/produto/${id}`, data)
   .then(() => {
       alert("Enviado")
   })
   .catch(()=>{
       alert("Email ou Telefone ja existente!")
   })

   const {id} = useParams()

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
                    <TextField id="standard-basic "  label="precovenda" name="precovenda" InputLabelProps={{ shrink: true }} {...register("precovenda")} variant="standard" />
                </div>
                <div>
                    <TextField id="standard-basic"  label="precocompra" name="precocompra" InputLabelProps={{ shrink: true }} {...register("precocompra")} variant="standard" />
                </div>
                <div className="botao" >
                    <Button variant="contained" type ="Submit"> Salvar </Button>
                </div>
                
            </form>
        </div>
    )

}

export default Editar;