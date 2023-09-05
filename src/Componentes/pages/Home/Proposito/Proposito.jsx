import React from 'react'
import Proposito2 from './DatosProposito';
import Proposito1 from './DatosProposito1';
import './proposito.css';
import CardPropositos from './CardProposito';
function Proposito() {
    return (
        <div className="proposito">
            <div className="titulo-proposito">
                <div className="proposito-apoyar">CON EL PROPOSITO DE APOYAR</div>
                <div className="aquellas-personas">
                    aquellas personas y microempresas en las siguientes
                </div>
                <div className="propositowapper">
                    {Proposito2.map((datos) => (
                        <CardPropositos
                            key={datos.id}
                            titulo={datos.titulo}
                            descripcion={datos.descripcion}
                            imagen={datos.imagen}
                        />
                    ))}
                </div>
            </div>
            <img className="imagen-linea" alt="Image" src="images/imagen111.png" />
            <div className="propositowapper">
                {Proposito1.map((datos) => (
                    <CardPropositos
                        key={datos.id}
                        titulo={datos.titulo}
                        descripcion={datos.descripcion}
                        imagen={datos.imagen}
                    />
                ))}
            </div>
        </div>
    )
}
export default Proposito