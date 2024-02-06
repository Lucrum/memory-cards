import PropTypes from "prop-types";

function Card({ imgSource, description }) {
  return (
    <div className="card">
      <img src={imgSource} alt="" />
      <p>{description}</p>
    </div>
  );
}

Card.propTypes = {
  description: PropTypes.string.isRequired,
  imgSource: PropTypes.string.isRequired,
};

export default Card;
