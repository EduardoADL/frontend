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




export default function LandingPage() {

    const [produtos, setProdutos] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:8080/produto')
        .then((response) =>{
          setProdutos(response.data)
        })
        .catch(()=> {
          alert("Problema ao enviar formulario")
        })
    },[])
  
    function deletePost(id){
        axios.delete(`http://localhost:8080/produto/${id}`)
  
        setProdutos(produtos.filter(produto => produto.id !==id))
    }


    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Nome</TableCell>
                        <TableCell align="right">quantidade</TableCell>
                        <TableCell align="right">Preço de Venda</TableCell>
                        <TableCell align="right">Preço de Compra</TableCell>
                        <TableCell align="right">Tipo de Produto</TableCell>
                        <TableCell align="right">Fornecedor</TableCell>
                        <TableCell align="right">Editar</TableCell>
                        <TableCell align="right">Excluir</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {produtos.map((produto) => (
                        <TableRow
                            key={produto.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {produto.nome}
                            </TableCell>
                            <TableCell align="right">{produto.quantidade}</TableCell>
                            <TableCell align="right">{produto.precovenda}</TableCell>
                            <TableCell align="right">{produto.precocompra}</TableCell>
                            <TableCell align="right">{produto.tipoProduto.tipoproduto}</TableCell>
                            <TableCell align="right">{produto.fornecedor.nomefornecedor}</TableCell>
                            <TableCell align="right"><Button variant="contained" color="success">Editar</Button></TableCell>
                            <TableCell align="right"><Button variant="outlined" color="error" onClick={() => deletePost(produto.id)}>Deletar</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    )
}
