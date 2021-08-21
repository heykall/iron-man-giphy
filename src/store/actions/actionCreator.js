import {
  SHOW_IRON_MAN,
  SHOW_SEARCH,
  SHOW_ERROR,
  SHOW_LOADING,
} from "./actionType"

import axios from "axios"

export function setIronMan(payload) {
  return {
    type: SHOW_IRON_MAN,
    payload,
  }
}

export function setSearch(payload) {
  return {
    type: SHOW_SEARCH,
    payload,
  };
}

export function setLoading(payload) {
  return {
    type: SHOW_LOADING,
    payload,
  }
}

export function setError(payload) {
  return {
    type: SHOW_ERROR,
    payload,
  };
}

export function fetchIronMan() {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: 'GET',
        url: 'https://api.giphy.com/v1/gifs/trending',
        params: {
          api_key: 'oh8q01YsX36GyJqbzddrAqqvf7dEiVrM',
          limit: 9,
        },
      })

      const gifImages = data.data.map(gif => {
          return gif.images.fixed_height.url
      })
      
      dispatch(setIronMan(gifImages))
    } catch (error) {
      dispatch(setError(error))
    } finally {
      dispatch(setLoading(false))
    }
  };
}

