

import "./contacto.css";
export const Contacto = () => {
  return (
    <div className="contacto">
      <div className="container-contacto">
        <p className="texto-contactenos">
          Contáctenos
        </p>
      </div>
      <div className="general-contacto">
        <div className="escribanos-contacto">
          <p className="texto-pongase">
            Póngase en contacto
          </p>
          <div className="texto-mensaje-ahora">
            Escribanos ahora un mensaje
          </div>
          <p className="para-nosotros">
            Para nosotros es importante conocerte y resolver cualquier duda que tengas escríbenos.
          </p>
          <button className="boton-mensaje">Enviar Mensaje</button>
          <img className="contacto-cell" alt="Happy bunch chat" src="images/contacto-cell.png" />
        </div>
        <div className="visitanos-llamanos">
          <div className="Cuadro-textos">
            <div className="general-textos">
              <div className="texto-general-titulos">
                Llámanos ahora
              </div>
              <img
                className="logo-llamanos"
                alt="Teenyicons phone"
                src="https://generation-sessions.s3.amazonaws.com/2363c9a68c90c2e3a61d5db2a6c61a2d/img/teenyicons-phone-solid-1.svg"
              />
            </div>
            <div className="texto-interno-general">
              +573186929471
            </div>
          </div>
          <div className="Cuadro-textos">
            <div className="general-textos">
              <div className="texto-general-titulos">
                Visítanos
              </div>
              <img
                className="logo-visitanos"
                alt="Teenyicons phone"
                src="https://generation-sessions.s3.amazonaws.com/2363c9a68c90c2e3a61d5db2a6c61a2d/img/teenyicons-phone-solid.svg"
              />
            </div>
            <p className="texto-interno-general">
              AV 26 # 26 A - 05 B/Las Granjas
            </p>
          </div>
        </div>
      </div>
      <div className="iframe">
        <iframe className="iframe-ubi"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d249.03477277653073!2d-75.29097036930523!3d2.942946825116622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1693348170790!5m2!1ses-419!2sco">
        </iframe>
      </div>
    </div>

  )
}