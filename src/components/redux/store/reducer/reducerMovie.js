import * as Types from "../type";

const reducerMovieInitialState = {
  filmOriginals: null,
  filmTrending: null,
  filmTopRate: null,
  filmAction: null,
  filmComedy: null,
  filmHorror: null,
  MovieDetail: null,
  SearchMovie: null,
};

const reducerMovie = (state = reducerMovieInitialState, action) => {
  const { type, payload } = action;
  switch (action.type) {
    case Types.GET_FILM_ORIGINALS:
      return { ...state, filmOriginals: payload };
    case Types.GET_FILM_TRENDING:
      return { ...state, filmTrending: payload };
    case Types.GET_FILM_TOPRATE:
      return { ...state, filmTopRate: payload };
    case Types.GET_FILM_ACTION:
      return { ...state, filmAction: payload };
    case Types.GET_FILM_COMEDY:
      return { ...state, filmComedy: payload };
    case Types.GET_FILM_HORROR:
      return { ...state, filmHorror: payload };
    case Types.SET_MOVIE_DETAIL:
      return { ...state, MovieDetail: payload };
    case Types.GET_SEARCH_MOVIES:
      return { ...state, SearchMovie: payload };
    default:
      return state;
  }
};
export default reducerMovie;
