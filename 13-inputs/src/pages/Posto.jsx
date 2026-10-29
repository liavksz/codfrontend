import React, { useState } from "react";

function Posto() {
  const [codigo, setCodigo] = useState("");
  const [alcool, setAlcool] = useState(0);
  const [gasolina, setGasolina] = useState(0);
  const [diesel, setDiesel] = useState(0);
  const [mensagem, setMensagem] = useState("");

  function Votar() {
    let opcao = Number(codigo);

    if (opcao === 1) {
      setAlcool(alcool + 1);
    } else if (opcao === 2) {
      setGasolina(gasolina + 1);
    } else if (opcao === 3) {
      setDiesel(diesel + 1);
    } else if (opcao === 4) {
      setMensagem("MUITO OBRIGADO");
    }

    setCodigo("");
  }

  return (
    <div className="demo">
      <h1>Posto de Gasolina</h1>

      <label>Código (1 a 4) </label>
      <input
        type="text"
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
      />
      <button onClick={Votar}>Enviar</button>

      <h2>{mensagem}</h2>
      <p>Álcool: {alcool}</p>
      <p>Gasolina: {gasolina}</p>
      <p>Diesel: {diesel}</p>
    </div>
  );
}

export default Posto;
