import SearchMovie from "../searchMovie/SearchMovie";
import MoviesDetail from "../movieDetail/MoviesDetail";
import { useSelector } from "react-redux";
const Search = () => {
  const { MovieDetail } = useSelector((state) => state.infoMovie);
  return (
    <>
      <SearchMovie />
      <MoviesDetail showModal={MovieDetail ? true : false} item={MovieDetail} />
    </>
  );
};
export default Search;
