import React, {Component} from 'react';
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link, NavLink, withRouter} from "react-router-dom";

class Channels extends Component {
  constructor(args) {
    super(args);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {
    //link with replace=true will cause browser fails to go back
    return (
        <ul className="navbar simple" style={{marginTop: '3rem'}}>
          <li className="title">
            <Link to="/" className="link" replace><FontAwesomeIcon
                icon={faHome}/></Link></li>
          <ul className="list">
            <li className="item">
              <NavLink to="/movie" className="link" activeClassName="active"
                       replace>电影</NavLink>
            </li>
            <li className="item"><a className="link">剧集</a></li>
            <li className="item"><a className="link">综艺</a></li>
            <li className="item"><a className="link">动画</a></li>
            {/*<li className="item pull-right">
              <a className="link" href="#"
                 onClick={this.goBack}>Back2</a>
            </li>*/}
          </ul>
        </ul>
    );
  }
}

export default withRouter(Channels)