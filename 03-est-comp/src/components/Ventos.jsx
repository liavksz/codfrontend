import React, { useState } from "react";

function Ventos() {
  const [resultado, setResultado] = useState();

  function ventoss() {
    let estaGripado = prompt("Está gripado? (sim ou não)");
    let tempoViagem = Number(prompt("Qual o tempo de viagem em minutos?"));

    if (estaGripado === "não" && tempoViagem < 45) {
      setResultado("Viagem autorizada. Rumo ao show!");
    } else {
      setResultado("Deslocamento inviável. Melhor recusar este evento.");
    }
  }

  return (
    <div>
      <h2>Sarumano pt2</h2>
      <button onClick={ventoss}>Confira</button>
      <p>{resultado}</p>
    </div>
  );
}

export default Ventos;
