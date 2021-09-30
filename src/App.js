import React, { useState, useEffect } from "react";

import ShowCards from "../src/Card/ShowCards";
import ExploreCard from "../src/Card/ExploreCard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Data from "../src/DataFetch/UserData";

//react-bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [personData, setPersonData] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await Data();
      setPersonData(data);
    }
    getData();
  }, []);

  return (
    <div>
      <Router>
        <Route exact path="/">
          <ShowCards personData={personData} />
        </Route>
        <Route path="/:id">
          <ExploreCard Data={personData} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
