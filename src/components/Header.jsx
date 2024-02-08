import PropTypes from "prop-types";

function Header({ score, total, toggleHardMode }) {
  return (
    <div className="header">
      <h1>Memory Game</h1>
      <div className="flex-column">
        <h2>
          {score}/{total}
        </h2>
        <div className="mode-switch">
          <label htmlFor="hard-mode">Hard Mode</label>
          <input
            type="checkbox"
            name="hard-mode"
            id="hard-mode"
            onChange={(e) => toggleHardMode(e.target.checked)}
          />
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  score: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  toggleHardMode: PropTypes.func.isRequired,
};

export default Header;
