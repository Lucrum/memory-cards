import { useEffect, useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import getRandomPokemonList from "./utils/pokemon";
import Header from "./components/Header";
import shuffle from "./utils/shuffle";

function App() {
  const [numCards, setNumCards] = useState(12);
  const [pokemonList, setPokemonList] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    getRandomPokemonList(numCards, setPokemonList);
  }, [numCards]);

  const handleClick = () => {
    setPokemonList([...shuffle(pokemonList)]);
  };

  return (
    <div className="game-wrapper">
      <Header score={score} total={numCards}></Header>
      <GameBoard
        characters={pokemonList}
        onClickFunction={handleClick}
      ></GameBoard>
    </div>
  );
}

export default App;
