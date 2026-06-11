import React from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer>
      <div className="w-full bg-(--color-azul) flex flex-col justify-center items-center gap-3 rounded-t-4xl">
        <img
          src={Logo}
          alt="Logo"
          className="w-16 h-16 rounded-full object-cover object-center border-2 border-(--color-terracota) mt-4"
        />
        <div className="flex justify-center gap-2 flex-col items-center">
          <div className="flex justify-center gap-6 text-amber-50">
            <Link to="https://github.com/DanielaFajardo2315">
              <Icon icon={"mdi:github"} className="w-6 h-6" />
            </Link>
            <Link to="https://www.linkedin.com/in/daniela-fajardo-desarrolladora-web-full-stack/">
              <Icon icon={"mdi:linkedin"} className="w-6 h-6" />
            </Link>
          </div>
          <p className="text-amber-50">
            Proyecto creado por &copy; Daniela Fajardo
          </p>
        </div>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
