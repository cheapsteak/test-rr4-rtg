import React from "react";
import { TweenLite } from "gsap";
import { Link } from "react-router-dom";

import { TransitionRoute as Route } from "./router";

class Topic extends React.Component {
  componentWillAppear(cb) {
    TweenLite.fromTo(this.el, 1, { x: -10 }, { x: 0, onComplete: cb });
  }

  componentWillEnter(cb) {
    TweenLite.fromTo(this.el, 1, { x: -10 }, { x: 0, onComplete: cb });
  }

  componentWillLeave(cb) {
    TweenLite.to(this.el, 1, { x: -10, onComplete: cb });
  }
  render() {
    const { match } = this.props;
    return (
      <div ref={c => (this.el = c)}>
        <h3>{match.params.topicId}</h3>
      </div>
    );
  }
}

class Topics extends React.Component {
  componentWillAppear(cb) {
    TweenLite.fromTo(this.el, 1, { x: -10 }, { x: 0, onComplete: cb });
  }

  componentWillEnter(cb) {
    TweenLite.fromTo(this.el, 1, { x: -10 }, { x: 0, onComplete: cb });
  }

  componentWillLeave(cb) {
    TweenLite.to(this.el, 1, { x: -10, onComplete: cb });
  }

  render() {
    const { match } = this.props;
    return (
      <div ref={el => (this.el = el)}>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${match.url}/rendering`}>Rendering with React</Link>
          </li>
          <li>
            <Link to={`${match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>

        <Route
          path={`${match.url}/:topicId`}
          component={Topic}
          keyOn={({ match }) => match && match.params.topicId}
        />
        <Route
          exact
          path={match.url}
          render={() => <h3>Please select a topic.</h3>}
        />
      </div>
    );
  }
}

export default Topics;
