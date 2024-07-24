import React, { useEffect, useState } from "react";

import { PokemonDetail } from "../../services/pokemon/types";
import axios from "axios";
import { useParams } from "react-router-dom";

const PokemonDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      setPokemon(response.data);
    };

    fetchPokemon();
  }, [id]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center m-10">
      <div className="flex flex-row">
        <div className="flex flex-col m-3 p-5 px-10 bg-blue-500 bg-opacity-50 rounded-2xl">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <h1 className="text-3xl font-bold">{pokemon.name}</h1>
        </div>
        <div className="flex flex-col m-2 p-5 bg-blue-500 bg-opacity-50 rounded-2xl">
          <h2 className="text-2xl font-bold">Stats</h2>
          <ul>
            {pokemon.stats.map((stat) => (
              <li key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col m-1 p-5 bg-blue-500 bg-opacity-50 rounded-2xl">
          <h2 className="text-2xl font-bold">Types</h2>
          <ul>
            {pokemon.types.map((type) => (
              <li key={type.type.name}>{type.type.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailPage;
