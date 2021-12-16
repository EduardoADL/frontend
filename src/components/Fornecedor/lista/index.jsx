import * as React from 'react';
import  {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import axios from 'axios'
import { Link} from "react-router-dom"



export default function ListaFornecedor() {

    const [fornecedores, serFornecedores] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:8080/fornecedor')
        .then((response) =>{
            serFornecedores(response.data)
          })
    },[])
  
    function deletePost(id){
        axios.delete(`http://localhost:8080/fornecedor/${id}`)
  
        serFornecedores(fornecedores.filter(fornecedor => fornecedor.id !==id))
    }


    return (
        <div>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Nome do Fornecedor</TableCell>
                        <TableCell align="right">Editar</TableCell>
                        <TableCell align="right">Excluir</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {fornecedores.map((fornecedor) => (
                        <TableRow
                            key={fornecedor.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {fornecedor.nomefornecedor}
                            </TableCell>
                            <TableCell align="right"><Link to={{pathname:`/editarfornecedor/${fornecedor.id}`}}><Button variant="contained">Editar</Button></Link></TableCell>
                            <TableCell align="right"><Button variant="outlined" color="error" onClick={() => deletePost(fornecedor.id)}>Deletar</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <Link to={{pathname:"/createfornecedor"}}><Button variant="contained">Adicionar Fornecedor</Button></Link>
        <Link to={{pathname:"/"}}><Button variant="contained">Voltar para produtos</Button></Link>
        </div>

    )
}
