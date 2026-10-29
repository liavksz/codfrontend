import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import Demo from "./pages/Demo";
import Pneu from "./pages/Pneu";
import Ho from "./pages/Ho";
import Media from "./pages/Media";
import Bondinho from "./pages/Bondinho";
import Pum from "./pages/Pum";
import Posto from "./pages/Posto";
import Lesmas from "./pages/Lesmas";

function App() {
  return (
    <div className="app">
      <Home />
      <Demo />
      <Pneu />
      <Ho />
      <Media />
      <Bondinho />
      <Pum />
      <Posto />
      <Lesmas />
    </div>
  );
}

export default App;
