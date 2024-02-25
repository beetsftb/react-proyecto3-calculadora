import "./App.css";
import logoFreeCodecamp from "./Imagenes/freecodecamp-logo.png";
import Boton from "./Componentes/Boton";
import Pantalla from "./Componentes/Pantalla";
import BotonClear from "./Componentes/BotonClear";
import { useState } from "react";
import {evaluate} from 'mathjs';

function App() {

  const [input,setInput]=useState('');

  const agregarInput= val=>{
    setInput(input+val);
  };

  const calcularResultado=()=>{
    /*las cadenas de caracteres si estan vacias arrojan falso sino verdadero*/
    if(input){
      setInput(evaluate(input));
  }else{
    alert('Por favor ingrese valores para calcular');
  }
  }

  




  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          src={logoFreeCodecamp}
          className="freecodecamp-logo"
          alt="Logo Freecodecamp"
        />
      </div>
      <div className="contenedor-calculadora">
        <Pantalla input={input}/>
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={()=>setInput('')}>Limpiar</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
