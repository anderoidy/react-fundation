import "./App.css";
import React from "react";

import Primeiro from "./components/Primeiro";
import CompParametro from "./components/CompParametro";
import CompFilhos from "./components/CompFilhos";
import Card from "./components/layout/Card";
import Repeticao from "./components/Repeticao";
import CondicionalComTernario from "./components/CondicionalComTernario";
import CondicionalComIf from "./components/CondicionalComIf";

export default (props) => (
  <div className="App">

    <Card titulo="#06 - Condicional v2">
      <CondicionalComIf numero={15}></CondicionalComIf>
    </Card>

    <Card titulo="#05 - Condicional v1">
      <CondicionalComTernario numero={10}></CondicionalComTernario>
    </Card>

    <Card titulo="#04 - Repetição">
      <Repeticao></Repeticao>
    </Card>

    <Card titulo="#03 - Componente com Filhos">
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

    <Card titulo="#02 - Compontente com Parametro">
      <CompParametro titulo="Esse é o Titulo" subtitulo="Esse é o Subtitulo" />
    </Card>

    <Card titulo="#01 - Primeiro Componente">
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
