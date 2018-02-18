import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
  TransitionRoute as Route
} from "./components/router";

import TransitionGroup from "react-transition-group-plus";

import About from "./components/About";
import Home from "./components/Home";
import Topics from "./components/Topics";

const Main = () => (
  <main style={{ position: "relative" }}>
    <Route
      render={({ location }) => (
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </div>
      )}
    />
  </main>
);

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />
      <Main />
    </div>
  </Router>
);

render(<BasicExample />, document.getElementById("root"));
