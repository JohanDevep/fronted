import React from 'react'
import {
    facturacion1,
    facturacion2,
} from './DatosFacturacion';
import CardFacturacion from './CardFacturacion';
import './Facturacion.css';
function Facturacion() {
    return (
        <div className="facturacion">
            <div className="nuestras-facturacion">FACTURACION</div>
            <img className="img-factu" alt="Ellipse outline" src="images/factu.png"/>
            <div className="facturacionwrapper">
                <CardFacturacion descripcion={facturacion1[0].descripcion} />
                <div className="facturation__items">
                    {facturacion2.map((item) => (
                        <CardFacturacion
                            key={item.descripcion}
                            descripcion={item.descripcion}
                        />
                    ))}
                </div>
                <CardFacturacion descripcion={facturacion1[1].descripcion} />
            </div>
        </div>
    )
}
export default Facturacion