import React, { useState } from "react";

function Ho() {
  const [ho, setHo] = useState("");
  const [resultado, setResultado] = useState("");

  function calcular() {
    let n = Number(ho);

    if (n === 1) {
      setResultado("Ho!");
    } else if (n === 2) {
      setResultado("Ho Ho!");
    } else if (n === 3) {
      setResultado("Ho Ho Ho!");
    } else if (n === 4) {
      setResultado("Ho Ho Ho Ho!");
    } else if (n === 5) {
      setResultado("Ho Ho Ho Ho Ho!");
    } else if (n === 6) {
      setResultado("Ho Ho Ho Ho Ho Ho!");
    } else {
      setResultado("Digite um número de 1 a 6!");
    }
  }

  return (
    <div className="Ho">
      <h1>Ho Ho Ho</h1>
      <input type="text" value={ho} onChange={(e) => setHo(e.target.value)} />
      <button onClick={calcular}>Confirmar</button>
      <p>número sorteado:</p>
      <p>{resultado}</p>
    </div>
  );
}

export default Ho;
