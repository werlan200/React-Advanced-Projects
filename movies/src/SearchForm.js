import React from "react";
import { useGlobalContext } from "./context";
const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();

  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <h2>Search for Movies </h2>
      <input
        className="form-input"
        type="text"
        value={query}
        placeholder={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {error && <p className="error">Movie Not Found!</p>}
    </form>
  );
};

export default SearchForm;
