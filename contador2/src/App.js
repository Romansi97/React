import "./App.css";
import Boton from "./componente/Boton";
import Contador from "./componente/Contador";
import React from "react";
import { useState } from "react";

function App() {
  const [cantidadClic, setcantidadClic] = useState(0);

  const esClic = () => {
    setcantidadClic(cantidadClic + 1);
  };

  const esReinicio = () => {
    setcantidadClic(0);
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
        <Contador cantidadClic={cantidadClic} />
        <div className="estiloBoton">
          <Boton texto="Clic" esBoton={true} clickeado={esClic} />
          <Boton texto="Reinicio" esBoton={false} clickeado={esReinicio} />
        </div>
      </div>
    </div>
  );
}

export default App;
