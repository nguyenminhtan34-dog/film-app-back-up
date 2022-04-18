import { useDispatch } from "react-redux";
import Movie from "../content/Movie";
import { setMovieDetail } from "../redux/store/action";
import "./moviedetail.scss";
import moment from "moment";
// const showModal = false;
const MoviesDetail = (props) => {
  const { item, showModal } = props;
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(setMovieDetail(null));
  };
  return (
    <div className={"movie-detail"}>
      <div
        className={`backdrop ${showModal ? "show-detail" : "hide-detail"}`}
        onClick={() => handleCloseModal()}
      ></div>
      <div
        className={`movie-detail-modal ${
          showModal ? "show-modal" : "hide-modal"
        }`}
        style={
          item
            ? {
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${
                  item.backdrop_path || item.poster_path
                })`,
                backgroundSize: "cover",
              }
            : {}
        }
      >
        <div className="movie-detail-modal-container">
          <div className="movie-detail-info">
            <h2 className="movie-detail-title">
              {item && (item.title || item.name)}
            </h2>
            <p className="movie-detail-statistical">
              <span className="movie-detail-rating">
                {item && item.vote_average * 10} %
              </span>
              <span className="movie-detail-popularity">
                {item && item.popularity}
              </span>
            </p>
            <p className="movie-detail-releaseDate">
              {item && moment(item.release_date).format("DD/MM/YYYY")}
            </p>
            <p className="movie-detail-runtime"> RunTime: abc</p>
            <p className="movie-detail-overview">{item && item.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesDetail;
