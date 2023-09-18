import React from "react";
import "../estilo/Contador.css";

function Contador({ cantidadClic }) {
  return <div className="contador">{cantidadClic}</div>;
}

export default Contador;
