import { SHOW_IRON_MAN, SHOW_LOADING, SHOW_ERROR } from "../actions/actionType"

const initialState = {
  ironMan: [],
  loading: false,
  error: null,
};

function ironManReducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case SHOW_IRON_MAN:
      return { ...state, ironMan: payload }
    case SHOW_LOADING:
      return { ...state, loading: payload }
    case SHOW_ERROR:
      return { ...state, errors: payload }
    default:
      return state;
  }
}

export default ironManReducer
