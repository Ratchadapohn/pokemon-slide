import React from "react";
import Link from "next/link";
import Image from "next/image";

interface PokemonCardProps {
  id: number;
  name: string;
  image: string;
  types: string[];
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

const PokemonCard: React.FC<PokemonCardProps> = ({ name, image, types }) => {
  return (
    <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
      <div className="relative w-full h-48 mb-3">
        <Image
          src={image}
          alt={name}
          width={192}
          height={192}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div key={name}>
        <Link href={`/pokemon/${name}`}>
          <h3 className="text-blue-500 hover:underline">{name}</h3>
        </Link>
      </div>

      <div className="flex flex-wrap gap-2 mt-3">
        {types.map((type, index) => (
          <span
            key={index}
            className={`px-3 py-1 rounded-full text-sm font-semibold border shadow-sm ${getTypeColor(
              type
            )}`}
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
