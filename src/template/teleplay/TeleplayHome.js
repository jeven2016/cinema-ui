import React, {Component} from 'react';
import {faFilm, faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

export default class TeleplayHome extends Component {

  render() {
    let teleplays = this.props.data;
    return (
        <div>
          <div className="row">
            <div className="col-xs-6 text color-title middle-size">
              <FontAwesomeIcon icon={faFilm}/>&nbsp;
              电视
            </div>
            <div
                className="col-xs-6 text align-right text color-blue middle-size">
              <FontAwesomeIcon icon={faPlus}/>&nbsp;
              更多
            </div>

          </div>

          <div className="row">
            {
              teleplays.map(teleplay => {
                return (
                    <div className="col-xs-6 col-sm-3" key={teleplay.id}>
                      <Link to={`/movie/detail/${teleplay.id}`}>
                        <div className="card" style={{width: '100%'}}>
                          <div className="card-img">
                            <img className="img" src={teleplay.imageUrl}
                                 width="100%"/>
                            <div className="overlay-title">
                              <h5 className="ui-video-name">{teleplay.name}</h5>
                            </div>
                          </div>
                          <div className="card-row">
                            <h6 className="ui-video-actors">{teleplay.actors}</h6>
                          </div>
                        </div>
                      </Link>
                    </div>
                );
              })
            }
            {/*<Hammer onTap={this.showMovieDetail.bind(this)}>*/}

            {/*</Hammer>*/}

          </div>
        </div>
    );
  }
}