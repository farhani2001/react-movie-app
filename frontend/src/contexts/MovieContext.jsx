import {createContext, useState, useContext, useEffect} from "react"

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

            if (storedFavs) setFavorites(JSON.parse(storedFavs))

    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev,movie])
    }
    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }
    
    const [watchLater, setWatchLater] = useState([])

    useEffect(() => {
        const storedWatchLater = localStorage.getItem("watchLater")
            if (storedWatchLater) setWatchLater(JSON.parse(storedWatchLater))
    }, [])
    
    useEffect(() => {
        localStorage.setItem('watchLater', JSON.stringify(watchLater))
    }, [watchLater])
    
    const addToWatchLater = (movie) => {
        setWatchLater(prev => [...prev,movie])
    }

    const removeFromWatchLater = (movieId) => {
        setWatchLater(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isWatchLater = (movieId) => {
        return watchLater.some(movie => movie.id === movieId)
    }


    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        watchLater,
        addToWatchLater,
        removeFromWatchLater,
        isWatchLater
        
    }


    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}


