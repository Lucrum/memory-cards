// fetch 12 pokemon, then render 12 cards
// perhaps more for higher difficulties?
async function getPokemonList(amount, setPokemonList) {
  const arr = [];
  const list = [];
  while (arr.length < amount) {
    const x = Math.floor(Math.random() * 1025) + 1; // 1300 is roughly the current size of the pokeapi
    if (arr.indexOf(x) === -1) {
      arr.push(x);
    }
  }

  for (const id of arr) {
    const response = await fetchPokemon(id);
    list.push({
      name: response.name,
      imageUrl: response.sprites.front_default,
    });
  }

  setPokemonList(list);
}

async function fetchPokemon(id) {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);

  return response.json();
}

export default getPokemonList;
