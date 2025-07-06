import MovieCard from "../components/MovieCard";
import{useState, useEffect} from "react"
import {searchMovies, getPopularMovies} from "../services/api";
import NavBar from "../components/NavBar";
import '../css/Home.css';

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                console.log(err)
                setError("failed to load...")
            }
            finally {
                setLoading(false)
            }
        }
        loadPopularMovies();
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return
        if (loading) return

        setLoading(true)
        try{
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        } catch (err){
            console.log(err)
            setError("failed to search")
        } finally{
            setLoading(false)
        }

        
        setSearchQuery("");
    }
    return(
        <div className="home">
            <div className="signup">
            <h1>
                Welcome to Farhani's Movie app
            </h1>
            <button>
                <a href = "/signup" className="signup-link">Sign Up</a>
            </button>
            <button>
                <a href = "/login" className = "login-link">Login</a>
            </button>
            </div>
            <form onSubmit = {handleSearch} className="search-form">
                <input type="text" placeholder="Search for movies" className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <button type="submit" className="search-button">Search</button>
            </form>

                {error && <div className="error-message">{error}</div>}
                
            {loading? (
                <div className="loading">Loading...</div>
            ):(
                <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard movie ={movie} key={movie.id} />
                ))}
            </div>
            )}
        </div>
    );
}

export default Home;
// This code defines a Home component that renders a grid of MovieCard components.