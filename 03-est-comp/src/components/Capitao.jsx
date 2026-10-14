import React, { useState } from "react";

function Capitao() {
  const [resultado, setResultado] = useState();

  function ganso() {
    let marujos = Number(prompt("Quantos marujos tem?"));
    let comida = Number(prompt("Quanta comida tem?"));
    let comidaPorMarujo = comida / marujos;
    if (marujos >= 10 && comidaPorMarujo >= 1.5) {
      setResultado("Provisões suficientes. Rumo ao horizonte!");
    } else {
      setResultado("Algo está errado. Posseidom não quer ninguém no mar hoje.");
    }
  }

  return (
    <div className="jogo">
      <h2>Capitão ganso</h2>
      <button onClick={ganso}>Calcular</button>
      <p>{resultado}</p>
    </div>
  );
}

export default Capitao;
