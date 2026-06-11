import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <>
      <div className="fixed w-full">
        <div className="w-full bg-(--color-crema) text-center py-1">
          Lorem ipsum dolor sit amet consectetur.
        </div>
        <nav className="flex justify-between gap-6 p-2 pr-7 pl-3 mt-2 h-20 items-center bg-(--color-azul) text-white m-5 rounded-full">
          <Link to="/">
            <div>
              <img
                src={Logo}
                alt="Logo Studio Ghibli"
                className="w-16 h-16 rounded-full object-cover object-center"
              />
            </div>
          </Link>
          <div className="flex justify-end gap-6">
            <NavLink to="/" className={({isActive})=> isActive ? "underline decoration-(--color-terracota) text-(--color-terracota)" : ""}>Inicio</NavLink>
            <NavLink to="/sobre_nosotros" className={({isActive})=> isActive ? "underline decoration-(--color-terracota) text-(--color-terracota)" : ""}>Sobre nosotros</NavLink>
            <NavLink to="/peliculas" className={({isActive})=> isActive ? "underline decoration-(--color-terracota) text-(--color-terracota)" : ""}>Peliculas</NavLink>
            <div className="flex justify-center gap-6">
              <Link to="https://github.com/DanielaFajardo2315">
                <Icon icon={"mdi:github"} className="w-6 h-6" />
              </Link>
              <Link to="https://www.linkedin.com/in/daniela-fajardo-desarrolladora-web-full-stack/">
                <Icon icon={"mdi:linkedin"} className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
