"use client";

import React from "react";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../search/queries";
import ReactLoading from "react-loading";
import Image from "next/image";

const PokemonSlide = () => {
  const { data, loading, error } = useQuery(GET_POKEMONS, {
    variables: {
      first: 100,
    },
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <ReactLoading type="balls" color="white" height={100} width={100} />
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500">{error.message}</p>;
  }

  return (
    <div className="overflow-hidden w-full">
      <div className="flex animate-slide-left w-full space-x-4">
        {data?.pokemons?.map((pokemon: any, index: number) => (
          <div
            key={index}
            className="flex-none w-32 h-[135px] rounded-md shadow-lg bg-white p-2 transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={pokemon.image}
              alt={pokemon.name}
              width={80}
              height={80}
              className="object-cover mx-auto mb-2"
            />
            <div className="text-center">
              <h3 className="text-xs font-bold text-gray-700">
                {pokemon.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonSlide;
