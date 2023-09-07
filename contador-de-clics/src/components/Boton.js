import React from "react";

function Boton(texto, esBotonDeClic, manejarclic) {
  return (
    <Boton
      className={esBotonDeClic ? "boton-clic" : "boton-reiniciar"}
      onClick={manejarclic}
    >
      {texto}
    </Boton>
  );
}

export default Boton;
