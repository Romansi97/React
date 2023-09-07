import "./App.css";
import Boton from "./components/Boton";
import imagenLogo from "../src/Images/calculadora.png";

function App() {
  const manejarClic = () => {
    console.log("Clic");
  };

  const reiniciarContador = () => {
    console.log("Reiniciar");
  };

  return (
    <div className="App">
      <div className="logo-contenedor">
        <img className="imagen-logo" src={imagenLogo} alt="logo" />
      </div>
      <div className="contenedor-principal">
        <Boton texto="Clic" esBotonDeClic={true} manejarclic={manejarClic} />
        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarclic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
