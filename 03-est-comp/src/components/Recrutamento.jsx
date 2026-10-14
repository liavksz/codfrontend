import React, { useState } from "react";

function Recrutamento() {
  const [resultado, setResultado] = useState();
  function recrutamentoo() {
    let idade = Number(prompt("Quantos anos você tem?"));
    let nadar = prompt("Você sabe nadar?");
    let recomendacao = prompt("Você tem carta de recomendação?");
    let talvez = recomendacao == "sim" && idade >= 14;
    if (nadar == ("sim" && idade > 16)) {
      setResultado("Aprovado para o navio!");
    } else if (talvez) {
      setResultado(
        "Aprovado sob recomendação. Monitorar nas primeiras viagens.",
      );
    } else {
      setResultado(
        "Reprovado. Volte quando estiver mais preparado para o mar.",
      );
    }
  }

  return (
    <div>
      <h2>Capitão ganso pt2</h2>
      <button onClick={recrutamentoo}>Ver</button>
      <p>{resultado}</p>
    </div>
  );
}

export default Recrutamento;
