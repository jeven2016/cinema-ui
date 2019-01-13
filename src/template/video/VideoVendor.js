import React, {Fragment} from 'react';
import BaseComponent from "../common/BaseComponent";
import {NavLink} from "react-router-dom";

export default class VideoVendor extends BaseComponent {
  render() {
    const {vendors = []} = this.props.movieDetail;
    const {matchUrl} = this.props;
    console.log("matchurl="+matchUrl)
    return (
        <Fragment>
          <div className="row ui-players">
            {
              vendors.map((vendor, index) => {
                return (
                    <div key={vendor.name + index} className="col-xs-3">
                      <NavLink to={`${matchUrl}/play`} className="button small">{vendor.displayName}</NavLink>
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

}