import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { API_ENDPOINT } from "./context";

const SingleMovie = () => {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const fetchMovie = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovie(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovie(`${API_ENDPOINT}&i=${imdbID}`);
  }, [imdbID]);
  if (loading) {
    return <h2>Loading...</h2>;
  }
  const { Actors, Plot, Poster, Released, Title } = movie;
  return (
    <section className="single-movie">
      <img src={Poster} alt="poster" className="single-poster" />
      <div className="single-info">
        <h2>{Title}</h2>
        <h4>Actors : {Actors}</h4>
        <p>{Plot}</p>
        <p>
          <strong>{Released}</strong>
        </p>
        <Link to="/" className="btn">
          Back To Movies
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
