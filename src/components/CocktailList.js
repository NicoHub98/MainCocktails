import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { loading, cocktails } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">no cocktails matched your criteria</h2>
    );
  }

  return (
    <div className="">
      <h2 className="h2 text-center">Cocktails</h2>
      <div className="row row-cols-auto justify-content-evenly">
        {cocktails.map((item) => {
          return (
            <div key={item.id} className="col-auto g-3">
              <Cocktail {...item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CocktailList;
