import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";
const clientID = `${process.env.REACT_APP_CLIENT_ID}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  const fetchItems = async () => {
    setLoading(true);
    let url;
    const urlQuery = `&query=${query}`;
    const urlPage = `&page=${page}`;
    if (query) {
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
    } else {
      url = `${mainUrl}${clientID}${urlPage}`;
    }
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setData((oldData) => {
        console.log("canberk  " + page);
        if (query && page === 1) {
          return data.results;
        } else if (query) {
          return [...oldData, ...data.results];
        } else {
          return [...oldData, ...data];
        }
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(() => 1);
    fetchItems();
  };

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (
        (!loading && window.innerHeight + window.scrollY) >=
        document.body.scrollHeight - 2
      ) {
        setPage((oldPage) => {
          return oldPage + 1;
        });
      }
    });
    return () => window.removeEventListener("scroll", event);
  }, []);

  useEffect(() => {
    fetchItems();
  }, [page]);

  return (
    <main>
      <div className="search">
        <form className="search-form">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            className="form-input"
          />
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </div>
      <div className="photos">
        <div className="photos-center">
          {data.map((item, index) => {
            return <Photo key={index} {...item} />;
          })}
        </div>
        {loading && <h2 className="loading">Loading...</h2>}
      </div>
    </main>
  );
}

export default App;
