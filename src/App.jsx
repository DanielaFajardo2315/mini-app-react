import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Movies from "./pages/Movies.jsx";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./pages/Login.jsx";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="flex flex-col flex-1 pt-[140px]">
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sobre_nosotros" element={<About/>}/>
            <Route path="/peliculas" element={<Movies/>}/>
            <Route path="/inicio_sesion" element={<Login/>}/>
          </Routes>
        </main>
          <Footer />
      </div>
    </>
  );
}

export default App;
