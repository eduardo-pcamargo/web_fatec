import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from '@material-ui/core';
import { Grid } from '@mui/material';
import Navbar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";

export const Home = () => {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    var endpoints = []
    for (let i = 1; i < 152; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }

    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
  };

  const pokemonFilter = (name) => {
    var filteredPokemon = []
    if (name === "") {
      getPokemons();
    }
    for (var i in pokemons) {
      if (pokemons[i].data.name.includes(name)) {
        filteredPokemon.push(pokemons[i]);
      }
    }
    setPokemons(filteredPokemon);
  }

  return (
    <div>
      <Navbar pokemonFilter={pokemonFilter} />
      <Container maxWidth={false}>
        <Grid container spacing={2}>
          {pokemons.map((pokemon, key) => (
            <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
              <PokemonCard
                id={pokemon.data.id}
                name={pokemon.data.name}
                image={pokemon.data.sprites.front_default}
                types={pokemon.data.types} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};