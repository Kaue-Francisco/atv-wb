import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/home';
import Clientes from '../pages/Listar/listar';
import CadastroCliente from '../pages/Cadastrar/cadastro';
import DetalhesCliente from '../pages/ClienteEspecifico/ClienteEspecifico';

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/clientes' element={<Clientes />} />
                <Route path='/cadastrar' element={<CadastroCliente />} />
                <Route path='/cliente/:id' element={<DetalhesCliente />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;