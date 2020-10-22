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
    SET_PAGE_NUMBER,
} from './constants';

const INITIAL_STATE = {
    users: [],
    isUserFetchLoading: false,
    isUserFetchSuccess: false,
    isUserFetchErrored: false,
    posts: [],
    arePostsFetchLoading: false,
    arePostsFetchSuccess: false,
    arePostsFetchErrored: false,
    postDetails: {},
    isPostDetailsFetchLoading: false,
    isPostDetailsFetchSuccess: false,
    isPostDetailsFetchErrored: false,
    comments: [],
    areCommentsFetchLoading: false,
    areCommentsFetchSuccess: false,
    areCommentsFetchErrored: false,
    deleteCommentFetchLoading: false,
    deleteCommentFetchSuccess: false,
    deleteCommentFetchErrored: false,
    pageNumber: 1,
};

export function reducer ( state = INITIAL_STATE, action) {
    switch ( action.type ) {
        case GET_USER_LIST_REQUESTED:
            return {
                ...state,
                users: [],
                isUserFetchLoading: true,
                isUserFetchSuccess: false,
                isUserFetchErrored: false,
            }
        case GET_USER_LIST_SUCCESS:
            return {
                ...state,
                users: action.payload,
                isUserFetchLoading: false,
                isUserFetchSuccess: true,
                isUserFetchErrored: false,
            }
        case GET_USER_LIST_ERRORED:
            return {
                ...state,
                users: [],
                isUserFetchLoading: false,
                isUserFetchSuccess: false,
                isUserFetchErrored: true,
            }

        case GET_POST_LIST_REQUESTED:
            return {
                ...state,
                posts: action.payload.reset? []: state.posts,
                arePostsFetchLoading: true,
                arePostsFetchSuccess: false,
                arePostsFetchErrored: false,
            }
        case GET_POST_LIST_SUCCESS:
            return {
                ...state,
                posts: [ ...state.posts, ...action.payload],
                arePostsFetchLoading: false,
                arePostsFetchSuccess: true,
                arePostsFetchErrored: false,
            }
        case GET_POST_LIST_ERRORED:
            return {
                ...state,
                posts: [],
                arePostsFetchLoading: false,
                arePostsFetchSuccess: false,
                arePostsFetchErrored: true,
            }

        case GET_POST_DETAIL_REQUESTED:
            return {
                ...state,
                postDetails: {},
                isPostDetailsFetchLoading: true,
                isPostDetailsFetchSuccess: false,
                isPostDetailsFetchErrored: false,
            }
        case GET_POST_DETAIL_SUCCESS:
            return {
                ...state,
                postDetails: action.payload,
                isPostDetailsFetchLoading: false,
                isPostDetailsFetchSuccess: true,
                isPostDetailsFetchErrored: false,
            }
        case GET_POST_DETAIL_ERRORED:
            return {
                ...state,
                postDetails: {},
                isPostDetailsFetchLoading: false,
                isPostDetailsFetchSuccess: false,
                isPostDetailsFetchErrored: true,
            }

        case GET_COMMENT_LIST_REQUESTED:
            return {
                ...state,
                comments: [],
                areCommentsFetchLoading: true,
                areCommentsFetchSuccess: false,
                areCommentsFetchErrored: false,
            }
        case GET_COMMENT_LIST_SUCCESS:
            return {
                ...state,
                comments: action.payload,
                areCommentsFetchLoading: false,
                areCommentsFetchSuccess: true,
                areCommentsFetchErrored: false,
            }
        case GET_COMMENT_LIST_ERRORED:
            return {
                ...state,
                comments: [],
                areCommentsFetchLoading: false,
                areCommentsFetchSuccess: false,
                areCommentsFetchErrored: true,
            }

        case DELETE_COMMENT_REQUESTED:
            return {
                ...state,
                deleteCommentFetchLoading: true,
                deleteCommentFetchSuccess: false,
                deleteCommentFetchErrored: false,
            }
        case DELETE_COMMENT_SUCCESS:
            return {
                ...state,
                deleteCommentFetchLoading: false,
                deleteCommentFetchSuccess: true,
                deleteCommentFetchErrored: false,
            }
        case DELETE_COMMENT_ERRORED:
            return {
                ...state,
                deleteCommentFetchLoading: false,
                deleteCommentFetchSuccess: false,
                deleteCommentFetchErrored: true,
            }

        case SET_PAGE_NUMBER:
            return {
                ...state,
                pageNumber: action.payload,
            }

        default: {
            return {
                ...state
            }
        }

    };
};