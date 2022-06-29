import React, { useState } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getCocktail();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  }

  const { name, image, category, info, glass, instructions, ingredients } =
    cocktail;

  return (
    <div className="container">
      <div className="text-center">
        <Link className="btn btn-success my-5 " to="/">
          Back Home
        </Link>
      </div>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={image}
              style={{ width: "540px" }}
              className="img-fluid rounded"
              alt={name}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-text">
                <strong>Name:</strong> {name}
              </p>
              <p className="card-text">
                <strong>Category:</strong> {category}
              </p>
              <p className="card-text">
                <strong>Info:</strong> {info}
              </p>
              <p className="card-text">
                <strong>Glass:</strong> {glass}
              </p>
              <p className="card-text">
                <strong>Instructions:</strong> {instructions}
              </p>
              <p className="card-text">
                <strong>Ingredients:</strong>{" "}
                {ingredients.map((item, index) => {
                  return item ? <span key={index}>{item},</span> : null;
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCocktail;
