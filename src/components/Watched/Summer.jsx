import { useContext } from "react";
import { StoreContextUsePopcorn } from "../../App";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const Summer = () => {
    const { stateMovie, dispatchMovie } = useContext(StoreContextUsePopcorn)

    
    const avgImdbRating = average(stateMovie.watchedMovies.map((movie) => movie.imdbRating));
    const avgUserRating = average(stateMovie.watchedMovies.map((movie) => movie.userRating));
    const avgRuntime = average(stateMovie.watchedMovies.map((movie) => movie.runtime));

    return(
        <div className="summary">
            <h2>Movies you watched.</h2>
            <div>
            <p>
                <span>#️⃣</span>
                <span>{stateMovie.watchedMovies.length} movies</span>
            </p>
            <p>
                <span>⭐️</span>
                <span>{avgImdbRating}</span>
            </p>
            <p>
                <span>🌟</span>
                <span>{avgUserRating}</span>
            </p>
            <p>
                <span>⏳</span>
                <span>{avgRuntime} min</span>
            </p>
            </div>
        </div>
    )
}

export default Summer;