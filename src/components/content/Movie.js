import "./movie.scss";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { SmoothHorizontalScrolling } from "../utils/index";
import { useEffect, useRef, useState } from "react";
import { useViewPort } from "../hooks";
import { useDispatch } from "react-redux";
import { setMovieDetail } from "../redux/store/action";

const Movie = (props) => {
  const { movies, title, isOriginal, idSection } = props;
  const listRef = useRef();
  const itemRef = useRef();
  const [dragDown, setDragDown] = useState(0);
  const [dragMove, setDragMove] = useState(0);
  const [isDrag, setIsDrag] = useState(false);
  const [windowWidth] = useViewPort();

  const dispatch = useDispatch();

  const handleSetMovie = (item) => {
    dispatch(setMovieDetail(item));
  };
  const handleScrollRight = () => {
    const maxScrollLeft =
      listRef.current.scrollWidth - listRef.current.clientWidth;
    if (itemRef.current.scrollLeft < maxScrollLeft) {
      SmoothHorizontalScrolling(
        listRef.current,
        250,
        itemRef.current.clientWidth * 4,
        listRef.current.scrollLeft
      );
    }
  };
  const handleScrollLeft = () => {
    if (listRef.current.scrollLeft > 0)
      SmoothHorizontalScrolling(
        listRef.current,
        250,
        -(itemRef.current.clientWidth * 4),
        listRef.current.scrollLeft
      );
  };
  useEffect(() => {
    if (isDrag) {
      if (dragMove < dragDown) handleScrollRight();
      if (dragMove > dragDown) handleScrollLeft();
    }
  }, [dragDown, dragMove, isDrag]);

  const onDragStart = (e) => {
    setIsDrag(true);
    setDragDown(e.screenX);
  };
  const onDragEnd = (e) => {
    setIsDrag(false);
  };
  const onDragEnter = (e) => {
    setDragMove(e.screenX);
  };
  return (
    <div className="movie" draggable="false" id={idSection}>
      <h1 className="movie-title">{title}</h1>
      <div
        ref={listRef}
        className="movie-list "
        draggable="true"
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragEnter={onDragEnter}
        style={
          movies && movies.length > 0
            ? {
                gridTemplateColumns: `repeat(${movies.length},
            ${
              windowWidth > 1200
                ? "250px"
                : windowWidth > 992
                ? "200px"
                : windowWidth > 768
                ? "150px"
                : "120px"
            })`,
              }
            : {}
        }
      >
        {movies &&
          movies.length > 0 &&
          movies.map((item, index) => {
            {
              if (item.poster_path && item.backdrop_path !== null) {
                let imgUrl = isOriginal
                  ? `https://image.tmdb.org/t/p/original/${item.poster_path}`
                  : `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`;
                return (
                  <div
                    className="movie-item"
                    ref={itemRef}
                    draggable="false"
                    key={item.id}
                    onClick={() => handleSetMovie(item)}
                  >
                    <img
                      src={imgUrl}
                      className="movie-poster"
                      draggable="false"
                    />
                    <div className="movie-name">{item.title || item.name}</div>
                  </div>
                );
              }
            }
          })}
      </div>
      <div
        className={`btn-left ${isOriginal && "original"}`}
        onClick={() => handleScrollLeft()}
      >
        <FiChevronLeft />
      </div>
      <div
        className={`btn-right ${isOriginal && "original"}`}
        onClick={() => handleScrollRight()}
      >
        <FiChevronRight />
      </div>
    </div>
  );
};
export default Movie;
