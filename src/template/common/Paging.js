import React, {Component} from 'react';
import {
  faHome,
  faList,
  faSearch,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default class Paging extends Component {

  render() {
    return (
        <div className="paging">
          <div className="page-info">
            共<span className="text color-blue">3142</span>条数据,
            当前<span className="text color-red">1/315</span>页

          </div>
          <div className="page-btn">
            <button className="button outline">首页</button>
            <button className="button green outline">上一页</button>
            <button className="button green outline">下一页</button>
            <button className="button outline">尾页</button>
          </div>
          <div className="page-goto">
            <input placeholder="跳到" className="input page-number" maxLength="6"/>
            <button className="button">GO</button>
          </div>
        </div>
    );
  }
}