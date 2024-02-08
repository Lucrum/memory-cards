import PropTypes from "prop-types";
import capitalize from "../utils/capitalize";

function Card({ imageUrl, name, onClick }) {
  return (
    <div className="card" onClick={onClick} id={name}>
      <img src={imageUrl} alt="" />
      <span>{capitalize(name)}</span>
    </div>
  );
}

Card.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Card;
