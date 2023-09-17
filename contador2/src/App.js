import "./App.css";
import Boton from "./componente/Boton";
import React from "react";

function App() {
  const esClic = () => {
    console.log("clic");
  };

  const esReinicio = () => {
    console.log("Reinicia");
  };

  return (
    <div className="App">
      <div className="contenedorTitulo">
        <div className="titulo">
          <h1>
            <strong>Contador de Clics</strong>
          </h1>
        </div>
      </div>
      <div className="contenedor">
        <div className="estiloBoton">
          <Boton texto="Clic" esBoton={true} clickeado={esClic} />
          <Boton texto="Reinicio" esBoton={false} clickeado={esReinicio} />
        </div>
      </div>
    </div>
  );
}

export default App;
