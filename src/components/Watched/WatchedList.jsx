import { useContext } from "react";
import { StoreContextUsePopcorn } from "../../App";


const WatchedList = () => {
    const { stateMovie, dispatchMovie } = useContext(StoreContextUsePopcorn)

    return(
        
        <ul className="list">
            {stateMovie.watchedMovies.map((movie) => (
            <li key={movie.imdbID}>
                <img src={movie.Poster} alt={`${movie.Title} poster`} />
                <h3>{movie.Title}</h3>
                <div>
                <p>
                    <span>⭐️</span>
                    <span>{movie.imdbRating}</span>
                </p>
                <p>
                    <span>🌟</span>
                    <span>{movie.userRating}</span>
                </p>
                <p>
                    <span>⏳</span>
                    <span>{movie.runtime} min</span>
                </p>
                </div>
            </li>
            ))}
        </ul>
    )
}

export default WatchedList;