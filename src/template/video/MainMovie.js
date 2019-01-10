import React from 'react';
import {faFilm} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import FilterItems from "../common/FilterItems";
import Paging from "./Paging";
import {queryVideoPage} from "./VideoAction";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import VideoPanels from "./VideoPanels";
import is from "is_js";
import {withRouter} from "react-router-dom";
import BaseComponent from "../common/BaseComponent";

class MainHome extends BaseComponent {
  constructor(args) {
    super(args);
    this.goTo = this.goTo.bind(this);
  }

  componentDidMount() {
    console.log("mount now ~~~~~~~~~~~");
    this.switchPage();
  }

  switchPage() {
    const {queryVideoPage, location} = this.props;
    let currentPage = is.existy(location.page) ? location.page : 0;
    queryVideoPage(currentPage);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("update now ~~~~~~~~~~~");
    let currentPage = this.props.location.page;
    if (!is.existy(currentPage)) {
      return;
    }
    if (currentPage !== prevProps.location.page) {
      this.switchPage();
    }
  }

  goTo(pageNumber) {
    const {history} = this.props;
    // history.push("/movie");
    history.push({pathname: "/movie", page: pageNumber});
    console.log("goto " + pageNumber);
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
                  totalCount={videoPage.totalCount}
                  goTo={this.goTo}
          />
        </div>
    );
  }
}

export default withRouter(connect((state) => {
      return {videoPage: state.videoPage}
    },
    (dispatch) => {
      return bindActionCreators({queryVideoPage}, dispatch)
    })(MainHome));