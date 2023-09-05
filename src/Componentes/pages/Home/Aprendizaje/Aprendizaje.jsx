import React from 'react'
import CardAprendizaje from './CardAprendizaje';
import DatosAprendizaje from './DatosAprendizaje';
import './Aprendizaje.css';

function Aprendizaje() {
    return (
        <div className="aprendizaje">
            <div className="titulo-aprendizaje">
                <div className="nuestro-aprendizaje">NUESTRO APRENDIZAJE</div>
                <div className="aprendizajewapper">
                    {DatosAprendizaje.map((datos) => (
                        <CardAprendizaje
                            key={datos.id}
                            descripcion={datos.descripcion}
                            imagen={datos.imagen}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Aprendizaje