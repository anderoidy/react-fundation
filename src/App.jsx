import './App.css';
import React from "react";

import Primeiro from './components/Primeiro'
import CompParametro from './components/CompParametro'
import CompFilhos from './components/CompFilhos'
import Card from './components/layout/Card';

export default (props) => (
    <div className="App">
    <Card titulo="Componente com Filhos">
        <CompFilhos>
        <ul>
                <li>Ana</li>
                <li>Bia</li>
                <li>Carlos</li>
                <li>Daniel</li>
                <li>Joao</li>
                <li>Sandro</li>
            </ul>
        </CompFilhos>       
    </Card>
    <Card titulo="Compontente com Parametro">
        <CompParametro titulo="Esse é o Titulo" subtitulo="Esse é o Subtitulo" />
    </Card>
    <Card titulo="Primeiro Componente">
        <Primeiro />
    </Card>
        {/* <compFilhos>
  
        </compFilhos> */}
        {/* <Primeiro />
        <CompParametro titulo="Esse é o titulo por parametro" 
            subtitulo="Esse é o subtitulo por paramentro"/>

        <CompParametro titulo="Opa" 
            subtitulo="Epa"/> */}

    </div>

);