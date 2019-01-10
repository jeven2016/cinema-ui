import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import is from "is_js";
import {ErrorMsg} from "../i18n/ErrorMsg";
import {isValidInteger} from "../common/CommonUtil";

class Paging extends Component {
  constructor(args) {
    super(args);
    this.goFirst = this.goFirst.bind(this);
    this.goLast = this.goLast.bind(this);
    this.goNext = this.goNext.bind(this);
    this.goPrevious = this.goPrevious.bind(this);
    this.go = this.go.bind(this);
    this.setPage = this.setPage.bind(this);

    this.state = {
      page: ""
    }
  }

  goFirst() {
    const {goTo} = this.props;
    goTo(0);
  }

  goLast() {
    const {totalPages, goTo} = this.props;
    let lastIndex = totalPages - 1;
    lastIndex = lastIndex < 0 ? totalPages : lastIndex;
    goTo(lastIndex);
  }

  goNext() {
    const {currentPage, totalPages, goTo} = this.props;
    if (currentPage >= totalPages - 1) {
      return currentPage;
    }

    let nextIndex = currentPage + 1;
    nextIndex = nextIndex < 0 ? currentPage : nextIndex;
    goTo(nextIndex);
  }

  goPrevious() {
    const {currentPage, goTo} = this.props;
    let preIndex = currentPage - 1 < 0 ? currentPage : currentPage - 1;
    goTo(preIndex);
  }

  go() {
    const {goTo} = this.props;
    let page = this.state.page;
    if (is.not.existy(page) || !isValidInteger(page)) {
      alert(ErrorMsg.paging.notNumber);
      return
    }

    goTo(page);
  }

  render() {
    const {currentPage = 0, totalPages, totalCount} = this.props;

    return (
        <div className="paging">
          <div className="page-info">
            共<span className="text color-blue">{totalCount}</span>条数据,
            当前<span className="text color-red">{currentPage
          + 1}/{totalPages}</span>页
          </div>
          <div className="page-btn">
            <button className="button outline" onClick={this.goFirst}>首页
            </button>
            <button className="button green outline"
                    onClick={this.goPrevious}>上一页
            </button>
            <button className="button green outline"
                    onClick={this.goNext}>下一页
            </button>
            <button className="button outline" onClick={this.goLast}>尾页</button>
          </div>
          <div className="page-goto">
            <input placeholder="跳到" className="input page-number input-error"
                   value={this.state.page}
                   onChange={this.setPage}
                   maxLength="6"/>
            <button className="button" onClick={this.go}>GO</button>
          </div>
        </div>
    );
  }

  setPage(evt) {
    this.setState({
      page: evt.target.value
    })
  }
}

export default withRouter(Paging);