import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import IniciarSeccion from './InicioSeccion/InicioSeccion'
import Registrarme from './Registrarme/Registrarme'
import './navbar.css';
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="images/logo.png" />
      </div>
      <div className="menu-icon" onClick={handleShowNavbar}>
        <img src="src/assets/icons/hamburger.svg" />
      </div>
      <div className={`nav-elements ${showNavbar && 'active'}`}>
        <NavLink className={'nav-link'} to="/">
          Inicio
        </NavLink>
        <NavLink className={'nav-link'} to="/Cursos">
          Cursos
        </NavLink>
        <NavLink className={'nav-link'} to="/Instructores">
          Instructores
        </NavLink>
        <NavLink className={'nav-link'} to="/Contactos">
          Contactos
        </NavLink>


        <Registrarme />
        <IniciarSeccion />


      </div>

    </nav>
  );
};

export default Navbar;