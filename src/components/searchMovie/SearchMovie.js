import { useDispatch, useSelector } from "react-redux";
import { useViewPort } from "../hooks";
import { useLocation } from "react-router-dom";
import "./searchMovie.scss";
import { useEffect } from "react";
import { getSearchMovies, setMovieDetail } from "../redux/store/action";

const moviesList = [
  "https://tranleshow.com/upload/ckfinder/images/nhan-thi-cong-booth-ra-mat-phim-1.jpg",
  "https://tranleshow.com/upload/ckfinder/images/nhan-thi-cong-booth-ra-mat-phim-1.jpg",
  "https://tranleshow.com/upload/ckfinder/images/nhan-thi-cong-booth-ra-mat-phim-1.jpg",
  "https://tranleshow.com/upload/ckfinder/images/nhan-thi-cong-booth-ra-mat-phim-1.jpg",
  "https://tranleshow.com/upload/ckfinder/images/nhan-thi-cong-booth-ra-mat-phim-1.jpg",
  "https://tranleshow.com/upload/ckfinder/images/nhan-thi-cong-booth-ra-mat-phim-1.jpg",
  "https://tranleshow.com/upload/ckfinder/images/nhan-thi-cong-booth-ra-mat-phim-1.jpg",
  "https://tranleshow.com/upload/ckfinder/images/nhan-thi-cong-booth-ra-mat-phim-1.jpg",
  "https://tranleshow.com/upload/ckfinder/images/nhan-thi-cong-booth-ra-mat-phim-1.jpg",
  "https://tranleshow.com/upload/ckfinder/images/nhan-thi-cong-booth-ra-mat-phim-1.jpg",
  "https://tranleshow.com/upload/ckfinder/images/nhan-thi-cong-booth-ra-mat-phim-1.jpg",
  "https://tranleshow.com/upload/ckfinder/images/nhan-thi-cong-booth-ra-mat-phim-1.jpg",
  "https://tranleshow.com/upload/ckfinder/images/nhan-thi-cong-booth-ra-mat-phim-1.jpg",
];
const useQuery = () => new URLSearchParams(useLocation().search);
const SearchMovie = () => {
  const [windowWidth] = useViewPort();
  const dispatch = useDispatch();
  const { SearchMovie } = useSelector((state) => state.infoMovie);
  const keyWords = useQuery().get("keywords");

  useEffect(() => {
    if (keyWords) {
      dispatch(getSearchMovies(keyWords));
    }
  }, [keyWords, dispatch]);
  console.log(SearchMovie);
  return (
    <div className="search">
      {SearchMovie && SearchMovie.length > 0 ? (
        <div
          className="search-content"
          style={{
            gridTemplateColumns: `repeat(${
              windowWidth > 1200
                ? 4
                : windowWidth > 992
                ? 4
                : windowWidth > 768
                ? 3
                : windowWidth > 600
                ? 2
                : 1
            }, auto)`,
          }}
        >
          {SearchMovie.map((item, index) => {
            if ((item.backdrop_path !== null, item.media_type !== "person")) {
              const urlImage = `https://image.tmdb.org/t/p/w500/${
                item.backdrop_path || item.poster_path
              }`;
              return (
                <div
                  className="movie-item"
                  key={item.id}
                  onClick={() => dispatch(setMovieDetail(item))}
                >
                  <img src={urlImage} />
                  <span>{item.name || item.title}</span>
                </div>
              );
            }
          })}
        </div>
      ) : (
        <div className="not-found">
          <h3>data not found</h3>
        </div>
      )}
    </div>
  );
};
export default SearchMovie;
