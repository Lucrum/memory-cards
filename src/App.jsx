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
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  useEffect(() => {
    getRandomPokemonList(numCards, setPokemonList);
    resetGame();
  }, [numCards]);

  const hardModeToggle = (bool) => {
    if (bool) {
      setNumCards(16);
    } else {
      setNumCards(12);
    }
  };

  const scoreSelection = (value) => {
    // returns true if the selection is valid
    if (selectedPokemon.includes(value)) {
      setScore(0);
      return false;
    } else {
      setScore(score + 1);
      return true;
    }
  };

  const resetGame = () => {
    setScore(0);
    setSelectedPokemon([]);
  };

  const handleClick = (e) => {
    const selection = e.currentTarget.id;
    if (scoreSelection(selection)) {
      // valid choice
      setSelectedPokemon((selectedPokemon) => [...selectedPokemon, selection]);
    } else {
      resetGame();
    }

    setPokemonList([...shuffle(pokemonList)]);
  };

  return (
    <div className="game-wrapper">
      <Header
        score={score}
        total={numCards}
        toggleHardMode={hardModeToggle}
      ></Header>
      <GameBoard
        characters={pokemonList}
        onClickFunction={handleClick}
      ></GameBoard>
    </div>
  );
}

export default App;
