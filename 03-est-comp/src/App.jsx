import "./App.css";
import Jogo from "./components/Jogo";
import Pousada from "./components/Pousada";
import Voto from "./components/Voto";
import Pesoo from "./components/Pesoo";
import Macas from "./components/Macas";
import Capitao from "./components/Capitao";
import Recrutamento from "./components/Recrutamento";

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
    </div>
  );
}

export default App;
