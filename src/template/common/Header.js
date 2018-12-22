import React, {Component} from 'react';
import {
  faHome,
  faList,
  faSearch,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Link from "react-router-dom/es/Link";

export default class Header extends Component {

  render() {
    return (
        <ul className="primary navbar fixed top ui-header">
          <li className="title"><a className="link">
            <FontAwesomeIcon icon={faList}/>
          </a></li>
          <li className="title"><Link to="/" className="link">
            剧来了
          </Link></li>
          <li className="title pull-right"><a className="link"><FontAwesomeIcon
              icon={faSearch}/> </a></li>
          <li className="title pull-right"><a className="link"><FontAwesomeIcon
              icon={faUser}/> </a></li>
        </ul>
    );
  }
}