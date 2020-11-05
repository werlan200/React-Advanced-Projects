import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";

function App() {
  const [theme, setTheme] = useState("light-theme");

  const toggleTheme = () => {
    setTheme((oldTheme) => {
      if (oldTheme === "light-theme") {
        return "dark-theme";
      } else {
        return "light-theme";
      }
    });
  };
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <main>
      <nav className="nav-center">
        <h1>Overreacted</h1>
        <button className="btn" onClick={toggleTheme}>
          Toggle
        </button>
      </nav>
      <article className="articles">
        {data.map((item) => {
          return <Article key={item.id} {...item} />;
        })}
      </article>
    </main>
  );
}

export default App;
