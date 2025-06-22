import "./css/App.css";
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import {Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import {MovieProvider} from "./contexts/MovieContext";

function App() {
  
  return (
    <MovieProvider>
      <div>
        <NavBar/>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
          </Routes>
        </main>
      </div>
    </MovieProvider>
  );
}

export default App;
