import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';

// exact -> verifica igualdade, verifica se o caminho é igual ao que está apresentando na barra de pesquisa de site
const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={Home} path="/" exact /> 
            <Route component={CreatePoint} path="/create-point" />  
        </BrowserRouter>
    );
}

export default Routes;