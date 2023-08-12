import Container from "react-bootstrap/Container";
import Cards from "../cards/Card";
import axios from "axios";

import { useEffect, useState } from "react";
const Main = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    var endpoints = [];
    for (var i = 1; i < 152; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemons(res));
  };

  const pokemonFilter = (name) => {
    var filteredPokemons = [];
    if (name === "") {
      getPokemons();
    }
    for (var i in pokemons) {
      if (pokemons[i].data.name.includes(name)) {
        filteredPokemons.push(pokemons[i]);
      }
    }

    setPokemons(filteredPokemons);
  };

  return (
    <>
      <main
        style={{ width: "100%", height: "auto", background: "#fff" }}
        className="bg-body-secondary d-flex flex-column gap-5"
      >
        <div className="bg-white d-flex justify-content-end">
          <input
            className="btn btn-dark mr-3"
            type="search"
            onChange={(e) => pokemonFilter(e.target.value)}
          />
        </div>
        <Container className="d-flex flex-wrap align-items-center justify-content-around gap-4">
          {pokemons.map((pokemon, key) => (
            <Cards
              name={pokemon.data.name}
              img={pokemon.data.sprites.front_default}
              indice={pokemon.data.id}
              key={key}
            />
          ))}
        </Container>
      </main>
    </>
  );
};

export default Main;
