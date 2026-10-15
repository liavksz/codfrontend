import React, { useState } from "react";

function Transporte() {
  const [resultado, setResultado] = useState();

  function ver() {
    let emManutencao = prompt("Está em manutenção? (sim ou não)");
    let emergenciaAtiva = prompt("Há emergência ativa? (sim ou não)");

    if (emManutencao === "não" && emergenciaAtiva === "não") {
      setResultado("Transporte liberado para uso.");
    } else {
      setResultado("Transporte indisponível por motivo de segurança.");
    }
  }

  return (
    <div>
      <h2>Transporte</h2>
      <button onClick={ver}>Averiguar</button>
      <p>{resultado}</p>
    </div>
  );
}

export default Transporte;
