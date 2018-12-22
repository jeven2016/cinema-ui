import React from "react";
import * as shallowequal from "shallowequal";

export default class BaseComponent extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    let shouldUpdate = !shallowequal(this.props, nextProps) || !shallowequal(
        this.state, nextState);
    return shouldUpdate;
  }
}
