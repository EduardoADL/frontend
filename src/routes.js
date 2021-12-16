import React from "react";
import LandingPage from "./screens/LandingPage/index"
import Editar from "./screens/Edit/index";
import Formulario from './screens/Create/index'
import FormularioFornecedor from './components/Fornecedor/criar/index'
import EditarFornecedor from './components/Fornecedor/editar/index'
import ListaFornecedor from './components/Fornecedor/lista/index'
import FormularioTipo from './components/TipoProduto/criar/index'
import EditarTipo from './components/TipoProduto/editar/index'
import ListaTipo from './components/TipoProduto/lista/index'
import{BrowserRouter as Router, Route, Routes} from "react-router-dom";

function Rotas(){

    return(
        <Router>
            <Routes>
                <Route path="/" exact element={<LandingPage/>} />
                <Route path="/create" exact element={<Formulario/>} />
                <Route path="/edit/:id" exact element={<Editar/>} />
                <Route path="/createfornecedor" exact element={<FormularioFornecedor/>} />
                <Route path="/editarfornecedor/:id" exact element={<EditarFornecedor/>} />
                <Route path="/listafornecedor" exact element={<ListaFornecedor/>} />
                <Route path="/createtipoproduto" exact element={<FormularioTipo/>} />
                <Route path="/editartipoproduto/:id" exact element={<EditarTipo/>} />
                <Route path="/listatipoproduto" exact element={<ListaTipo/>} />
            </Routes>
        </Router>
    )

}
export default Rotas;