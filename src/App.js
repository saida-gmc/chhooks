import React, { useState } from "react";
import "./App.css";
import MoviesList from "./Components/MoviesList";
import AddCard from "./Components/AddCard";

import { Navbar, Nav } from "react-bootstrap";

const App = () => {
  const movies = [
    {
      id: 1,
      image:
        "https://i.pinimg.com/564x/37/bd/f8/37bdf8f405a30977959e112d6f48aec0.jpg",
      rating: 4,
      title: "Taxi Driver",
      date: "1976",
      type: "Crime | Drama",
      description:
        "A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action by attempting to liberate a presidential campaign worker and an underage prostitute.",
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/564x/78/55/ac/7855acc7002b1ae619b1edaa4b595df3.jpg",
      rating: 4,
      title: "Mad Max",
      date: "1979",
      type: "Action | Adventure",
      description:
        "In a self-destructing world, a vengeful Australian policeman sets out to stop a violent motorcycle gang.",
    },
    {
      id: 3,
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/b1330b14202071.5627f4dc23472.jpg",
      rating: 3,
      title: "Little Miss Sunshine",
      date: "2006",
      type: "Comedy | Drama",
      description:
        "A family determined to get their young daughter into the finals of a beauty pageant take a cross-country trip in their VW bus.",
    },
  ];

  const [moviesInfo, setMoviesInfo] = useState(movies);
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);
  const handleAdd = (newMovie) => {
    setMoviesInfo([...movies, newMovie]);
  };
  return (
    <div className="App">
      <h1>Movie Application</h1>

      <Navbar>
        <Nav>
          <AddCard handleAdd={handleAdd} />
        </Nav>
      </Navbar>
      <MoviesList movies={movies} />
    </div>
  );
};
export default App;
