import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import MovieApiFetch from "./MovieApiFetch";
import MovieDetails from "./MovieDetails";

const App = () => {
  const [movies, setMovies] = useState([]);

  return (
    <Routes>
      <Route path="/" element={<MovieApiFetch setMovies={setMovies} />} />
      <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
    </Routes>
  );
};

export default App;
