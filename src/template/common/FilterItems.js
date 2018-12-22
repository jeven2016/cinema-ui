import React, {Component} from 'react';
import {
  faHome,
  faList,
  faSearch,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default class FilterItems extends Component {

  render() {
    return (
        <div>
          <div style={{overflow: 'hidden'}}>
            <div className="scroll-bar" style={{overflow: 'hidden'}}>
              <a className="title">全部</a>
              <a>喜剧</a>
              <a>爱情</a>
              <a>动作</a>
              <a>科幻</a>
              <a>科幻</a>
              <a>科幻</a>
              <a>科幻</a>
              <a>科幻</a>
              <a>科幻</a>
            </div>
          </div>
          <div style={{overflow: 'hidden'}}>
            <div className="scroll-bar" style={{overflow: 'hidden'}}>
              <a className="title">全部</a>
              <a>美国</a>
              <a>日本</a>
              <a>中国</a>
              <a>法国</a>
              <a>韩国</a>
              <a>西班牙</a>
              <a>德国</a>
            </div>
          </div>

          <div style={{overflow: 'hidden'}}>
            <div className="scroll-bar" style={{overflow: 'hidden'}}>
              <a className="title">全部</a>
              <a>2018</a>
              <a>2017</a>
              <a>2016</a>
              <a>2015</a>
              <a>2014</a>
              <a>2013</a>
              <a>2012</a>
            </div>
          </div>
        </div>
    );
  }
}