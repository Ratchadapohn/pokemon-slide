export interface IPokemonListResponse {
  count: number;
  next: string;
  previous: null;
  results: IPokemonListItem[];
  pokemons: Array<{
    id: number;
    name: string;
    types: Array<{ type: { name: string } }>;
    sprites: {
      other: {
        officialArtwork: {
          frontDefault: string;
        };
      };
    };
  }>;
}

export interface IPokemonListItem {
  name: string;
  url: string;
}

export interface IResponse {
  status?: number;
  data?: IPokemonListResponse;
  error?: any;
}
