import "../css/MovieCard.css";
import {useMovieContext} from "../contexts/MovieContext";
import clock from "../assets/clock.png";

function MovieCard({movie}){
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
    const favorite = isFavorite(movie.id)
    const {addToWatchLater, removeFromWatchLater, isWatchLater} = useMovieContext()
    const watchLater = isWatchLater(movie.id)

    function onFavouriteClick(e){
        e.preventDefault()
        if (favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)

    }

    function onWatchLaterClick(e){
       e.preventDefault()
       if (watchLater) removeFromWatchLater(movie.id)
        else addToWatchLater(movie)
    }


    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="movie-overlay">
                    <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavouriteClick}>
                        ♥
                    </button>
                    <button className={`watch-later-button ${watchLater ? "active" : ""}`} onClick={onWatchLaterClick} >
                        <img src={clock} alt="watch-later" className="watch-later-icon"/>
                    </button>
                </div>
                
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>
    )
}

export default MovieCard