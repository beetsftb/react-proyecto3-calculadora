import React from "react";
import '../Hojas-de-estilo/Boton.css'


function Boton (props){

    /*Creamos una función */
    const esOperador= valor =>{
        return isNaN(valor) && (valor !== '.') && (valor!== '=');
    };
    return(
        <div 
        className={`boton-contenedor ${esOperador(props.children)?'operador':''}`.trimEnd()}
        onClick={()=>props.manejarClic(props.children)}>
            {/*Esto hace que se genere un componente que requiere cierre y todo lo que coloque en*/ }
            {props.children}
        </div>
    );

}



export default Boton;