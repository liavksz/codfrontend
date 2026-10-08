import "./App.css";
import Jogo from "./components/Jogo";
import Pousada from "./components/Pousada";
import Voto from "./components/Voto";
import Pesoo from "./components/Pesoo";
import Macas from "./components/Macas";

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
    </div>
  );
}

export default App;
