import { useSelector } from "react-redux";
import Content from "./components/content/Content";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import MoviesDetail from "./components/movieDetail/MoviesDetail";
import "./App.scss";
import SearchMovie from "./components/searchMovie/SearchMovie";
import Home from "./components/pages/Home";
import Search from "./components/pages/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>

      {/* <Home /> */}
    </div>
  );
}

export default App;
