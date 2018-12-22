import React, {Component} from 'react';

export default class Footer extends Component {

  render() {
    return (
        <div className="card block clear-border">
          <div className="divider"></div>
          <div className="card-body">
            <h5 className="text align-center">Copyright©2018 jujucome.cn</h5>
            <h6 className="text comment align-center">
              Email: jujucom@126.com
            </h6>
            <h6 className="text comment align-center">
              本站不保存、复制或传播任何视频，所有内容均链接至其他网站,仅做宽带测试。
              若本站收录的节目无意侵犯了贵司版权，请给邮箱jujucome@126.com来信，我们会及时处理！
            </h6>
          </div>
        </div>
    );
  }
}