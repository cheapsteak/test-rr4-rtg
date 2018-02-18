import React from 'react';
import { TweenLite } from 'gsap';

class Home extends React.Component {
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
    return (
      <div ref={el => (this.el = el)}>
        <h2>Home</h2>
      </div>
    );
  }
}

export default Home;
