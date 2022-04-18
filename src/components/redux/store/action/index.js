import axios from "axios";
import * as Types from "../type";

const API_KEY = "0400d7b4ddcb26961339cf23192e64c6";
const BASE_URL = "https://api.themoviedb.org/3";

export const getFilmOriginal = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`
    );
    dispatch({ type: Types.GET_FILM_ORIGINALS, payload: result.data.results });
  } catch (error) {
    console.log("get film api error: ", error);
  }
};

export const getFilmTrending = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-us`
    );
    dispatch({ type: Types.GET_FILM_TRENDING, payload: result.data.results });
  } catch (error) {
    console.log("get film trending api error: ", error);
  }
};

export const getFilmTopTate = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/movie/top_rated/?api_key=${API_KEY}&language=en-us`
    );
    dispatch({ type: Types.GET_FILM_TOPRATE, payload: result.data.results });
  } catch (error) {
    console.log("get film toprate api error: ", error);
  }
};
export const getFilmAction = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`
    );
    dispatch({ type: Types.GET_FILM_ACTION, payload: result.data.results });
  } catch (error) {
    console.log("get film action api error: ", error);
  }
};

export const getFilmComedy = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`
    );
    dispatch({ type: Types.GET_FILM_COMEDY, payload: result.data.results });
  } catch (error) {
    console.log("get film Comedy api error: ", error);
  }
};

export const getFilmHorror = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`
    );
    dispatch({ type: Types.GET_FILM_HORROR, payload: result.data.results });
  } catch (error) {
    console.log("get film Horror api error: ", error);
  }
};

export const setMovieDetail = (item) => (dispatch) => {
  dispatch({ type: Types.SET_MOVIE_DETAIL, payload: item });
};

export const getSearchMovies = (keyWords) => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US&include_adult=false&query=${keyWords}`
    );
    dispatch({
      type: Types.GET_SEARCH_MOVIES,
      payload: result.data.results,
    });
  } catch (error) {
    console.log(`error get search movies`, error);
  }
};
