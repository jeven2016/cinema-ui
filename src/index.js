// This must be the first line in src/index.js
import 'react-app-polyfill/ie11';
import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import {ConnectedRouter} from 'connected-react-router';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import store from "./template/common/InitStore";

import './style/_style.scss';
import './style/my.css';
import {LOG_PREFIX} from "./template/common/GlobalSetting";

//enable log for development
if (process.env.NODE_ENV !== 'production') {
  //https://www.npmjs.com/package/debug
  localStorage.setItem('debug', `${LOG_PREFIX}:*`);
}

/**
 * Render the application
 */
render((
        <Provider store={store.store}>
          <ConnectedRouter history={store.history}>
            <App/>
          </ConnectedRouter>
        </Provider>
    ),
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
