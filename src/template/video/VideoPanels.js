import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";

export default class VideoPanels extends Component {
  constructor(args) {
    super(args);
  }

  render() {
    const {videos = [], infoArea} = this.props;
    return (
        <Fragment>
          {
            videos.map(video => {
              return (
                  <div className="col-xs-6 col-sm-3" key={video.id}>
                    <Link to={{
                      pathname: `/video/detail/${video.id}`,
                      query: video
                    }}>
                      <div className="card" style={{width: '100%'}}>
                        {infoArea}
                        <div className="card-img">
                          <img className="img ui-home-img" src={video.imageUrl}
                               width="100%"/>
                          <div className="overlay-title">
                            <h5 className="ui-video-name">{video.name}</h5>
                          </div>
                        </div>
                        <div className="card-row">
                          <h6 className="ui-video-actors nowrap">{video.actors}</h6>
                        </div>
                      </div>
                    </Link>
                  </div>
              );
            })
          }
        </Fragment>
    )
  }
}