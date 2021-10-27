import React from "react";
import Saludar from "./components/Saludar";
import BotonSaludar from "./components/BotonSaludar";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const user = {
    nombre: "Judit",
    primerApellido: "Lustres",
    segundoApellido: "Carballo",
    edad: 36,
    color: "Naranja",
  };

  const saludarFn = () => {};
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Saludar
          name="Judit"
          primerApellido="Lustres"
          segundoApellido="Carballo"
          edad="36"
        /> */}
        <Saludar userInfo={user} />
        <BotonSaludar saludarFn={saludarFn} />
      </header>
    </div>
  );
}

export default App;
