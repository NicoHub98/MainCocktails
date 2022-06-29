import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ image, name, id, info, glass }) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} alt={name} className="img-fluid" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{glass}</h6>
          <p className="card-text">{info}</p>
          <Link to={`/cocktail/${id}`} className="btn btn-success">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cocktail;
