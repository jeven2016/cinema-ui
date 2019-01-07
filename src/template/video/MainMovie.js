import React, {Component} from 'react';
import {faFilm} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import FilterItems from "../common/FilterItems";
import Paging from "../common/Paging";
import {queryVideoPage} from "./VideoAction";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import VideoPanels from "./VideoPanels";

class MovieHome extends Component {
  constructor(args) {
    super(args);
    this.state = {
      currentPage: 0
    };
  }

  componentDidMount() {
    const {queryVideoPage} = this.props;
    queryVideoPage(this.state.currentPage);
  }

  render() {
    const {videoPage} = this.props;
    return (
        <div>
          <FilterItems/>

          <div className="row">
            <div
                className="col-xs-6 text color-title middle-size">
              <FontAwesomeIcon icon={faFilm}/>&nbsp;&nbsp;
              电影
            </div>
            <div
                className="col-xs-6 text align-right text color-blue middle-size">

            </div>
          </div>

          <div className="row">
            <VideoPanels videos={videoPage.videoList}/>
          </div>
          <Paging currentPage={videoPage.currentPage}
                  totalPages={videoPage.totalPages}
                  totalCount={videoPage.totalCount}/>
        </div>
    );
  }
}

export default connect((state) => {
      return {videoPage: state.videoPage}
    },
    (dispatch) => {
      return bindActionCreators({queryVideoPage}, dispatch)
    })(MovieHome)