import React, { useState } from "react";

function Jaulas() {
  const [resultado, setResultado] = useState();

  function diully() {
    let visitantesNaArea = Number(prompt("Quantos visitantes estão na área?"));
    let horaAtual = Number(prompt("Qual é a hora atual? (0 a 23)"));

    if (visitantesNaArea === 0 && (horaAtual < 8 || horaAtual >= 18)) {
      setResultado("Liberação autorizada. Abrindo jaula.");
    } else {
      setResultado(
        "Liberação negada. Área em uso ou fora do horário permitido.",
      );
    }
  }

  return (
    <div>
      <h2>Jaulas</h2>
      <button onClick={diully}>Ver</button>
      <p>{resultado}</p>
    </div>
  );
}

export default Jaulas;
