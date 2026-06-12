import { useMovies } from "../hooks/useMovies.jsx";
import { Card } from "antd";

const { Meta } = Card;

const Movies = () => {
  const { movies } = useMovies();
  console.log("Peliculas desde componente ", movies);

  return (
    <>      
      <section className="flex gap-5 flex-wrap justify-center mb-5">
        {movies.map((item) => (
          <Card
            hoverable
            style={{ width: 340 }}
            cover={
              <img
                draggable={false}
                alt="example"
                src={item.image}
              />
            }
          >
            <Meta title={item.title} description={item.original_title} />
            <p>{item.description}</p>
            <p><strong>Director: </strong>{item.director}</p>
            <p><strong>Release Date: </strong>{item.release_date}</p>
          </Card>
        ))}
      </section>
    </>
  );
};

export default Movies;
