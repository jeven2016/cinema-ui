import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import NoMatchComponent from "./NoMatchComponent";
import HomeContent from "../home/HomeContent";
import MainMovie from "../video/MainMovie";
import VideoDetail from "../video/VideoDetail";
import VideoVender from "../video/VideoVendor";
import VideoPlayer from "../video/VideoPlayer";

export default class RouteConfig extends Component {
  render() {
    return (
        <Switch>
          <Route exact path="/" component={HomeContent}/>
          <Route path="/movie" component={MainMovie}/>
          <Route path="/movie/page/:pageNumber" component={MainMovie}/>
          <Route path="/video/detail/:id" component={VideoDetail}/>
          <Route component={NoMatchComponent}/>
        </Switch>
    );
  }
}

export const videoDetailRoute = (props) => {
  return <Fragment>
    <Route exact path={props.match.url}
           component={() => <VideoVender movieDetail={props.movieDetail}/>} matchUrl={props.match.url}/>
    <Route path={`${props.match.url}/play`} component={VideoPlayer}/>
  </Fragment>
};