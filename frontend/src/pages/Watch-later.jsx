import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
import "../css/WatchLater.css";

function WatchLater() {
    const { watchLater} = useMovieContext();

    if (watchLater.length > 0) {
        return (
            <div className="watch-later">
                <h2>What will you watch next...</h2>
                <div className="movie-grid">
                    {watchLater.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="watch-later-empty">
            <h2>No movie you wanna watch later</h2>
            <p>Start adding movies you wanna watch later</p>
        </div>
    );
}

export default WatchLater;