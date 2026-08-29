import { buscarPokemon } from "./services/PokeApiService";

async function main() {
  const pokemon = await buscarPokemon("pikachu");

  console.log(pokemon);
}

main();