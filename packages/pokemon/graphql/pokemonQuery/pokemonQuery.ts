import {gql} from '@apollo/client';

export const POKEMON_QUERY = gql`
  query getPokemon(
    $limit: Int
    $offset: Int
    $where: pokemon_v2_pokemon_bool_exp
  ) {
    pokemon_v2_pokemon(limit: $limit, offset: $offset, where: $where) {
      id
      name
      weight
      height
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
    }
  }
`;
