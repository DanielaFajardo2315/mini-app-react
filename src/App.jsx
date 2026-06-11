import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Movies from "./pages/Movies.jsx";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sobre_nosotros" element={<About/>}/>
        <Route path="/peliculas" element={<Movies/>}/>
      </Routes>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
