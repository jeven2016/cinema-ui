import React, {Component} from 'react';
import {faFilm, faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link, withRouter} from "react-router-dom";
import Hammer from "rc-hammerjs";
import is from "is_js";

class VideoHome extends Component {
  constructor(args) {
    super(args);
    this.showMore = this.showMore.bind(this);
  }

  showMore() {
    const {history, link = ""} = this.props;

    //navigate to a specific sub page
    if(is.not.empty(link)){
      history.push(link);
    }
  }

  render() {
    let {data, type} = this.props;

    return (
        <div>
          <div className="row">
            <div
                className="col-xs-6 text color-title middle-size">
              <FontAwesomeIcon icon={faFilm}/>&nbsp;
              {type}
            </div>
            <div
                className="col-xs-6 text align-right text color-blue middle-size">
              <FontAwesomeIcon icon={faPlus}/>
              <Hammer onTap={this.showMore}><span>更多</span></Hammer>
            </div>
          </div>

          <div className="row">
            {
              data.map(video => {
                return (
                    <div className="col-xs-6 col-sm-3" key={video.id}>
                      <Link to={{
                        pathname: `/video/detail/${video.id}`,
                        query: video
                      }}>
                        <div className="card" style={{width: '100%'}}>
                          <div className="ui-card-mask">
                            连载30集/共50集
                          </div>
                          <div className="card-img">
                            <img className="img" src={video.imageUrl}
                                 width="100%"/>
                            <div className="overlay-title">
                              <h4 className="ui-video-name">{video.name}</h4>
                            </div>
                          </div>
                          <div className="card-row">
                            <h6 className="ui-video-actors">{video.actors}</h6>
                          </div>
                        </div>
                      </Link>
                    </div>
                );
              })
            }
          </div>
        </div>
    );
  }
}

//bind this component with router that you can navigate to other place by leveraging
//reactor router
export default withRouter(VideoHome);