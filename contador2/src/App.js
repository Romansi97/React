import "./App.css";
import Boton from "./componente/Boton";
import React from "react";

function App() {
  const esClic = () => {
    console.log("clic");
  };

  return (
    <div className="App">
      <div className="contenedorTitulo">
        <div className="Titulo">
          <h1>
            <strong>CONTADOR DE CLICS</strong>
          </h1>
        </div>
      </div>
      <div className="contenedor">
        <div className="estiloBoton">
          <Boton texto="Clic" esBoton={true} clickeado={esClic} />
        </div>
      </div>
    </div>
  );
}

export default App;
