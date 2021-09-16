import React from "react";
import { useHistory } from "react-router-dom";
import addBuy, { postData } from "../api/services";

export default function Inicio({ amt }) {
  //let history = useHistory();
  
  const pay = () => {
    console.log("valor recibido", amt);
    const data = {
      "cod_prod": 2 ,
      "nom_prod": "Camiseta variada",
      "cost_prod": amt 
    }
  addBuy(data)
    //console.log("respuesta", response ) ;
    alert("Articulo adquirido con exito")
  };
  return (
    <div>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/adiosmultas-c4dd2.appspot.com/o/paypal.jpg?alt=media&token=5c327ad7-7fde-403d-819b-00f6e8496112"
        width="350px"
        height="300px"
      />
      <p>Estas a un paso de comprar la mejor camiseta para programadores.</p>

      <button onClick={pay}>
         <a href={`https://protected-shore-58344.herokuapp.com/pay/${amt}`}> Pagar ahora</a> 
      </button>
    </div>
  );
}
