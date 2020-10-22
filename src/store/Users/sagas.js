import { all, call, put, takeLatest } from 'redux-saga/effects';
import { 
    GET_USER_LIST_REQUESTED,
    GET_USER_LIST_SUCCESS,
    GET_USER_LIST_ERRORED,
    GET_POST_LIST_REQUESTED,
    GET_POST_LIST_SUCCESS,
    GET_POST_LIST_ERRORED,
    GET_POST_DETAIL_REQUESTED,
    GET_POST_DETAIL_SUCCESS,
    GET_POST_DETAIL_ERRORED,
    GET_COMMENT_LIST_REQUESTED,
    GET_COMMENT_LIST_SUCCESS,
    GET_COMMENT_LIST_ERRORED,
    DELETE_COMMENT_REQUESTED,
    DELETE_COMMENT_SUCCESS,
    DELETE_COMMENT_ERRORED,
} from './constants';
import {
    getUserList,
    getPostList,
    getPostDetails,
    getCommentList,
    deleteComment,
} from '../../api/api.blogs';

function* getUserListSaga(action) {
    try {
        const responseBody = yield call(getUserList, {});
        yield put({
            type: GET_USER_LIST_SUCCESS,
            payload: responseBody,
        });
    } catch (err) {
        const payload = {
            status: err.request.status,
            message: err.message,
        }
        yield put({
            type: GET_USER_LIST_ERRORED,
            payload,
        });
    };
};

function* getPostListSaga(action) {
    try {
        const responseBody = yield call(getPostList, action.payload);
        yield put({
            type: GET_POST_LIST_SUCCESS,
            payload: responseBody,
        });
    } catch (err) {
        const payload = {
            status: err.request.status,
            message: err.message,
        }
        yield put({
            type: GET_POST_LIST_ERRORED,
            payload,
        });
    };
};

function* getPostDetailsSaga(action) {
    try {
        const responseBody = yield call(getPostDetails, action.payload);
        yield put({
            type: GET_POST_DETAIL_SUCCESS,
            payload: responseBody,
        });
    } catch (err) {
        const payload = {
            status: err.request.status,
            message: err.message,
        }
        yield put({
            type: GET_POST_DETAIL_ERRORED,
            payload,
        });
    };
};

function* getCommentListSaga(action) {
    try {
        const responseBody = yield call(getCommentList, action.payload);
        yield put({
            type: GET_COMMENT_LIST_SUCCESS,
            payload: responseBody,
        });
    } catch (err) {
        const payload = {
            status: err.request.status,
            message: err.message,
        }
        yield put({
            type: GET_COMMENT_LIST_ERRORED,
            payload,
        });
    };
};

function* deleteCommentSaga(action) {
    try {
        const responseBody = yield call(deleteComment, action.payload);
        yield put({
            type: DELETE_COMMENT_SUCCESS,
            payload: responseBody,
        });
    } catch (err) {
        const payload = {
            status: err.request.status,
            message: err.message,
        }
        yield put({
            type: DELETE_COMMENT_ERRORED,
            payload,
        });
    };
};

export default function* userSaga() {
    yield all([
        takeLatest(GET_USER_LIST_REQUESTED, getUserListSaga),
        takeLatest(GET_POST_LIST_REQUESTED, getPostListSaga),
        takeLatest(GET_POST_DETAIL_REQUESTED, getPostDetailsSaga),
        takeLatest(GET_COMMENT_LIST_REQUESTED, getCommentListSaga),
        takeLatest(DELETE_COMMENT_REQUESTED, deleteCommentSaga),
    ]);
};