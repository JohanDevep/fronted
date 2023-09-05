import React from 'react'
import './beneficios.css';

function Beneficio() {
  return (
    <div className="beneficios">
    <div className="titulo-beneficios">Beneficios de contratación</div>
    <div className="beneficio-general-todo">
      <div className="tres-circulos">
        <div className="beneficio-general">
          <img
            className="circulo-logo"
            alt="Ellipse outline"
            src="images/circulo.png"
          />
          <div className="texto-beneficio">
            Sin costos de liquidación.
          </div>
        </div>
        <div className="beneficio-general">
          <img
            className="circulo-logo"
            alt="Ellipse outline"
            src="images/circulo.png"
          />
          <p className="texto-beneficio">
            Rendimiento en el proyecto en procesos de empalme de
            desarrolladores.
          </p>
        </div>
        <div className="beneficio-general">
          <img
            className="circulo-logo"
            alt="Ellipse outline"
            src="images/circulo.png"
          />
          <p className="texto-beneficio">
            En caso de retrasos en el proyecto de desarrollo mayores a
            15 días, la fundación asume el 50% del salario del
            desarrollador.
          </p>
        </div>
      </div>
      <div className="cinco-circulos">
        <div className="beneficio-general">
          <img
            className="circulo-logo"
            alt="Ellipse outline"
            src="images/circulo.png"
          />
          <p className="texto-beneficio">
            Bonos colaborativos al personal en caso de recibir solo el
            50% del salario pactado inicialmente.
          </p>
        </div>
        <div className="beneficio-general">
          <img
            className="circulo-logo"
            alt="Ellipse outline"
            src="images/circulo.png"
          />
          <div className="texto-beneficio">
            Sin costo de incapacidades
          </div>
        </div>
        <div className="beneficio-general">
          <img
            className="circulo-logo"
            alt="Ellipse outline"
            src="images/circulo.png"
          />
          <div className="texto-beneficio">
            Sin costos de contratación.
          </div>
        </div>
        <div className="beneficio-general">
          <img
            className="circulo-logo"
            alt="Ellipse outline"
            src="images/circulo.png"
          />
          <p className="texto-beneficio">
            Sin costo de exámenes médicos.
          </p>
        </div>
        <div className="beneficio-general">
          <img
            className="circulo-logo"
            alt="Ellipse outline"
            src="images/circulo.png"
          />
          <p className="texto-beneficio">
            Reemplazo de personal de forma inmediata en caso de
            accidente o reportarse enfermo.
          </p>
        </div>
      </div>
    </div>
  </div >
  )
}

export default Beneficio