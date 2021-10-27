import React from "react";

export default function Saludar(props) {
  console.log(
    props.name,
    props.primerApellido,
    props.segundoApellido,
    props.edad
  );

  

  console.log(props.userInfo.nombre);
  var infoU = props.userInfo;

  return (
    <div>
      <h2>
        Hola {infoU.nombre} &nbsp;
        {infoU.primerApellido}&nbsp;
        {infoU.segundoApellido}&nbsp;y
        tiene {infoU.edad} años
      </h2>
      
      <p>Su color es {infoU.color}</p>
    </div>
  );
}
