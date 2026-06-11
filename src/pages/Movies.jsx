import { useMovies } from "../hooks/useMovies.jsx";

const Movies = () => {
  const { movies } = useMovies();
  console.log("Peliculas desde componente ", movies)

  return (
    <>
      <h1>Contenido de las peliculas</h1>
      <ul>
        {
          movies.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))
        }
      </ul>
    </>
  );
};

export default Movies;
