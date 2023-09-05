import React from 'react';
import PropTypes from 'prop-types';
import './Corporativos.css';
export default function CardCorporativos({ imagen, descripcion }) {
  return (
    <div className='general-corpo'>
      <img className='imagen-corporativo' src={imagen} alt={descripcion} />
      <h3 className='texto-corporativo'>{descripcion}</h3>
    </div>
  )
}

CardCorporativos.propTypes = {
  descripcion: PropTypes.string.isRequired,
}