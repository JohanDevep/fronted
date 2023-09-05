import React from 'react';
import PropTypes from 'prop-types';

export default function CardFacturacion({ imagen, descripcion }) {
  return (
    <div className="facturation__item">
      <h3 className="texto-factu">{descripcion}</h3>
    </div>
  );
}

CardFacturacion.propTypes = {

  descripcion: PropTypes.string.isRequired,
};