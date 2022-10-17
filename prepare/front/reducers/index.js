import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import user from "./user";
import post from "./post";

//async action creator

//action creator
const changeNickname = (data) => {
  return {
    type: "CHANGE_NICKNAME",
    data,
  };
};

changeNickname("thun");
// {
//     type: "CHANGE_NAME",
//     data: 'thun'
// }

//(이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case "HYDRATE":
        console.log("HYDRATE", action);
        return { ...state, ...action.payload };

      default:
        return state;
    }
  }, //HYDRATE를 위한 index reducer (HYDRATE :  리덕스 서버사이드 렌더링을 위함)
  user,
  post,
});

export default rootReducer;
