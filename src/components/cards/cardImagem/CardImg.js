import React, { useEffect, useState } from "react";
import "../style.css";

const CardImg = ({ pokemon }) => {
  let name = pokemon;
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const [imgPoke, setImgpoke] = useState();

  useEffect(() => {
    async function pegaImagem() {
      const res = await fetch(apiUrl);
      const data = await res.json();
      const result = data.sprites.front_default;
      setImgpoke(result);
    }
    pegaImagem();
  }, [apiUrl, pokemon]);

  return (
    <>
      <img id="img" src={imgPoke} alt={name} />
    </>
  );
};

export default CardImg;
