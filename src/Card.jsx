import PropTypes from "prop-types";
import fetchData from "./data";

const data = await fetchData();

function Card({ item }) {
  return (
    <article>
      <img src={data.results[item].image} alt={data.results[item].name} />
      <div>
        <h1>{data.results[item].name}</h1>
        <h1>{data.results[item].gender}</h1>
        <h1>{data.results[item].species}</h1>
      </div>
    </article>
  );
}


Card.propTypes = {
  item: PropTypes.number.isRequired,
};

export default Card;
