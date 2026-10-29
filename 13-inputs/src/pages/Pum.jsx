import React, { useState } from "react";

function Bomba() {
  const [numero, setNumero] = useState("");
  const [resultado, setResultado] = useState("");

  function calcular() {
    let n = Number(numero);
    let texto = "";
    let atual = 1;

    for (let i = 0; i < n; i++) {
      texto =
        texto + atual + " " + (atual + 1) + " " + (atual + 2) + " BOMBA\n";
      atual = atual + 4;
    }

    setResultado(texto);
  }

  return (
    <div className="demo">
      <h1>BOMBA</h1>
      <label>Número de linhas (N) </label>
      <input
        type="text"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
      />
      <button onClick={calcular}>Calcular</button>
      <pre>{resultado}</pre>
    </div>
  );
}

export default Bomba;
