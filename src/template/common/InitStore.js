import {applyMiddleware, compose, createStore} from "redux"
import thunk from "redux-thunk"
import {createBrowserHistory} from "history";
import rootReducer from "../reducers/Reducers";
import {routerMiddleware} from "connected-react-router/immutable";
import {BASENAME} from "./GlobalSetting";

//history
const history = createBrowserHistory({basename: BASENAME});
const initialState = {}; //TODO:immutable state

// the middle wares enabled
const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
  const {logger} = require(`redux-logger`);

  middlewares.push(logger);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer(history),
    initialState,
    composeEnhancers(
        applyMiddleware(
            routerMiddleware(history),
            ...middlewares
        ),
    ),
);

function initStore() {
  //热替换选项
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("../reducers/Reducers", () => {
      const nextReducer = require("../reducers/Reducers")
      store.replaceReducer(nextReducer)
    })
  }
  return {
    store: store,
    history: history
  }
}

export default initStore();
