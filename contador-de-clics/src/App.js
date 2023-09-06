import "./App.css";
import imagenLogo from "../src/Images/calculadora.png";

function App() {
  return (
    <div className="App">
      <div className="logo-contenedor">
        <img className="imagen-logo" src={imagenLogo} alt="logo" />
      </div>
      <div className="contenedor-principal"></div>
    </div>
  );
}

export default App;
