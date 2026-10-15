import React, { useState } from "react";

function Palco() {
  const [resultado, setResultado] = useState();
  function ver() {
    let somFuncionando = prompt("O som está funcionando? (sim ou não)");
    let figurinoCompleto = prompt("O figurino está completo? (sim ou não)");

    if (somFuncionando === "sim" && figurinoCompleto === "sim") {
      setResultado("Palco liberado para Sarumano! Luzes, câmera, ilusão!");
    } else if (somFuncionando === "não" && figurinoCompleto === "sim") {
      setResultado("Sem som. Realizar apresentação alternativa no salão.");
    } else if (somFuncionando === "sim" && figurinoCompleto === "não") {
      setResultado("Faltando parte do figurino. Te vira no improviso!");
    } else {
      setResultado("Apresentação cancelada. Hora da mágica de desaparecer…");
    }
  }

  return (
    <div>
      <h2>Samurano pt3</h2>
      <button onClick={ver}>Conferir</button>
      <p>{resultado}</p>
    </div>
  );
}

export default Palco;
