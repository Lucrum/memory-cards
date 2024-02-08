import PropTypes from "prop-types";

function Header({ score, total }) {
  return (
    <div className="header">
      <h1>Memory Game</h1>
      <h2>
        {score}/{total}
      </h2>
    </div>
  );
}

Header.propTypes = {
  score: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Header;
