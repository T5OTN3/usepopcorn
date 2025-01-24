import { createContext, useEffect, useReducer, useState } from "react";
import Header from "./components/Header/Header";
import { mainReducer } from "./state/Reducer/Main";
import { mainState } from "./state/State/Main";
import Movies from "./components/Movies/Movies";
import Summer from "./components/Watched/Summer";
import WatchedList from "./components/Watched/WatchedList";
import MovieDetails from "./components/Watched/Details";


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
                {
                  stateMovie.movieId ? <MovieDetails /> : <WatchedList />
                }  
              </>
            )}
          </div>
        </main>
      </StoreContextUsePopcorn.Provider>
    </>
  );
}
