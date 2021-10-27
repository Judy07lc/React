import React from "react";

export default function BotonSaludar(props) {
 
    const saludar = () => {
    console.log("Hola!!!!!");
  };

  return (
    <div>
      <button onClick={saludar}>Saludar</button>
    </div>
  );
}
