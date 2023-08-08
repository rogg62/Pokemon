import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Cards from "../cards/Card";
const Main = () => {
  const [name, setName] = useState();

  useEffect(() => {
    async function pegarName() {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      const data = await res.json();
      setName(data);
    }
    pegarName();
  }, []);

  return (
    <main
      style={{ width: "100%", height: "auto", background: "#fff" }}
      className="bg-body-secondary p-3"
    >
      <Container className="d-flex flex-wrap align-items-center justify-content-around gap-4">
        <Cards name={name} />
      </Container>
    </main>
  );
};

export default Main;
