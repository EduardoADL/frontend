import * as React  from "react";
import {useEffect} from 'react'
import "./index.css";
import TextField  from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from "axios";
import {useForm} from "react-hook-form"
import {useParams} from "react-router-dom"
//import Select from '@mui/material/Select';
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
        window.location = '/'
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
                {/* <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                {...register("fornecedor.nomefornecedor")}
                value={produtos.fornecedor.nomefornecedor}
                onChange={handleChange}
                label="Fornecedores"
                >
                 {produtos.map((produtoss) => (
                <MenuItem value={produtoss.nomefornecedor}>{prosutoss.nomefornecedor}</MenuItem>
                 ))}
                </Select> */}
                <div className="botao" >
                <Button variant="contained" type ="Submit" > Salvar </Button>
                </div>
                
            </form>
        </div>
    )

}

export default Editar;