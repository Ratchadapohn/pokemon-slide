import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      image
      name
      maxCP
      maxHP
      types
    }
  }
`;

export const GET_POKEMON_LIST = gql`
  query GetPokemonList(
    $keyword: String
    $generation: Int
    $type: String
    $sort: String
  ) {
    pokemons(
      filter: {
        keyword: $keyword
        generation: $generation
        type: $type
        sort: $sort
      }
    ) {
      id
      name
      image
      types {
        type {
          name
        }
      }
    }
  }
`;

export const GET_POKEMON_DETAIL = gql`
  query GetPokemonDetail($name: String!) {
    pokemon(name: $name) {
      id
      name
      types
      image
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
      evolutions {
        id
        name
        types
        maxCP
        maxHP
        image
      }
    }
  }
`;
export const GET_POKEMON_BY_TYPE = gql`
  query GetPokemonByType($type: String) {
    pokemons(filter: { type: $type }) {
      id
      name
      image
      types {
        name
      }
    }
  }
`;
