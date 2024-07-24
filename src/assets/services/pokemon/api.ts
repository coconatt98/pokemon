import { Pokemon, PokemonDetail } from "./types";

import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2";

export const fetchPokemons = async (
  limit: number,
  offset: number
): Promise<{ results: Pokemon[]; count: number }> => {
  const response = await axios.get(
    `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`
  );
  return response.data;
};

export const fetchPokemonDetail = async (
  id: string
): Promise<PokemonDetail> => {
  const response = await axios.get(`${BASE_URL}/pokemon/${id}`);
  return response.data;
};

export const fetchPokemonDetailByUrl = async (
  url: string
): Promise<PokemonDetail> => {
  const response = await axios.get(url);
  return response.data;
};
