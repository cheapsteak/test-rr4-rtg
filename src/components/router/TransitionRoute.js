import React from "react";
import { Route } from "react-router-dom";
import TransitionGroup from "react-transition-group-plus";

const isEmptyChildren = (children) =>
  React.Children.count(children) === 0

class TransitionRoute extends Route {
  componentWillAppear(cb) {
    if (this.refs.child && this.refs.child.componentWillAppear) {
      this.refs.child.componentWillAppear(cb);
    } else {
      cb();
    }
  }

  componentWillEnter(cb) {
    if (this.refs.child && this.refs.child.componentWillEnter) {
      this.refs.child.componentWillEnter(cb);
    } else {
      cb();
    }
  }

  componentWillLeave(cb) {
    if (this.refs.child && this.refs.child.componentWillLeave) {
      this.refs.child.componentWillLeave(cb);
    } else {
      cb();
    }
  }

  render() {
    const { match } = this.state;
    const { children, component, render } = this.props;
    const { history, route, staticContext } = this.context.router;
    const location = this.props.location || route.location;
    const props = {
      match,
      location,
      history,
      staticContext,
      ref: "child",
      ...(('keyOn' in this.props) ? {key: this.props.keyOn({match, location, route})} : {})
    };

    return (
      <TransitionGroup component={this.props.wrapperComponent || 'div'}>
        {component ? match ? ( // component prop gets first priority, only called if there's a match
          React.createElement(component, props)
        ) : null : render ? match ? ( // render prop is next, only called if there's a match
          render(props)
        ) : null : children ? typeof children === "function" ? ( // children come last, always called
          children(props)
        ) : !isEmptyChildren(children) ? (
          React.Children.only(children)
        ) : null : null}
      </TransitionGroup>
    );
  }
}

export default TransitionRoute;
