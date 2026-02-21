import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
// import About from "./pages/About";
// import Search from "./pages/Search";
// import AnimeProfile from "./pages/AnimeProfile";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* search */}
          {/* <Route path="search/:queryString" element={<Search />} /> */}
          {/* anime profile */}
          {/* <Route path="anime/:animeId" element={<AnimeProfile />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
