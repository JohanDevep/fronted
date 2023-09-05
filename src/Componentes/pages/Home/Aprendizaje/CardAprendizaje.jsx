import React from 'react';
import PropTypes from 'prop-types';


export default function CardAprendizaje({ imagen, descripcion }) {
  return (
    <div>
      <img className="tamaño-imagen" src={imagen} alt={descripcion} />
      <h3>{descripcion}</h3>
    </div>
  )
}

CardAprendizaje.propTypes = {
  descripcion: PropTypes.string.isRequired,
}