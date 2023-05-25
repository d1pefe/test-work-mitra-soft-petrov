import {all, call, put, takeLatest} from "redux-saga/effects";

import {
    getAllPosts, setAllComm,
    setAllPosts, getAllComm
} from "../reducers/postSlice";
import API from "../api";
import {ApiResponse} from "apisauce";

function* getAllPostsWorker() {
    const {ok, data, problem}: ApiResponse<any> = yield call(API.getPosts);
    if (ok) {
        yield put(setAllPosts(data));
    } else {
        console.warn("Error getting all posts ", problem);
    }
}

function* getAllCommWorker() {
    const {ok, data, problem}: ApiResponse<any> = yield call(API.getComm);
    if (ok) {
        yield put(setAllComm(data));
    } else {
        console.warn("Error getting all comm ", problem);
    }
}

export default function* postsSaga() {
    yield all([
        takeLatest(getAllPosts, getAllPostsWorker),
        takeLatest(getAllComm, getAllCommWorker),
    ])
};