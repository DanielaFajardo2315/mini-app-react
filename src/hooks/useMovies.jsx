// Lógica del componente Página de peliculas - mostrar peliculas
import { useState, useEffect } from "react";
import { getAllMovies } from "../services/movieService.js";

export function useMovies() {
  const [movies, setMovies] = useState([]);

  async function fetchData() {
    try {
      const data = await getAllMovies();
      setMovies(data);
    } catch (error) {
      console.error("Error inesperado ", error);
    }
  }

  useEffect(() => {
    const load = async () => await fetchData();
    load();
  }, []);

  return {
    movies,
  };
}
