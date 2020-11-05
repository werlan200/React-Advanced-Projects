import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Movie from "./SingleMovie";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/movies/:imdbID" children={<Movie></Movie>}></Route>
      </Switch>
    </>
  );
}

export default App;
