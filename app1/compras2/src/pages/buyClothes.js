import React, { useState } from "react";
import { Modal, Button } from "antd";
import { useHistory } from "react-router-dom";
import Inicio from "./Inicio";

function BuyClothes() {
    let history = useHistory();
    const [amt, setAmt] = useState(0);
  const listaCamisetas = [
    {
      id: 1,
      nombre: "Nodejs T-Shirt",
      costo: 12,
      img: "https://firebasestorage.googleapis.com/v0/b/adiosmultas-c4dd2.appspot.com/o/ropaVenta%2FnodejsTshirt.jpg?alt=media&token=25cb2c73-ace6-47d6-b23c-3577f6528f2f",
    },
    {
      id: 2,
      nombre: "Python T-Shirt",
      costo: 25,
      img: "https://firebasestorage.googleapis.com/v0/b/adiosmultas-c4dd2.appspot.com/o/ropaVenta%2FpythonTshirt.jpg?alt=media&token=e5a5dbc1-71cb-4d7e-af1d-872732040bcb",
    },
    {
      id: 3,
      nombre: "Javascript T-Shirt",
      costo: 15,
      img: "https://firebasestorage.googleapis.com/v0/b/adiosmultas-c4dd2.appspot.com/o/ropaVenta%2FjavascriptTshirt.jpg?alt=media&token=dbcfc069-e4c7-4a29-ad09-721adfb4de8f",
    },
  ];
  const [producto, setProducto] = useState("");
  let handleClick = (product) => {
 
    //alert("El costo del Producto es de " + product.costo + " USD");
    setAmt(product.costo)
    showModal();
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="App">
      <h1>i-CodeTech Store</h1>
      <h2>Escoje tu camiseta favorita y pídela hoy!</h2>
      <p>Producto escogido: {producto}</p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {listaCamisetas.map((camiseta) => {
          return (
            <div style={{ margin: 20 }} key={camiseta.id}>
              <img
                src={camiseta.img}
                width="230px"
                heigh="230px"
                alt="Imagen camiseta"
              />
              <br></br>
              <p>
                <b>{camiseta.nombre}</b>
              </p>
              <p>Costo: {camiseta.costo} USD</p>
              <button
                
                onClick={() => {
                  //history.push("/success")
                    setProducto(camiseta.nombre);
                  handleClick(camiseta);
                  //showModal()
                }}
              >
                Comprar
              </button>
              <Modal
                title="Comprar con PayPal"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
               
              >
                <Inicio amt={amt}/>
              </Modal>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BuyClothes;
