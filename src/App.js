import { createContext, useEffect, useReducer, useState } from "react";
import Header from "./components/Header/Header";
import { mainReducer } from "./state/Reducer/Main";
import { mainState } from "./state/State/Main";
import Movies from "./components/Movies/Movies";
import Summer from "./components/Watched/Summer";
import WatchedList from "./components/Watched/WatchedList";
import MovieDetails from "./components/Watched/Details";

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

export const StoreContextUsePopcorn = createContext({})

export default function App() {
  
  const [stateMovie, dispatchMovie] = useReducer(mainReducer, mainState);

  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <>
      <StoreContextUsePopcorn.Provider value={{ stateMovie, dispatchMovie }}>
        <Header />
        <main className="main">
          <Movies />
          <div className="box">
            <button
              className="btn-toggle"
              onClick={() => setIsOpen2((open) => !open)}
            >
              {isOpen2 ? "–" : "+"}
            </button>
            {isOpen2 && (
              <>
                <Summer />
                <WatchedList />
                <MovieDetails />
              </>
            )}
          </div>
        </main>
      </StoreContextUsePopcorn.Provider>
    </>
  );
}
