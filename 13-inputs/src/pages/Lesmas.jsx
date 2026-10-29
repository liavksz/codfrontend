import React, { useState } from "react";

function Lesmas() {
  const [velocidades, setVelocidades] = useState("");
  const [nivel, setNivel] = useState("");

  function calcular() {
    let lista = velocidades.split(" ");
    let maior = 0;

    for (let i = 0; i < lista.length; i++) {
      let v = Number(lista[i]);
      if (v > maior) {
        maior = v;
      }
    }

    if (maior < 10) {
      setNivel("1");
    } else if (maior < 20) {
      setNivel("2");
    } else {
      setNivel("3");
    }
  }

  return (
    <div className="demo">
      <h1>Corrida de Lesmas</h1>

      <label>Velocidades (separadas por espaço): </label>
      <input
        type="text"
        value={velocidades}
        onChange={(e) => setVelocidades(e.target.value)}
        placeholder="Ex: 10 15 18 20 15"
      />
      <button onClick={calcular}>Calcular</button>

      <p>{nivel}</p>
    </div>
  );
}

export default Lesmas;
