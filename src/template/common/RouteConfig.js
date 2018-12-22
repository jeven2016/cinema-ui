import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import NoMatchComponent from "./NoMatchComponent";
import HomeContent from "../home/HomeContent";
import MainMovie from "../video/MainMovie";
import MovieDetail from "../video/VideoDetail";

export default class RouteConfig extends Component {
  render() {
    return (
        <Switch>
          <Route exact path="/" component={HomeContent}/>
          <Route exact path="/movie" component={MainMovie}/>
          <Route exact path="/video/detail/:id" component={MovieDetail}/>
          <Route component={NoMatchComponent}/>
        </Switch>
    );
  }
}