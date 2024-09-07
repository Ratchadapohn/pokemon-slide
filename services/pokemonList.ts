// /services/pokemonListService.ts
// import client from "../utils/apolloClient"; // Adjust the path if necessary
// import { GET_POKEMON_LIST } from "../app/search/queries";
// import { IPokemonListResponse } from "../interface/pokemonlist";
// import { IResponse } from "../utils/handleresponse";
// import { ApolloError } from "@apollo/client";

// interface IGetPokemonListResponse extends IResponse {
//   status: number | undefined;
//   data?: IPokemonListResponse;
// }

// export const pokemonListService = {
//   getPokemonList: async (
//     limit?: number,
//     offset?: number
//   ): Promise<IGetPokemonListResponse> => {
//     try {
//       const { data } = await client.query({
//         query: GET_POKEMON_LIST,
//         variables: { limit, offset },
//       });

//       return {
//         status: 200,
//         data: data.pokemons,
//       };
//     } catch (error) {
//       if (error instanceof ApolloError) {
//         const networkError = error.networkError;
//         const graphQLErrors = error.graphQLErrors;

//         return {
//           status: networkError ? 502 : 400,
//           error: networkError
//             ? networkError.message
//             : graphQLErrors.length > 0
//             ? graphQLErrors.map((err) => err.message).join(", ")
//             : "An unknown error occurred",
//         };
//       }

//       return {
//         status: 500,
//         error: "An unknown error occurred",
//       };
//     }
//   },
// };
