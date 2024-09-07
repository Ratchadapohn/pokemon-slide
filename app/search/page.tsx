"use client";

import React from "react";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../search/queries";
import PokemonCard from "../component/pokemonCard/pokemonCard";
import ReactLoading from "react-loading";
import { useForm } from "react-hook-form";
import { typesList } from "../../utils/optionList";
import { FcSearch } from "react-icons/fc";
import PokemonSlide from "../component/PokemonSlide";
import Image from "next/image";

const SearchPage = () => {
  const { register, watch } = useForm();
  const type = watch("type", "all");
  const searchQuery = watch("searchQuery", "");

  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: {
      first: 100,
    },
  });

  const filteredPokemons =
    data?.pokemons?.filter((pokemon: any) => {
      const matchesType =
        type === "all" ||
        pokemon.types?.some(
          (t: string) => t.toLowerCase() === type.toLowerCase()
        );
      const matchesName = pokemon.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesType && matchesName;
    }) || [];

  return (
    <div className="min-h-screen bg-list-bg bg-cover bg-center p-8 flex flex-col items-center">
      <div className="pt-10 mb-6 flex flex-col items-center gap-4">
        <Image
          src="/images/logo.webp"
          alt="Logo"
          width={140}
          height={140}
          priority
          className="mb-4"
        />
        <Image
          src="/images/pngegg.png"
          alt="Egg"
          width={60}
          height={60}
          className="mb-4"
        />
      </div>

      <div className="bg-gray-600 shadow-2xl p-6 rounded-lg mb-8 w-full max-w-4xl flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col w-full md:w-1/2">
          <label
            htmlFor="searchQuery"
            className="text-white text-lg font-semibold mb-2"
          >
            Search your Pokémon
          </label>
          <div className="flex items-center gap-2 bg-white rounded-lg pl-3 pr-3 shadow-md hover:shadow-xl focus-within:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="text-xl text-blue-500">
              <FcSearch />
            </div>
            <input
              {...register("searchQuery")}
              id="searchQuery"
              type="text"
              placeholder="Search Pokémon..."
              className="p-0 w-full text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            />
          </div>
        </div>

        <div className="flex flex-col w-full md:w-1/2">
          <label
            htmlFor="type"
            className="text-white text-lg font-semibold mb-2"
          >
            Select Pokémon Type:
          </label>
          <select
            {...register("type")}
            id="type"
            className="p-2 border border-gray-300 rounded-md shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-150 ease-in-out"
          >
            <option value="all">All Types</option>
            {typesList.map((typeOption, index) => (
              <option key={`type-key-${index}`} value={typeOption}>
                {typeOption}
              </option>
            ))}
          </select>
        </div>
      </div>
      <PokemonSlide />

      {loading ? (
        <div className="flex justify-center items-center h-full">
          <ReactLoading type="balls" color="white" height={100} width={100} />
        </div>
      ) : error ? (
        <p className="text-red-500 text-center mt-5">
          Error loading Pokémon data: {error.message}
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-5 w-full max-w-7xl">
          {filteredPokemons.map((pokemon: any) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              image={pokemon.image || " "}
              name={pokemon.name}
              types={pokemon.types}
            />
          ))}
        </div>
      )}

      <div className="flex justify-center items-center py-10">
        <Image
          src="/images/pngegg (1).png"
          width={320}
          height={180}
          alt="Footer Image"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default SearchPage;
