import React, { useState } from "react";

function Pesoo() {
  const [resultado, setResultado] = useState();

  function pesor() {
    let altura = Number(prompt("Digite sua altura: (com . em vez de ,)"));
    let genero = prompt(
      "Digite seu gênero: (M para masculino e F para feminino.)",
    );
    let resultadoMulher = 62.1 * altura - 44.7;
    let resultadoHomem = 72.7 * altura - 58;
    if ((genero = "M")) {
      setResultado(resultadoHomem);
    } else {
      setResultado(resultadoMulher);
    }
  }

  return (
    <div>
      <h2>Peso ideal</h2>
      <button onClick={pesor}>Veja</button>
      <p>{resultado}</p>
    </div>
  );
}

export default Pesoo;
