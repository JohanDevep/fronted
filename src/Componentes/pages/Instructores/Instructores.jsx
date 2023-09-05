import CardPersonas from "./Personas/CardPersonas";
import datos from "./Personas/DatosPersonas";
import datos1 from "./Personas/DatosPersonas1";
import "./instructores.css"

export const Intructores = () => {
  return (
    <div className="instructores">
      <div className="container-intructores">
        <div className="nuestros-instructores">Nuestros Instructores</div>
        <p className="texto-descubre">
          Descubre el poder de la enseñanza transformadora con nuestro talentosos instructores. Con su experiencia y
          pasión, te guiará hacia el éxito, desbloqueando tu máximo potencial y llevándote más allá de tus límites.
          ¡Prepárate para un viaje de aprendizaje inspirador y resultados sorprendentes!
        </p>
      </div>
      <div className="titulo-personas">
        <div className="wrapperpersonas">
          {datos.map((dato) => (
            <CardPersonas
              key={dato.id}
              imagen={dato.imagen}
              nombre={dato.nombre}
              ingeniero={dato.ingeniero}
              descripcion={dato.descripcion}
            />
          ))}
        </div>
        <div className="wrapperpersonas">
          {datos1.map((dato) => (
            <CardPersonas
              key={dato.id}
              imagen={dato.imagen}
              nombre={dato.nombre}
              ingeniero={dato.ingeniero}
              descripcion={dato.descripcion}
            />
          ))}
        </div>
      </div>
    </div>
  )
}