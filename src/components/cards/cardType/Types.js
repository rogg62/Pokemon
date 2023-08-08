import React, { useEffect, useState } from "react";
import "../style.css"

const Types = ({ pokemon }) => {
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  const [tipo, setTipo] = useState();
  useEffect(() => {
    async function pegarTipo() {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setTipo(data.types);
    }
    pegarTipo();
  }, [apiUrl, pokemon]);

  return (
    <>
      {tipo &&
        tipo.map((i) => (
          <span className={i.type.name} key={i.type.name}>
            {i.type.name}
          </span>
        ))}
    </>
  );
};

export default Types;
