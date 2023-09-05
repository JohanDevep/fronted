
import './Capacitaciones.css';
import datos from './DatosCapacitaciones';
import CardCapacitaciones from './CardCapacitaciones';
function Capacitaciones() {
    return (
        <div className="capacitaciones">
        <div className="titulo-capacitaciones">
          <div className="nuestras-capacitaciones">NUESTRAS CAPACITACIONES</div>
          <div className="wrapper">
            {datos.map((dato) => (
              <CardCapacitaciones
                key={dato.id}
                imagen={dato.imagen}
                descripcion={dato.descripcion}
              />
            ))}
          </div>
        </div>
      </div>
    );
}
export default Capacitaciones