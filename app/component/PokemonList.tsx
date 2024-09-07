import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../search/queries";
import PokemonCard from "../component/pokemonCard/pokemonCard";
import ReactLoading from "react-loading";

const PokemonList = () => {
  const [sortType, setSortType] = useState("asc");

  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: {
      first: 100,
    },
  });

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortType(e.target.value);
  };

  const sortedPokemons =
    data?.pokemons?.slice().sort((a: any, b: any) => {
      const typeA = a.types[0]?.name ?? "";
      const typeB = b.types[0]?.name ?? "";
      if (sortType === "asc") {
        return typeA.localeCompare(typeB);
      } else {
        return typeB.localeCompare(typeA);
      }
    }) || [];

  return (
    <div className="pokemon-list">
      <div className="sort-options">
        <label htmlFor="sort">Sort by Type:</label>
        <select id="sort" value={sortType} onChange={handleSortChange}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      {loading ? (
        <ReactLoading type="balls" color="blue" height={100} width={100} />
      ) : error ? (
        <p>Error loading data: {error.message}</p>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {sortedPokemons.map((pokemon: any) => (
            <PokemonCard
              key={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
              types={pokemon.types.map((type: any) => type.name).join(", ")}
              id={0}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PokemonList;
