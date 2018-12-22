import React, {Component} from 'react';
import './style/wui-bundle-min.css';
import './style/my.css';
import './style/_style.scss';
// 免费版支持三种样式：solid、regular和brands，后面在使用图标时根据样式的不同也会有不同的前缀
import {library} from '@fortawesome/fontawesome-svg-core'

import Header from "./template/common/Header";
import Channels from "./template/common/Channels";
import Footer from "./template/common/Footer";
import RouteConfig from "./template/common/RouteConfig";

library.add();

class App extends Component {
  render() {
    return (
        <div>
          <Header/>
          <Channels/>
          <RouteConfig/>
          <Footer/>
        </div>
    );
  }
}

export default App;
