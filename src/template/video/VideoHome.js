import React, {Component} from 'react';
import {faFilm, faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {withRouter} from "react-router-dom";
import Hammer from "rc-hammerjs";
import is from "is_js";
import VideoPanels from "./VideoPanels";

class VideoHome extends Component {
  constructor(args) {
    super(args);
    this.showMore = this.showMore.bind(this);
  }

  showMore() {
    const {history, link = ""} = this.props;

    //navigate to a specific sub page
    if (is.not.empty(link)) {
      history.push(link);
    }
  }

  render() {
    let {data, type, showInfo = true} = this.props;

    let infoArea = null;
    if (showInfo) {
      infoArea = <div className="ui-card-mask">
        连载30集/共50集
      </div>;
    }

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
            <VideoPanels videos={data} infoArea={infoArea}/>
          </div>
        </div>
    );
  }
}

//bind this component with router that you can navigate to other place by leveraging
//reactor router
export default withRouter(VideoHome);