import Intro from "../intro/Intro";
import Content from "../content/Content";
import MoviesDetail from "../movieDetail/MoviesDetail";
import Footer from "../footer/Footer";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Menu from "../menus/Menu";

const Home = (props) => {
  const { MovieDetail } = useSelector((state) => state.infoMovie);
  const [isShowMovieDetail, setIsShowMovieDetail] = useState(false);
  useEffect(() => {
    setIsShowMovieDetail(MovieDetail ? true : false);
  }, [MovieDetail]);

  return (
    <>
      <Intro />
      <Content />
      <MoviesDetail item={MovieDetail} showModal={isShowMovieDetail} />
      <Menu />
      <Footer />
    </>
  );
};
export default Home;
