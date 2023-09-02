import React from "react";
import "../styles/Testimonio.css";

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../images/${props.imagen}.png`)}
        alt="Foto Emma"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> en <strong>{props.pais}</strong>
        </p>
        <p className="cargo-testimonio">
          <strong>{props.cargo}</strong> en <strong>{props.empresa}</strong>
        </p>
        <p className="texto-testimonio">"{props.texto}"</p>
      </div>
    </div>
  );
}

export default Testimonio;
