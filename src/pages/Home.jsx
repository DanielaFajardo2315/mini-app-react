import { Carousel } from "antd";
import Banner1 from "../assets/banner1.jpg";
import Banner2 from "../assets/banner2.png";
import Banner3 from "../assets/banner3.jpg";
import Banner4 from "../assets/banner4.jpg";
import Banner5 from "../assets/banner5.png";
import iconoTotoro from "../assets/icon-totoro-100.png";
import fondo from "../assets/ponyo.gif";

const Home = () => {
  return (
    <>
      <section className="w-[50%] m-auto mb-5 bg-(--color-verde) rounded-md">
        <Carousel arrows autoplay adaptiveHeight>
          <div>
            <img
              src={Banner1}
              alt="Pelicula Mi vecino Totoro (1988)"
              className="w-full h-70 object-contain"
            />
          </div>
          <div>
            <img
              src={Banner2}
              alt="Pelicula Mi vecino Totoro (1988)"
              className="w-full h-70 object-contain"
            />
          </div>
          <div>
            <img
              src={Banner3}
              alt="Banner 40 años Studio Ghibli"
              className="w-full h-70 object-contain"
            />
          </div>
          <div>
            <img
              src={Banner4}
              alt="Pelicula El viaje de Chihiro (2001)"
              className="w-full h-70 object-contain"
            />
          </div>
          <div>
            <img
              src={Banner5}
              alt="Pelicula Ponyo (2008)"
              className="w-full h-70 object-contain"
            />
          </div>
        </Carousel>
      </section>
      <section className="w-[80%] m-auto">
        <h1 className="font-bold text-4xl text-(--color-verde) text-center">
          <strong>El Taller de los Sueños: </strong>Cómo Studio Ghibli Redefinió
          la Historia de la Animación
        </h1>
        <p className="text-justify">
          Hubo un tiempo en que la animación se consideraba un género exclusivo
          para niños, dominado casi por completo por la fórmula de Hollywood.
          Pero en 1985, desde el corazón de Tokio, un pequeño grupo de
          visionarios decidió desafiar esa idea. Fundado por los directores
          Hayao Miyazaki y Isao Takahata, junto al productor Toshio Suzuki,
          Studio Ghibli nació con una misión clara: explorar la condición
          humana, la naturaleza y la fantasía a través de una animación
          artesanal de la más alta calidad.
          <br />
          El nombre "Ghibli" proviene de un término italiano utilizado para
          describir el viento cálido del desierto del Sáhara. La intención era
          poética y ambiciosa: querían soplar un nuevo viento a través de la
          industria de la animación. Y vaya si lo lograron.
        </p>
        <br />
        <div className="rounded-3xl" style={{ backgroundImage: `url(${fondo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="backdrop-brightness-60 p-2 rounded-3xl">
            <h2 className="text-2xl text-amber-50 font-bold text-center underline decoration-dotted">Los Hitos que Marcaron un Legado</h2>
            <p className="text-amber-50">
              A lo largo de cuatro décadas, Studio Ghibli no solo ha acumulado
              premios, sino que ha moldeado la cultura pop global. Estos son sus
              momentos más imborrables:
            </p>
            <br />
            <ul className="w-[90%] m-auto text-justify text-amber-50" style={{ listStyleImage: `url(${iconoTotoro})` }}>
              <li>
                <strong className="hover:text-(--color-verde) hover:underline">1986 |</strong> El despegue con El castillo en el cielo: Fue
                la primera película oficial del estudio. Estableció las bases
                visuales de Ghibli: la fascinación de Miyazaki por la aviación, las
                civilizaciones perdidas y la tecnología con tintes de vapor
                (steampunk).
              </li>
              <li>
                <strong className="hover:text-(--color-verde) hover:underline">1988 |</strong> El doble estreno que hizo historia: En un
                movimiento arriesgado, Ghibli lanzó simultáneamente dos películas
                radicalmente opuestas: Mi vecino Totoro (una dulce oda a la infancia
                y la naturaleza) y La tumba de las luciérnagas (una desgarradora
                obra maestra sobre los estragos de la Segunda Guerra Mundial).
                Totoro se convirtió en el logotipo del estudio y en un icono
                cultural mundial.
              </li>
              <li>
                <strong className="hover:text-(--color-verde) hover:underline">1997 |</strong> La princesa Mononoke rompe barreras: Esta
                épica ambientalista no solo pulverizó récords de taquilla en Japón,
                sino que fue la producción que obligó a Occidente (a través de la
                distribución de Disney/Miramax) a mirar seriamente al anime como un
                arte maduro y complejo.
              </li>
              <li>
                <strong className="hover:text-(--color-verde) hover:underline">2001 |</strong> El fenómeno de El viaje de Chihiro:
                Considerada una de las mejores películas del siglo XXI. Chihiro se
                convirtió en la película más taquillera de la historia de Japón en
                su momento y logró el hito histórico de ganar el Óscar a la Mejor
                Película de Animación en 2003, siendo la única película de habla no
                inglesa en conseguirlo hasta la fecha.
              </li>
              <li>
                <strong className="hover:text-(--color-verde) hover:underline">2023 |</strong> El regreso triunfal con El chico y la garza:
                Tras un amago de retiro, Miyazaki regresó para dirigir una obra
                profundamente personal y visualmente deslumbrante. La película no
                solo conmovió a la crítica, sino que le otorgó al estudio su segundo
                premio Óscar en 2024, demostrando que la magia de Ghibli sigue
                intacta en la era digital.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="w-[80%] m-auto mb-5">
        <h2 className="font-bold text-4xl text-(--color-verde) text-center m-2">El Secreto de su Magia</h2>
        <p>
          A diferencia de la industria actual, obsesionada con la velocidad y
          los gráficos en 3D por computadora, Ghibli se ha mantenido fiel al
          dibujo hecho a mano fotograma a fotograma. Sus historias no tienen
          villanos planos; en su lugar, exploran los grises de la moralidad, el
          pacifismo, el feminismo a través de heroínas complejas y la nostalgia
          por lo cotidiano (los famosos momentos de silencio o ma).
          <br />
          "Muchos creadores de hoy intentan hacer películas como si fueran
          videojuegos, pero yo quiero hacer películas que se sientan como la
          vida misma". — Hayao Miyazaki
          <br />
          Hoy en día, Studio Ghibli es más que un estudio de cine; es un refugio
          emocional para millones de personas. Desde su icónico museo en Mitaka
          hasta su parque temático, el estudio ha demostrado que las historias
          locales, cocinadas a fuego lento y con el corazón, pueden volverse
          universales y eternas.
        </p>
      </section>
    </>
  );
};

export default Home;
