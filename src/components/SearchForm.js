import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  // React.useEffect(() => {
  //   searchValue.current.focus();
  // }, []);

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="my-5">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-floating">
          <input
            className="form-control"
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
            placeholder="search"
          />
          <label htmlFor="name">Search a cocktail</label>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
