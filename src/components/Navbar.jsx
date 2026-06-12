import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <>
      <div className="fixed w-full z-100">
        <div className="w-full bg-(--color-crema) py-1">
          <span className="text-center w-full inline-block animate-marquee">Esta es una página para ver información de las peliculas de Studio Ghibli &nbsp;&nbsp;&nbsp;</span>
        </div>
        <nav className="flex justify-between gap-6 p-2 pr-7 pl-3 mt-2 h-20 items-center bg-(--color-azul) text-white m-5 rounded-full">
          <Link to="/">
            <div>
              <img
                src={Logo}
                alt="Logo Studio Ghibli"
                className="w-16 h-16 rounded-full object-cover object-center border-2 border-(--color-terracota)"
              />
            </div>
          </Link>
          <div className="flex justify-end gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "underline decoration-(--color-terracota) text-(--color-terracota)"
                  : ""
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to="/sobre_nosotros"
              className={({ isActive }) =>
                isActive
                  ? "underline decoration-(--color-terracota) text-(--color-terracota)"
                  : ""
              }
            >
              Sobre nosotros
            </NavLink>
            <NavLink
              to="/peliculas"
              className={({ isActive }) =>
                isActive
                  ? "underline decoration-(--color-terracota) text-(--color-terracota)"
                  : ""
              }
            >
              Peliculas
            </NavLink>
            <NavLink
              to="/inicio_sesion"
              className={({ isActive }) =>
                isActive
                  ? "underline decoration-(--color-terracota) text-(--color-terracota)"
                  : ""
              }
            >
              Inicio de Sesión
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
