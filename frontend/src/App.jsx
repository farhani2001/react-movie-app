import "./css/App.css";
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import WatchLater from './pages/Watch-later';
import {Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import {MovieProvider} from "./contexts/MovieContext";
import React, {useState, useEffect} from "react";

function App() {
  
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(console.log("fetching")).then(
      response => response.json()
    ).then(
        data => {
          setBackendData(data)
          console.log("data fetched", data)
        }
      )
    },[])
    
    console.log("backendData:", backendData);
  
  return (
    <MovieProvider>
      <div>
        {(typeof backendData.users === 'undefined') ? (
          <p>loading</p>
        ) : (
          backendData.users.map((user,i) => (
            <p key={i}> {user}</p>
          ))
        )}
        
        <NavBar/>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
            <Route path="/watch-later" element={<WatchLater/>}/>
          </Routes>
        </main>
      </div>
    </MovieProvider>
  );
}

export default App;
