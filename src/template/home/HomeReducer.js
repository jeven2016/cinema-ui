import {TYPE_QUERY_VIDEO_LIST} from '../common/AppActionTypes';

export const homeVideoList = (state = {
      movie: [],
      teleplay: [],
      cartoon: [],
      varietyShow: []
    },
    action) => {
  if (action.type === TYPE_QUERY_VIDEO_LIST) {
    return {...action.result};
  }
  return state;
};