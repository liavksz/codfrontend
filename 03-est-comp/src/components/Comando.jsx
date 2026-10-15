import React, { useState } from "react";

function Comando() {
  const [resultado, setResultado] = useState();

  function diully() {
    let crachaValido = prompt("O crachá é válido? (sim ou não)");
    let digitalReconhecida = prompt("A digital foi reconhecida? (sim ou não)");

    if (crachaValido === "sim" && digitalReconhecida === "sim") {
      setResultado("Acesso permitido");
    } else {
      setResultado("Acesso negado");
    }
  }
  return (
    <div>
      <h2>Centro de Comando</h2>
      <button onClick={diully}>Confira</button>
      <p>{resultado}</p>
    </div>
  );
}

export default Comando;
