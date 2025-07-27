import "./css/App.css";
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import WatchLater from './pages/Watch-later';
import {Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import {MovieProvider} from "./contexts/MovieContext";
import React, {useState, useEffect} from "react";
import axios from "axios";
import SignUp from './pages/Signup';
import LogIn from './pages/Login';


function App() {
  
  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api");
    console.log(response.data.fruits)
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <MovieProvider>
      <div>
        <NavBar/>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element={<LogIn/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
            <Route path="/watch-later" element={<WatchLater/>}/>
          </Routes>
        </main>
      </div>
    </MovieProvider>
  );
}

export default App;
