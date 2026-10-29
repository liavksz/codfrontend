import React, { useState } from "react";

function Bondinho() {
  const [inputAlunos, setInputAlunos] = useState("");
  const [inputMonitores, setInputMonitores] = useState("");
  const [resultado, setResultado] = useState(
    "Digite as quantidades e aperte o botão",
  );

  function calcular() {
    let alunos = Number(inputAlunos);
    let monitores = Number(inputMonitores);
    let total = alunos + monitores;

    if (total <= 50) {
      setResultado("S");
    } else {
      setResultado("N");
    }
  }

  return (
    <div className="demo">
      <h1>Bondinho</h1>
      <label htmlFor="">Alunos (A) </label>
      <input
        type="text"
        value={inputAlunos}
        onChange={(e) => setInputAlunos(e.target.value)}
      />
      <label htmlFor="">Monitores (M) </label>
      <input
        type="text"
        value={inputMonitores}
        onChange={(e) => setInputMonitores(e.target.value)}
      />
      <button onClick={calcular}>Calcular</button>
      <p>{resultado}</p>
    </div>
  );
}

export default Bondinho;
