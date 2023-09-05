import React from 'react'
import Corporativos from './DatosCorporativos';
import CardCorporativos from './CardCorporativos';
import "./Corporativos.css"
function Corporativo() {
    return (
        <div className="corporativos">
            <div className="titulo-corporativos">
                <div className="nuestras-corporativos">VALORES CORPORATIVOS</div>
                <div className="corporativoswrapper">
                    {Corporativos.map((dato) => (
                        <CardCorporativos
                            key={dato.id}
                            imagen={dato.imagen}
                            descripcion={dato.descripcion}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Corporativo

