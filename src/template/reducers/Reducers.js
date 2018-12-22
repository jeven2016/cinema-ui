import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import * as HomeReducers from "../home/HomeReducer";
import * as MovieReducers from "../video/VideoReducer";

//TODO
//https://stackoverflow.com/questions/36679505/react-router-redux-and-redux-immutable-you-cannot-change-router-history-it-w
//https://blog.csdn.net/sinat_17775997/article/details/73603797
const rootReducer = (history) => combineReducers({
  ...HomeReducers,
  ...MovieReducers,
  router: connectRouter(history)
});

export default rootReducer