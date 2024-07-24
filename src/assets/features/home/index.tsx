import React, { useEffect, useState } from "react";

import Pagination from "../../components/pagination";
import { Pokemon } from "../../services/pokemon/types";
import PokemonCard from "../../components/pokemon-card";
import axios from "axios";

const HomePage: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchPokemons = async () => {
      const limit = 20;
      const offset = (currentPage - 1) * limit;
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      );
      setPokemons(response.data.results);
      setTotalPages(Math.ceil(response.data.count / limit));
    };

    fetchPokemons();
  }, [currentPage]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Search Pokemon"
        className="border p-2 mb-4 rounded-2xl"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default HomePage;
