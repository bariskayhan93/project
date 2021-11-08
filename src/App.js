import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import Troubleshooting from "./pages/Troubleshooting";
import SingleItem from "./pages/SingleItem";
import Settings from "./pages/Settings";
import Data from "./pages/Data";
import Calibration from "./pages/Calibration";
import Error from "./pages/Error";
// import components
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/troubleshooting">
          <Troubleshooting />
          </Route>
        <Route path="/settings">
          <Settings />
          </Route>
        <Route path="/data">
          <Data />
          </Route>
        <Route path="/calibration">
          <Calibration />
        </Route>
        <Route path="/cocktail/:id">
          <SingleItem />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
