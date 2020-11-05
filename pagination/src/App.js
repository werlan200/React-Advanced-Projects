import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";

function App() {
  const { loading, data } = useFetch();
  const [follower, setFollower] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (loading) return;
    setFollower(data[page]);
  }, [loading, page]);

  console.log(data[0]);

  const previousPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        return data.length - 1;
      }
      return prevPage;
    });
  };
  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage >= data.length) {
        return 0;
      }
      return nextPage;
    });
  };
  const handlePage = (index) => {
    setPage(index);
  };
  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "Loading" : "Pagination"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {follower.map((item) => {
            return <Follower key={item.id} {...item}></Follower>;
          })}
        </div>
        {!loading && (
          <div className="btn-container">
            <button className="prev-btn" onClick={previousPage}>
              Prev
            </button>
            {data.map((item, index) => {
              return (
                <button
                  className="page-btn"
                  key={index + 1}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button className="next-btn" onClick={nextPage}>
              Next
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
