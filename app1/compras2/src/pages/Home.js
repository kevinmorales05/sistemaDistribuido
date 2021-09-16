import React from "react";
import { useHistory } from "react-router-dom";

export default function Home() {
  let history = useHistory();
  return (
    <div>
      <div className="background">
        <h1
          style={{
            color: "white",
            alignContent: "center",
            justifyContent: "center",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            margin: "auto",
            marginBottom: 0,
            fontSize: "70px",
            WebkitTextStroke: "black 2px",
          }}
        >
          i-Code Tech Store
        </h1>
        <button
          onClick={() => {
            history.push("/clothes");
          }}
          className="btn"
        >
          Iniciar
        </button>
      </div>
    </div>
  );
}
