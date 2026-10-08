import React, { useState } from "react";

function Voto() {
  const [resultado, setResultado] = useState("");

  function Votar() {
    let idade = Number(prompt("Digite sua idade:"));
    if (idade < 16) {
      setResultado("Não pode votar!");
    } else if (idade <= 17) {
      setResultado("Voto facultativo.");
    } else if (idade <= 65) {
      setResultado("Voto obrigatório.");
    } else {
      setResultado("Voto facultativo.");
    }
  }
  return (
    <div className="Voto">
      <h2>Eleição</h2>
      <button onClick={Votar}>Confira</button>
      <p>{resultado}</p>
    </div>
  );
}

export default Voto;
