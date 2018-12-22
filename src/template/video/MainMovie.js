import React, {Component} from 'react';
import Pic from "../images/pic.jpg";
import {faFilm, faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import FilterItems from "../common/FilterItems";
import Paging from "../common/Paging";

export default class MovieHome extends Component {

  render() {
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
            <div className="col-xs-6 col-sm-3">
              <div className="card" style={{width: '100%'}}>
                <div className="card-img">
                  <img className="img" src={Pic} width="100%"/>
                  <div className="overlay-title">
                    <h4>追捕</h4>
                  </div>
                </div>
                <div className="card-row">
                  <h6>杰西卡·罗德,伊瑟尔·布...</h6>
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-sm-3">
              <div className="card" style={{width: '100%'}}>
                <div className="card-img">
                  <img className="img" src={Pic} width="100%"/>
                  <div className="overlay-title">
                    <h4>追捕</h4>
                  </div>
                </div>
                <div className="card-row">
                  <h6>杰西卡·罗德,伊瑟尔·布...</h6>
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-sm-3">
              <div className="card" style={{width: '100%'}}>
                <div className="card-img">
                  <img className="img" src={Pic} width="100%"/>
                  <div className="overlay-title">
                    <h4>追捕</h4>
                  </div>
                </div>
                <div className="card-row">
                  <h6>杰西卡·罗德,伊瑟尔·布...</h6>
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-sm-3">
              <div className="card" style={{width: '100%'}}>
                <div className="card-img">
                  <img className="img" src={Pic} width="100%"/>
                  <div className="overlay-title">
                    <h4>追捕</h4>
                  </div>
                </div>
                <div className="card-row">
                  <h6>杰西卡·罗德,伊瑟尔·布...</h6>
                </div>
              </div>
            </div>
          </div>

          <Paging/>

        </div>
    );
  }
}