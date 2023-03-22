import { handleActions } from "redux-actions";
import * as api from "../lib/api";
import createRequestThunk from "../lib/createRequestThunk";

//action type declare
//make three per one request

const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";
const GET_POST_FAILURE = "sample/GET_POST_FAILURE";

const GET_USERS = `sample/GET_USERS`;
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "sample/GET_USERS_FAILURE";

//make Thunk function
//in the thunk function, dispatch different dispatch when start, success, failure

export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

// export const getPost = (id) => async (dispatch) => {
//   dispatch({ type: GET_POST });
//   try {
//     const response = await api.getPost(id);
//     dispatch({
//       type: GET_POST_SUCCESS,
//       payload: response.data,
//     });
//   } catch (e) {
//     dispatch({
//       type: GET_POST_FAILURE,
//       payload: e,
//       error: true,
//     }); //error happens
//     throw e;
//     //Later, you can find error at component level
//   }
// };

// export const getUsers = () => async (dispatch) => {
//   dispatch({ type: GET_USERS });
//   try {
//     const response = await api.getUsers();
//     dispatch({
//       type: GET_USERS_SUCCESS,
//       payload: response.data,
//     }); //request success
//   } catch (e) {
//     dispatch({
//       type: GET_USERS_FAILURE,
//       payload: e,
//       error: true,
//     }); //error happens
//     throw e; //check error at component level
//   }
// };

//initial setting
//request loading status is managed by the object 'loading'

const initialState = {
  loading: {
    GET_POST: false,
    GET_USERS: false,
  },
  post: null,
  users: null,
};

const sample = handleActions(
  {
    // [GET_POST]: (state) => ({
    //   ...state,
    //   loading: {
    //     ...state.loading,
    //     GET_POST: true, //request start
    //   },
    // }),
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: false, //request complete
      },
      post: action.payload,
    }),
    // [GET_POST_FAILURE]: (state, action) => ({
    //   ...state,
    //   loading: {
    //     ...state.loading,
    //     GET_POST: false, //request complete
    //   },
    // }),
    // [GET_USERS]: (state) => ({
    //   ...state,
    //   loading: {
    //     ...state.loading,
    //     GET_USERS: true, //request starts
    //   },
    // }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USERS: false, //request complete
      },
      users: action.payload,
    }),
    // [GET_USERS_FAILURE]: (state, action) => ({
    //   ...state,
    //   loading: {
    //     ...state.loading,
    //     GET_USERS: false, //request complete
    //   },
    // }),
  },
  initialState
);

export default sample;
