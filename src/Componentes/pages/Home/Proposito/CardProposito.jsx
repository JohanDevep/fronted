import React from 'react';
import PropTypes from 'prop-types';
import "./proposito.css"

export default function CardPropositos({ imagen, descripcion, titulo }) {
  return (
    <div>
      <div className='contenedor-proposito'>
      <h3 className="titulo-numeros" >{titulo}</h3>
      <h3>{descripcion}</h3>
      <img className="tamaño-imagen" src={imagen} alt={descripcion} />
      </div>
    </div>
  )
}

CardPropositos.propTypes = {
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
}