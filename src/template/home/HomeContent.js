import React from 'react';
import VideoHome from "../video/VideoHome";
import TeleplayHome from "../teleplay/TeleplayHome";
import ShowHome from "../show/ShowHome";
import CartoonHome from "../cartoon/CartoonHome";
import TopAnchor from "../common/TopAnchor";
import BaseComponent from "../common/BaseComponent";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as HomeActions from "./HomeAction";
import Log from "../common/Log";

class HomeContent extends BaseComponent {
  static  MODULE_NAME = "HomeContent";

  shouldComponentUpdate(nextProps, nextState) {
    const result = super.shouldComponentUpdate(nextProps, nextState);
    return result;
  }

  componentDidMount() {
    const {queryVideoList} = this.props;
    queryVideoList();
    Log.debug("");
  }

  render() {
    console.log("the new list is: ", this.props.videoList);
    return (
        <div>
          <VideoHome type="电影" showInfo={false} data={this.props.videoList.movie} link="/movie"/>
          <VideoHome type="电视" data={this.props.videoList.teleplay}/>
          <VideoHome type="综艺" data={this.props.videoList.varietyShow}/>
          <VideoHome type="卡通" data={this.props.videoList.cartoon}/>
          <TopAnchor/>
        </div>
    );
  }
}

//将state绑定到props
const mapStateToProps = (state = {
  homeVideoList: {
    movie: [], teleplay: [], cartoon: [], varietyShow: []
  }
}) => {
  return {videoList: state.homeVideoList}
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(HomeActions, dispatch)
};

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(HomeContent)