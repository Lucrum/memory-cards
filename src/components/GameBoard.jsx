import Card from "./Card";
import PropTypes from "prop-types";

function GameBoard({ characters, onClickFunction }) {
  return (
    <div className="board">
      {characters.map(({ name, imageUrl }) => {
        return (
          <Card
            key={name}
            imageUrl={imageUrl}
            name={name}
            onClick={onClickFunction}
          ></Card>
        );
      })}
    </div>
  );
}

GameBoard.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      imageUrl: PropTypes.string,
    })
  ),
  onClickFunction: PropTypes.func.isRequired,
};

export default GameBoard;
