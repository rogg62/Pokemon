import React from "react";
import { useState, useEffect } from "react";
import "./style.css";
const Type = ({ name }) => {
  const [tipo, setTipo] = useState();
  const urlApi = `https://pokeapi.co/api/v2/pokemon/${name}`;

  useEffect(() => {
    async function pegarType() {
      const res = await fetch(urlApi);
      const data = await res.json();
      setTipo(data.types);
    }
    if (name) {
      pegarType();
    }
  }, [name, urlApi]);

  return (
    <>
      {tipo &&
        tipo.map((i) => (
          <div id="type" key={i.type.name}>
            {i.type.name}
          </div>
        ))}
    </>
  );
};

export default Type;
