import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Inputs controlados</h1>
      <label htmlFor="">Login </label>
      <input type="text" />
      <button> Entrar</button>
    </div>
  );
}

export default App;
