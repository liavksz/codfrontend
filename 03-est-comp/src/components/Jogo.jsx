import React, { useState } from "react";

function Jogo() {
  const [resultado, setResultado] = useState();

  function classificar() {
    let pontos = Number(prompt("Quantos pontos?"));
    if (pontos <= 10) {
      setResultado("Moggo o betinha");
    } else if (pontos <= 100) {
      setResultado("Mantenha a esperança, o sol nasce até pra cachorro");
    } else if (pontos <= 200) {
      setResultado("Supimpa!!");
    } else {
      setResultado("farmou aura");
    }
  }

  return (
    <div className="jogo">
      <h2>Jogo do Mano Juca</h2>
      <button onClick={classificar}>Classificar</button>
      <hr />
      {resultado}
    </div>
  );
}

export default Jogo;
