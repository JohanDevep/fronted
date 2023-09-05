import React from 'react';
import PropTypes from 'prop-types';

export default function CardCapacitaciones({ imagen, descripcion }) {
  return (
    <div>
      <img src={imagen} alt={descripcion} />
      <h3>{descripcion}</h3>
    </div>
  )
}

CardCapacitaciones.propTypes = {
  descripcion: PropTypes.string.isRequired,
}