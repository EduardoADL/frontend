import * as React from "react";
import "./index.css";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from "axios";
import { useForm } from "react-hook-form"
import { Link} from "react-router-dom"


function FormularioTipo() {

    const { register, handleSubmit } = useForm()

    const addPostTipoProduto = async data => axios.post("http://localhost:8080/tipoproduto", data)
        .then(() => {
            alert("Enviado")
            window.location = '/listatipoproduto'
        })
        .catch(() => {
            alert("preencha os dados corretamente!")
        })

    return (
        <div className="formulario">
            <form onSubmit={handleSubmit(addPostTipoProduto)}>
                <div>
                    <TextField id="standard-basic" label="Tipo de Produto" name="tipoproduto" inputProps={{ 'data-testid': 'nometipoproduto' }} InputLabelProps={{ shrink: true }} {...register("tipoproduto")} variant="standard" />
                </div>

                <div className="botao" >
                    <Button variant="contained" type="Submit"> Salvar </Button>
                </div>
                <div >
                    <Link to ="/listatipoproduto"><Button variant="contained"> Voltar </Button></Link>
                </div>

            </form>
        </div>
    )


}

export default FormularioTipo