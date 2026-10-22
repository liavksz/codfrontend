import React, { useState } from "react";

function Pneu() {
  const [pneu1, setPneu1] = useState("");
  const [pneu2, setPneu2] = useState("");
  const [resultado, setResultado] = useState("");

  function calcular() {
    let p1 = Number(pneu1);
    let p2 = Number(pneu2);
    let resultadoo = p1 - p2;
    setResultado(resultadoo);
  }
  return (
    <div className="pneu">
      <h1>Bomba do pneu</h1>
      <label htmlFor="">Quanto você deseja </label>
      <input
        type="text"
        value={pneu1}
        onChange={(e) => setPneu1(e.target.value)}
      />
      <label htmlFor="">Quanto você tem </label>
      <input
        type="text"
        value={pneu2}
        onChange={(e) => setPneu2(e.target.value)}
      />
      <button onClick={calcular}>Calcular</button>
      <p>falta:</p>
      <p>{resultado}</p>
    </div>
  );
}

export default Pneu;
