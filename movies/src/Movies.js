import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = () => {
  const { movies, loading } = useGlobalContext();

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <section className="movie-area">
      {movies.map((item, index) => {
        const { Poster, Title, Year, imdbID } = item;
        return (
          <Link to={`/movies/${imdbID}`} key={index} className="movie">
            <article>
              <img src={Poster || url} alt="poster" />
              <div className="movie-info">
                <h4>{Title}</h4>
                <p>{Year}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
