
import './Mision.css';
function MisionVision() {
    return (
        <div className="MisionVision">
            <div className="mision">
                <img
                    className="allura-feedback"
                    alt="Allura feedback"
                    src="images/mision.png"
                />
                <div className="text-mision">MISIÓN</div>
                <p className="nuestra-mision">
                    Nuestra misión es capacitar a toda aquella población vulnerable por
                    distintos factores de vida, para que puedan lograr sus propósito a
                    través de la tecnología y el desarrollo de software.
                </p>
            </div>
            <div className="vision">
                <img
                    className="vision-imagen"
                    alt="Allura feedback"
                    src="images/frame-34715_cleanup.png"
                />
                <div className="text-vision">VISIÓN</div>
                <p className="organizacion">
                    Ser al 2027 una organización reconocida a nivel nacional por generar
                    oportunidades a las mujeres madres cabeza de hogar, vulnerables,
                    afrocolombianas, indígenas, de bajos recursos o discapacitadas
                    radicadas en Colombia
                </p>
            </div>
        </div>
    )
}
export default MisionVision