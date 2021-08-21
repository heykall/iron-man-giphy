import { SHOW_SEARCH, SHOW_LOADING, SHOW_ERROR } from "../actions/actionType"

const initialState = {
  search: [],
  loading: false,
  error: null,
};

function searchReducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case SHOW_SEARCH:
      return { ...state, search: payload }
    case SHOW_LOADING:
      return { ...state, loading: payload }
    case SHOW_ERROR:
      return { ...state, errors: payload }
    default:
      return state
  }
}

export default searchReducer
