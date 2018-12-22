import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import is from "is_js";
import BaseComponent from "../common/BaseComponent";
import {queryFavoriteMovies} from "./VideoAction";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

class FavoriteList extends BaseComponent {
  componentDidMount() {
    const {videoType, queryFavoriteMovies} = this.props;
    if (is.existy(videoType) && is.not.empty(videoType)) {
      queryFavoriteMovies(videoType);
    }
  }

  render() {
    const {movieName, favoriteMovies}= this.props;

    return (
        <div>
          <div className="row ui-video-list">
            <div className="col-xs-12">
              <FontAwesomeIcon icon={faHeart} color="red"/>&nbsp;
              喜欢<span className="text color-title">“{movieName}”</span>的人也喜欢
            </div>
          </div>
          <div className="row">
            {
              favoriteMovies.map(movie => {
                return (
                    <div className="col-xs-6 col-sm-3" key={movie.id}>
                      <NavLink to={{
                        pathname: `/video/detail/${movie.id}`
                      }}>
                        <div className="card" style={{width: '100%'}}>
                          <div className="card-img">
                            <img className="img" src={movie.imageUrl}
                                 width="100%"/>
                            <div className="overlay-title">
                              <h4 className="ui-video-name">{movie.name}</h4>
                            </div>
                          </div>
                          <div className="card-row">
                            <h6 className="ui-video-actors">{movie.actors}</h6>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                );
              })
            }
          </div>
        </div>
    );
  }
}

//将store's state绑定到props
const mapStateToProps = (state={favoriteMovies:[]}) => {
  return {favoriteMovies: state.favoriteMovies}
};

//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({queryFavoriteMovies}, dispatch)
};

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(FavoriteList)