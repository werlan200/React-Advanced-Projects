import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ glass, id, image, info, name }) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h2>{name}</h2>
        <h3>{glass}</h3>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">
          DETAILS
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
