import { buscarPokemon } from "./services/PokeApiService";
import { CatalogoPokemon } from "./services/BoxService";

async function main() {
  const catalogo = new CatalogoPokemon();

  const pikachu = await buscarPokemon("pikachu");

  if (pikachu !== null) {
    catalogo.adicionar(pikachu);
  }

  catalogo.listar();

catalogo.remover(999);

  catalogo.listar();
}

main();