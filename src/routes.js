import React from "react";
import LandingPage from "./screens/LandingPage/index"
import Editar from "./screens/Edit/index";
import Formulario from './screens/Create/index'
import{BrowserRouter as Router, Route, Routes} from "react-router-dom";

function Rotas(){

    return(
        <Router>
            <Routes>
                <Route path="/" exact element={<LandingPage/>} />
                <Route path="/create" exact element={<Formulario/>} />
                <Route path="/edit/:id" exact element={<Editar/>} />
            </Routes>
        </Router>
    )

}
export default Rotas;