export type TPokemonReturn = {
  id: number;
  name: string;
  weight: number;
  height: number;
  pokemon_v2_pokemontypes: {
    pokemon_v2_type: {
      name: string;
    };
  }[];
};
