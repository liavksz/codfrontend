import React, { useState } from "react";

function Media() {
  const [nota1, setNota1] = useState("");
  const [nota2, setNota2] = useState("");
  const [resultado, setResultado] = useState("");

  function calcular() {
    let n1 = Number(nota1);
    let n2 = Number(nota2);
    let resultadoFofo = (n1 + n2) / 2;

    if (resultadoFofo < 4) {
      setResultado("Você está reprovado!");
    } else if (resultadoFofo >= 4 && resultadoFofo < 7) {
      setResultado("Você está de recuperação!");
    } else if (resultadoFofo >= 7) {
      setResultado("Você está aprovado, parabéns!!");
    }
  }

  return (
    <div className="media">
      <h1>Média</h1>
      <label htmlFor="">Digite sua primeira nota</label>
      <input
        type="text"
        value={nota1}
        onChange={(e) => setNota1(e.target.value)}
      />
      <label htmlFor="">Digite sua segunda nota</label>
      <input
        type="text"
        value={nota2}
        onChange={(e) => setNota2(e.target.value)}
      />
      <button onClick={calcular}>Conferir</button>
      <p>{resultado}</p>
    </div>
  );
}

export default Media;
