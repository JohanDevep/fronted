import Proposito from './Proposito/Proposito';
import Facturacion from './Facturacion/Facturacion';
import QuienesSomos from './QuienesSomos/QuienesSomos';
import Capacitaciones from './Capacitaciones/Capacitaciones';
import Mision from './Mision-Vision/Mision-Vision';
import Corporativo from './Corporativo/Corporativo';
import Aprendizaje from './Aprendizaje/Aprendizaje';
import Beneficio from './Beneficio/Beneficio';
import './Home.css';

export const Home = () => {
  return (
    <div className="inicio">
      <div className="container">
        <img className="logo-inicio" alt="Image" src="images/image1.png" />
        <p className="promovemos">
          Promovemos la empleabilidad y emprendimiento,
          <br /> generando nuevas oportunidades.
        </p>
      </div>
      <Capacitaciones />
      <QuienesSomos />
      <Proposito />
      <Mision />
      <Aprendizaje />
      <Corporativo />
      <Beneficio />
      <Facturacion />
    </div >
  )
}