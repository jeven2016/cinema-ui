import React, {Component} from 'react';

export default class Paging extends Component {

  render() {
    const {currentPage=0, totalPages, totalCount} = this.props;

    return (
        <div className="paging">
          <div className="page-info">
            共<span className="text color-blue">{totalCount}</span>条数据,
            当前<span className="text color-red">{currentPage+1}/{totalPages}</span>页
          </div>
          <div className="page-btn">
            <button className="small button outline">首页</button>
            <button className="small button green outline">上一页</button>
            <button className="small button green outline">下一页</button>
            <button className="small button outline">尾页</button>
          </div>
          <div className="page-goto">
            <input placeholder="跳到" className="small input page-number"
                   maxLength="6"/>
            <button className="small button">GO</button>
          </div>
        </div>
    );
  }
}