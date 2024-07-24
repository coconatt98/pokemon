import { Pokemon, PokemonDetail } from "../services/pokemon/types";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { fetchPokemonDetailByUrl } from "../services/pokemon/api";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const [pokemonDetail, setPokemonDetail] = useState<PokemonDetail | null>(
    null
  );

  useEffect(() => {
    const getPokemonDetail = async () => {
      const data = await fetchPokemonDetailByUrl(pokemon.url);
      setPokemonDetail(data);
    };

    getPokemonDetail();
  }, [pokemon.url]);

  const id = pokemon.url.split("/").filter(Boolean).pop();

  return (
    <div className="border rounded-xl p-4 bg-white bg-opacity-50">
      <Link to={`/pokemon/${id}`} className="flex items-center">
        {pokemonDetail && (
          <img
            src={pokemonDetail.sprites.front_default}
            alt={pokemon.name}
            className="w-20 h-20 mx-auto"
          />
        )}
        <h2 className="text-xl font-bold capitalize">{pokemon.name}</h2>
      </Link>
    </div>
  );
};

export default PokemonCard;
