import { useEffect, useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import getPokemonList from "./utils/pokemon";

function App() {
  const [numCards, setNumCards] = useState(12);
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    getPokemonList(numCards, setPokemonList);
  }, [numCards]);

  const handleClick = (e) => {
    console.log(e);
  };

  return (
    <div className="game-wrapper">
      <GameBoard
        characters={pokemonList}
        onClickFunction={handleClick}
      ></GameBoard>
    </div>
  );
}

export default App;
