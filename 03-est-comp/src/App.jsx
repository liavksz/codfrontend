import "./App.css";
import Jogo from "./components/Jogo";
import Pousada from "./components/Pousada";
import Voto from "./components/Voto";
import Pesoo from "./components/Pesoo";
import Macas from "./components/Macas";
import Capitao from "./components/Capitao";
import Recrutamento from "./components/Recrutamento";
import Sarumano from "./components/Sarumano";
import Ventos from "./components/Ventos";
import Palco from "./components/Palco";
import Transporte from "./components/Transporte";
import Comando from "./components/Comando";
import Jaulas from "./components/Jaulas";

function App() {
  return (
    <div className="App">
      <h1>03 estados e componentes</h1>
      <Jogo />
      <Pousada />
      <hr />
      <Voto />
      <hr />
      <Pesoo />
      <hr />
      <Macas />
      <hr />
      <h1>#030</h1>
      <hr />
      <Capitao />
      <hr />
      <Recrutamento />
      <hr />
      <Sarumano />
      <hr />
      <Ventos />
      <hr />
      <Palco />
      <hr />
      <Transporte />
      <hr />
      <Comando />
      <hr />
      <Jaulas />
    </div>
  );
}

export default App;
