import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Homee';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Produto from './pages/Produto';
import Erro from './pages/Erro';

import Header from './components/header';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Sobre" element={<Sobre/>}/>
                <Route path="/Contato" element={<Contato/>}/>
                <Route path="/Produto" element={<Produto/>}/>
                <Route path="*" element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;