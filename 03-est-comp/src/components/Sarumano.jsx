import React, { useState } from "react";

function Sarumano() {
  const [resultado, setResultado] = useState();
  function sarumanoo() {
    let criancasPequenas = prompt("Tem crianças pequenas? (sim ou nâo)");
    let velocidadeVento = Number(prompt("Qual a velicidade do vento?"));

    if (criancasPequenas === "nâo" && velocidadeVento >= 0.5) {
      setResultado("Fumaça liberada. Que comecem os mistérios!");
    } else {
      setResultado("Fumaça bloqueada. Aguardar condições ideais.");
    }
  }
  return (
    <div>
      <h2>Sarumano</h2>
      <button onClick={sarumanoo}>Ver</button>
      <p>{resultado}</p>
    </div>
  );
}

export default Sarumano;
