import React from "react";
import { useState, useEffect } from "react";

const Fetch = ({name}) => {
  const [poke, setImg] = useState();
  let Pokemon = name;

  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${Pokemon}`;

  useEffect(() => {
    async function pegarImagem() {
      try {
        const res2 = await fetch(apiUrl);
        const data2 = await res2.json();
        const result = data2.sprites.front_default;
        setImg(result);
      } catch (error) {
        console.error();
      }
    }
    pegarImagem();
  });

  return (
    <>
      <img src={poke} alt="" />
    </>
  );
};


export default Fetch;
