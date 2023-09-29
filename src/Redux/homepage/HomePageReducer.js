import {
  GET_FLAG_BEGIN,
  GET_FLAG_SUCCESS,
  GET_FLAG_FAILURE,
} from "./HomePagActionTypes";

const initialState = {
  getFlagBegin: false,
  getFlagSuccess: false,
  getFlagFailure: false,
  getFlagData: [],
};
export default function HomePageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FLAG_BEGIN:
      return {
        ...state,
        getFlagBegin: true,
        getFlagSuccess: false,
        getFlagFailure: false,
      };
    case GET_FLAG_SUCCESS:
      return {
        ...state,
        getFlagBegin: false,
        getFlagSuccess: true,
        getFlagFailure: false,
        getFlagData: action.data,
      };
    case GET_FLAG_FAILURE:
      return {
        ...state,
        getFlagBegin: false,
        getFlagSuccess: false,
        getFlagFailure: true,
        getFlagData: action.data,
      };

    default:
      return state;
  }
}
