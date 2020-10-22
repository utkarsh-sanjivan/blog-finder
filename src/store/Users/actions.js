import {
    GET_USER_LIST_REQUESTED,
    GET_POST_LIST_REQUESTED,
    GET_POST_DETAIL_REQUESTED,
    GET_COMMENT_LIST_REQUESTED,
    DELETE_COMMENT_REQUESTED,
    SET_PAGE_NUMBER,
} from './constants';


export function getUserList(payload) {
    return {
        type: GET_USER_LIST_REQUESTED,
        payload,
    };
}

export function getPostList(payload) {
    return {
        type: GET_POST_LIST_REQUESTED,
        payload,
    };
}

export function getPostDetails(payload) {
    return {
        type: GET_POST_DETAIL_REQUESTED,
        payload,
    };
}

export function getCommentList(payload) {
    return {
        type: GET_COMMENT_LIST_REQUESTED,
        payload,
    };
}

export function deleteComment(payload) {
    return {
        type: DELETE_COMMENT_REQUESTED,
        payload,
    };
}

export function setPageNumber(payload) {
    return {
        type: SET_PAGE_NUMBER,
        payload,
    }
}