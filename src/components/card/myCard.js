import React from "react";
import { useState, useEffect } from "react";
import "./myCard.css";
import { Card } from "react-bootstrap";
import Fetch from "../../Hooks/Fetch";
import Type from "./Type/Type";
const estilo = {
  width: "270px",
  borderRadius: "15px",
};

const MyCard = () => {
  const [name, setName] = useState();

  useEffect(() => {
    async function pegarNome() {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      const data = await res.json();
      setName(data);
    }
    pegarNome();
  }, []);
  return (
    <>
      {name &&
        name.results.map((item) => (
          <Card
            style={estilo}
            className="bg-transparent d-flex align-items-center flex-row justify-content-center "
            key={item.name}
          >
            <Fetch name={item.name} />
            <div
              id="info"
              className="d-flex align-items-center justify-content-center flex-column"
            >
              <Card.Title>{item.name}</Card.Title>
              <div className="d-flex align-items-center justify-content-center gap-1">
                <Type name={item.name} />
              </div>
            </div>
          </Card>
        ))}
    </>
  );
};

export default MyCard;
