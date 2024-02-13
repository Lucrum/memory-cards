// fetch 12 pokemon, then render 12 cards
// perhaps more for higher difficulties?
async function getRandomPokemonList(amount, setPokemonList) {
  const arr = [];
  const list = [];
  while (arr.length < amount) {
    const x = Math.floor(Math.random() * 1025) + 1; // 1025 is is how many (distinct) pokemon are in the pokeapi
    if (arr.indexOf(x) === -1) {
      arr.push(x);
    }
  }

  for (const id of arr) {
    try {
      const response = await fetchPokemon(id);
      list.push({
        name: response.name,
        imageUrl: response.sprites.front_default,
      });
    } catch (e) {
      console.error(e);
    }
  }

  setPokemonList(list);
}

async function fetchPokemon(id) {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);

  return response.json();
}

export default getRandomPokemonList;
