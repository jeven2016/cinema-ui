import React, {Component} from 'react';
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class Footer extends Component {

  render() {
    return (
        <span className="top-anchor">
        <button className="button outline purple circle large" onClick={() => window.scrollTo(0, 0)}>
          <FontAwesomeIcon icon={faArrowUp}/>
        </button>
        </span>
    );
  }
}