import client from "../utils/apolloClient";
import { GET_POKEMON_DETAIL } from "../app/search/queries";

export interface IPokemonDetailResponse {
  id: number;
  name: string;
  image: string;
  types: { type: { name: string } }[];
  stats: { stat: { name: string }; base_stat: number }[];
  height: number;
  weight: number;
  base_experience: number;
  abilities: { ability: { name: string } }[];
  sprites: {
    other: {
      "official-artwork": { front_default: string };
    };
    dream_world: { front_default: string };
  };
}

export const pokemonDetailService = {
  getPokemonDetail: async (
    name: string
  ): Promise<IPokemonDetailResponse | null> => {
    try {
      const { data } = await client.query({
        query: GET_POKEMON_DETAIL,
        variables: { name },
      });

      if (data && data.pokemon) {
        return data.pokemon;
      } else {
        console.error("No data found:", data);
        return null;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  },
};
