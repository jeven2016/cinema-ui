import React, {Fragment} from 'react';
import * as classnames from "classnames";
import FavoriteList from "./FavoriteList";
import {bindActionCreators} from "redux";
import {queryMovieDetail} from "./VideoAction";
import connect from "react-redux/es/connect/connect";
import BaseComponent from "../common/BaseComponent";
import is from "is_js";
import {scrollTo} from "../common/CommonUtil";

class VideoDetail extends BaseComponent {
  static panelTypes = {
    players: "players",
    desc: "desc",
    comment: "comment"
  };

  constructor(props) {
    super(props);
    this.state = {
      selected: VideoDetail.panelTypes.players
    };

    this.changePannel = this.changePannel.bind(this);
  }

  //if navigate to other movie details page, this component will update
  //instead of mounting again
  componentDidUpdate(prevProps, prevState, snapshot) {
    const {match} = this.props;
    const preMatch = prevProps.match;
    if (!match || !preMatch) {
      return;
    }
    if (match.params.id !== preMatch.params.id) {
      scrollTo(0, 0);
      this.queryData();
    }
  }

  /**
   * Query data while the component is mounted
   */
  componentDidMount() {
    this.queryData();
  }

  queryData() {
    // const { match, location, history } = this.props;
    const {match, queryMovieDetail} = this.props;
    if (!match) {
      return;
    }
    let id = match.params.id;
    if (id) {
      //search the video by its id
      queryMovieDetail(id);
    }
  }

  render() {
    //this.props.history.push(path); goto
    //this.props.history.push({ pathname : '/user' ,query : { day: 'Friday'} })
    //https://blog.csdn.net/cen_cs/article/details/77977385
    //https://blog.csdn.net/sjohnny/article/details/82998763

    //2.<Route path="/topics/:id" component={Topics} />
    //<Link to={`/topics/${topic.id}`} >点击跳转</Link>
    //this.props.match.params.id

    const {name, videoType} = this.props.movieDetail;
    console.log("movieDetail", this.props.movieDetail);
    let favoriteList = <div></div>;
    if (is.existy(videoType) && is.not.empty(videoType)) {
      favoriteList = <FavoriteList movieName={name} videoType={videoType}/>;
    }
    return (
        <div>
          {/*  { <div>
            <button onClick={() => {
              props.history.goBack()
            }}>back
            </button>
          </div>}
*/}
          <div className="card block clear-border"
               style={{width: "97%", margin: "0.5rem auto"}}>
            {this.getVideoPannel()}
            {this.getNav()}
            {this.showPannel()}
            {favoriteList}
          </div>
        </div>
    );
  }

  getVideoPannel() {
    const {imageUrl, score, name, language, year, videoType, actors} = this.props.movieDetail;
    return <div className="card-row">
      <div className="row">
        <div className="col-xs-3">
          <div>
            <img className="img"
                 src={imageUrl}
                 width="100%"/>
            <div className="text color-yellow align-center">
              {score}
            </div>
          </div>
        </div>
        <div className="col-xs-9">
          <div className="col-xs-12">
            <h4 className="text color-blue">{name}</h4>
          </div>
          <div className="row">
            <div className="col-xs-12 text align-left">
              <div className="text small">主演:&nbsp;{actors}</div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 text align-left">
              <div className="text small">语言:&nbsp;{language}</div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 text align-left">
              <div className="text small">时间:&nbsp;{year}</div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 text align-left">
              <div className="text small">类型:&nbsp;{videoType}</div>
            </div>
          </div>
        </div>
      </div>
    </div>;
  }

  getNav() {
    let playerClass = classnames("button small",
        {"active": this.state.selected === VideoDetail.panelTypes.players});
    let descClass = classnames("button small",
        {"active": this.state.selected === VideoDetail.panelTypes.desc});
    let commentClass = classnames("button small",
        {"active": this.state.selected === VideoDetail.panelTypes.comment});

    return <div className="button-group block">
      <a href="#" className={playerClass} onClick={() => this.changePannel(
          VideoDetail.panelTypes.players)}>播放</a>
      <a href="#" className={descClass}
         onClick={() => this.changePannel(VideoDetail.panelTypes.desc)}>简介</a>
      <a href="#" className={commentClass} onClick={() => this.changePannel(
          VideoDetail.panelTypes.comment)}>评论</a>
    </div>;
  }

  getPlayersPanel() {
    const {vendors = []} = this.props.movieDetail;

    return (
        <Fragment>
          <div className="row ui-players">
            {
              vendors.map((vendor, index) => {
                return (
                    <div key={vendor.name + index} className="col-xs-3">
                      <a className="button small">{vendor.displayName}</a>
                    </div>
                )
              })
            }
            <div className="col-xs-12 text comment">
              <h5>若播放失败，请尝试不同的播放源</h5>
            </div>
          </div>
        </Fragment>);
  }

  showPannel() {
    if (this.state.selected === VideoDetail.panelTypes.players) {
      return this.getPlayersPanel();
    }
    if (this.state.selected === VideoDetail.panelTypes.desc) {
      return this.getDescPanel();
    }
    if (this.state.selected === VideoDetail.panelTypes.comment) {
      return this.getCommentPanel();
    }
  }

  getDescPanel() {
    const {actors, area, year, videoType, director, introduction} = this.props.movieDetail;
    let actorList = this.extractByComma(actors);
    let directorList = this.extractByComma(director);
    return (<Fragment>
      <div className="ui-desc row text small">
        <div className="row">
          <div className="col-xs-12">
            <span className="text bold color-blue">主演:</span>
            {actorList}
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <span className="text bold color-blue">地区:&nbsp;</span>{area}
          </div>
          <div className="col-xs-6">
            <span className="text bold color-blue">时间:&nbsp;</span>{year}
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <span className="text bold color-blue">类型:&nbsp;</span>{videoType}
          </div>
          <div className="col-xs-6">
            <span
                className="text bold color-blue">导演:&nbsp;</span>{directorList}
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12" style={{overflowX: "hidden"}}>
            <span className="text bold color-blue">简介:&nbsp;</span>
            {introduction}
          </div>
        </div>
      </div>
    </Fragment>);
  }

  extractByComma(array) {
    let list = [];
    if (array) {
      array.split(",").forEach(value => {
        list.push(<a key={value} href="#">{value}</a>);
      })
    }
    return list;
  }

  getCommentPanel() {
    return (<Fragment><a>暂未开放</a></Fragment>);
  }

  changePannel(type) {
    this.setState({
      selected: type
    });
  }
}

//将state绑定到props
/**
 * mapStateToProps() 接收的参数是整个 Redux store。mapStateToProps()
 * 的主要想法是把这个组件所需的整个状态的哪些部分隔离为它的 props。
 * @param state
 * @returns {{movieDetail: *}}
 */
const mapStateToProps = (state) => {
  //the 'movieDetail' of 'state.movieDetail' should corresponds to
  //the key defined in Reducers.js
  return {movieDetail: state.movieDetail}
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({queryMovieDetail}, dispatch)
};

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(VideoDetail);