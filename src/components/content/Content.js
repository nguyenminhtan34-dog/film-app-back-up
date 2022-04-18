import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as ACTION from "../redux/store/action";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll/modules";
import { useScrollY } from "../hooks";
import Movie from "./Movie";

const Content = (props) => {
  const dispatch = useDispatch();
  const { filmOriginals } = useSelector((state) => state.infoMovie);
  const { filmTrending } = useSelector((state) => state.infoMovie);
  const { filmTopRate } = useSelector((state) => state.infoMovie);
  const { filmAction } = useSelector((state) => state.infoMovie);
  const { filmComedy } = useSelector((state) => state.infoMovie);
  const { filmHorror } = useSelector((state) => state.infoMovie);
  useEffect(() => {
    dispatch(ACTION.getFilmOriginal());
    dispatch(ACTION.getFilmTrending());
    dispatch(ACTION.getFilmTopTate());
    dispatch(ACTION.getFilmAction());
    dispatch(ACTION.getFilmComedy());
    dispatch(ACTION.getFilmHorror());
  }, [dispatch]);
  const scrollY = useScrollY();
  const moveToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      <Movie
        movies={filmOriginals}
        title={"Original Movie"}
        isOriginal={true}
        idSection="Original "
      />
      <Movie
        movies={filmTrending}
        title={"Trending Movie"}
        idSection="Trending"
      />
      <Movie
        movies={filmTopRate}
        title={"Top Rate Movie"}
        idSection="TopRate"
      />
      <Movie movies={filmAction} title={"Action Movie"} idSection="Action" />
      <Movie movies={filmComedy} title={"Comedy Movie"} idSection="Comedy" />
      <Movie movies={filmHorror} title={"Horror Movie"} idSection="Horror" />

      <FaArrowAltCircleUp
        className="move-to-top"
        style={{ display: `${scrollY > 300 ? "block" : "none"}` }}
        onClick={() => moveToTop()}
      ></FaArrowAltCircleUp>
    </div>
  );
};
export default Content;
