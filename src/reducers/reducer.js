import {combineReducers} From "redux";
import postReducer from "./postReducer"

export default combineReducers({
    posts: postReducer
})