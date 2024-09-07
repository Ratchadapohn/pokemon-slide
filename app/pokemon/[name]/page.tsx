"use client";

import { useQuery } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { GET_POKEMON_DETAIL } from "../../search/queries";
import Image from "next/image";

interface Pokemon {
  id: string;
  name: string;
  image: string;
  types: string[];
  attacks: {
    fast: {
      name: string;
      type: string;
      damage: number;
    }[];
  };
  evolutions?: Evolution[];
  maxCP?: number;
  maxHP?: number;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}

interface Evolution {
  id: string;
  name: string;
  classification: string;
  types: string[];
  resistant?: string[];
  weaknesses?: string[];
  fleeRate: number;
  maxCP: number;
}

const getTypeColor = (type: string) => {
  switch (type.toLowerCase()) {
    case "fire":
      return "bg-red-100 text-red-800 border-red-300";
    case "water":
      return "bg-blue-100 text-blue-800 border-blue-300";
    case "grass":
      return "bg-green-100 text-green-800 border-green-300";
    case "electric":
      return "bg-yellow-100 text-yellow-800 border-yellow-300";
    case "poison":
      return "bg-purple-100 text-purple-800 border-purple-300";
    case "flying":
      return "bg-indigo-100 text-indigo-800 border-indigo-300";
    default:
      return "bg-gray-100 text-gray-800 border-gray-300";
  }
};

export default function PokemonDetailPage({
  params,
}: {
  params: { name: string };
}) {
  const { name } = params;
  const router = useRouter();
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      router.push("/search");
    }, 300);
  };

  const { data, loading, error } = useQuery<{ pokemon: Pokemon }>(
    GET_POKEMON_DETAIL,
    {
      variables: { name },
    }
  );

  if (loading)
    return <div className="text-center mt-20 text-2xl">Loading...</div>;
  if (error)
    return (
      <div className="text-center mt-20 text-red-500">{error.message}</div>
    );

  const pokemon = data?.pokemon;

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-500 flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8 relative">
      <div
        onClick={handleClick}
        className="cursor-pointer bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition-all duration-300 absolute top-0 left-0 m-[30px]"
        style={{ width: "50px", height: "50px", border: "2px solid #4C51BF" }}
      >
        <IoChevronBackCircleOutline size={30} className="text-indigo-600" />
      </div>
      <div className="flex flex-col items-center mb-10">
        {pokemon?.image && (
          <Image
            src={pokemon.image}
            alt={pokemon.name}
            width={256}
            height={256}
            className="w-64 h-64 object-contain border-4 border-white rounded-full shadow-xl mb-4"
          />
        )}

        <h1 className="text-5xl font-extrabold text-white capitalize mb-6">
          {pokemon?.name}
        </h1>

        <div className="flex space-x-4">
          {pokemon?.types?.map((type: string, index: number) => (
            <span
              key={index}
              className={`px-4 py-2 rounded-full font-semibold shadow-md ${getTypeColor(
                type
              )}`}
            >
              {type}
            </span>
          ))}
        </div>
      </div>
      <div className="bg-white bg-opacity-70 p-6 rounded-lg shadow-lg w-full max-w-4xl mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Stats</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <p className="text-lg font-medium text-gray-600">
            Max CP: {pokemon?.maxCP}
          </p>
          <p className="text-lg font-medium text-gray-600">
            Max HP: {pokemon?.maxHP}
          </p>
        </div>
      </div>
      <div className="bg-white bg-opacity-70 p-6 rounded-lg shadow-lg w-full max-w-4xl mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Attacks</h2>
        <div className="space-y-2">
          {pokemon?.attacks.fast.map((attack, index) => (
            <div
              className="flex justify-between items-center text-lg font-medium text-gray-600"
              key={index}
            >
              <span>
                {attack.name} (<span className="capitalize">{attack.type}</span>
                )
              </span>
              <span>{attack.damage} damage</span>
            </div>
          ))}
        </div>
      </div>
      {pokemon?.evolutions && (
        <div className="bg-white bg-opacity-70 p-6 rounded-lg shadow-lg w-full max-w-4xl">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Evolutions
          </h2>
          {pokemon.evolutions.map((evolution: Evolution, index) => (
            <div key={index} className="border-b border-gray-300 py-4">
              <h3 className="text-xl font-bold text-gray-700">
                {evolution.name}
              </h3>
              <p className="text-lg text-gray-600">
                {evolution.classification}
              </p>
              <p className="text-lg text-gray-600">Max CP: {evolution.maxCP}</p>
              <p className="text-lg text-gray-600">
                Types: {evolution.types.join(", ")}
              </p>
              <p className="text-lg text-gray-600">
                Resistant to:{" "}
                {evolution.resistant ? evolution.resistant.join(", ") : "None"}
              </p>
              <p className="text-lg text-gray-600">
                Weaknesses:{" "}
                {evolution.weaknesses
                  ? evolution.weaknesses.join(", ")
                  : "None"}
              </p>
              <p className="text-lg text-gray-600">
                Flee Rate: {evolution.fleeRate}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
