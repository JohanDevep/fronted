import React from 'react'
import "./footer.css";

function Footer() {
  return (

    <footer className="footer">
      
      <div className="bienestar">
        <div className="logodesarrollo">
          <img
            className="logo-blanco"
            alt="Logo blanco"
            src="https://generation-sessions.s3.amazonaws.com/e8ea0a83929f6409af7b718bce2f46a6/img/logo-blanco-1-1@2x.png"
          />
          <p className="impacto-de-nuestras">
            Impacto de nuestras actuaciones en el bienestar y el desarrollo&nbsp;&nbsp;de las mujeres con las que
            trabajamos
          </p>
        </div>
        <div className="Cursos">
          <div className="text-cursos-contactanos">Cursos populares</div>
          <div className="Marketing-digital">
            <div className="text-digital">Marketing Digital</div>
            <p className="text-instalacion">Instalación y configuración de redes de internet.</p>
            <div className="text-instalacion">Desarrollo de páginas web</div>
            <div className="text-instalacion">Desarrollo de aplicaciones móviles.</div>
            <p className="text-instalacion">Instalación de cámaras de seguridad.</p>
          </div>
        </div>
        <div className="Cursos">
          <div className="text-cursos-contactanos">Contáctanos</div>
          <p className="direcci-n-AV-a">
            <span className="span">Dirección: </span>
            <span>AV 26 # 26 A - 05 B/Las Granjas</span>
          </p>
          <p className="email-fundasoftmiss">
            <span className="span">Email:</span>
            <span> fundasoftmiss@gmail.com</span>
          </p>
          <p className="div-2">
            <span className="span">Teléfono: </span>
            <span>3186929471</span>
          </p>
          <div className="div-2">www.fundasoftmiss.com</div>
          <img className="img" alt="Frame" src="https://generation-sessions.s3.amazonaws.com/e8ea0a83929f6409af7b718bce2f46a6/img/frame-16-1.svg" />
        </div>
      </div>
      <div className='contenedor'>
        <div className="FundaSoft">
          <span className="text-wrapper">&copy;2023 FundaSoff Miss.</span>
          <span className="text-wrapper">Todos los derechos reservados</span>
        </div>
        <div className="politicas">
          <div className="text-wrapper-2">Políticas de Cookies</div>
          <div className="text-wrapper-2">Términos y condiciones</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;