import { create } from "zustand";
import { IPokemonDetailResponse } from "../interface/pokemondetail";

const initStore = {
  pokemon: {
    data: [],
    loading: false,
    error: null,
  },
  fetchPokemon: {
    data: [],
    loading: false,
    error: null,
  },
};

type pokemonType = {
  [x: string]: any;
  data: IPokemonDetailResponse[];
  loading: boolean;
  error: null | any;
};

type usePokemonListStore = {
  pokemon: pokemonType;
  fetchPokemon: pokemonType;
  setPokemonList: (value: pokemonType) => void;
  setFetchPokemonList: (value: pokemonType) => void;
  clearPolemon: () => void;
};

export const usePokemonListStore = create<usePokemonListStore>((set) => ({
  ...initStore,
  setPokemonList: (value: pokemonType) => {
    set({ pokemon: value });
  },
  setFetchPokemonList: (value: pokemonType) => {
    set({ fetchPokemon: value });
  },
  clearPolemon: () => {
    set({ ...initStore });
  },
}));
