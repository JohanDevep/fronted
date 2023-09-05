import React from 'react';
import PropTypes from 'prop-types';

export default function CardPersonas({ imagen, descripcion, nombre, ingeniero }) {
    return (
        <div className='personas-fondo'>
            <img className="tamaño-imagen-personas" src={imagen} alt={descripcion} />
            <h4 className='nombre'>{nombre}</h4>
            <h2 className='ingeniero'>{ingeniero}</h2>
            <h3 className='descripcion'>{descripcion}</h3>
        </div>
    )
}

CardPersonas.propTypes = {
    ingeniero: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
}