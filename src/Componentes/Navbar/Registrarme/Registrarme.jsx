import React, { useState, useRef } from "react";
import "./Registrarme.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Modal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };
    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    const navigate = useNavigate()
    const [user, setUser] = useState({

        nombre: "",
        apellido: "",
        telefono: "",
        correo: "",
        password: "",
    })

    const resetUser = () => {
        setUser({
            nombre: '',
            apellido: '',
            telefono: '',
            correo: '',
            password: '',
        });
    };
    const { nombre, apellido, telefono, correo, password } = user

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/api/auth/register", user)
            .then(data => {
                console.log(data);
                toggleModal()
                resetUser()
                alert('Registrado con exito.')

            })
            .catch(data => {
                console.log(data);
                alert('Error al Insertar.')
            })
        navigate("/cursos")
    }

    return (
        <>
            <button onClick={toggleModal} className="btn-modal-registrarme">
                Registrarme
            </button>
            {modal && (
                <div className="modal-registrarme">
                    <div onClick={toggleModal} className="overlay-registrarme"></div>
                    <div className="modal-content-registrarme">
                        <h2 className="registro-color">Registro</h2>
                        <img className="power-moves-standing" alt="Power moves standing" src="images/power moves standing.png" />
                        <form className="form" onSubmit={(e) => onSubmit(e)}>
                            <label>
                                Nombre
                                <input className="campo-class" placeholder="Nombre" type={"text"} name="nombre"
                                    value={nombre}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </label>
                            <label>
                                Apellido
                                <input className="campo-class" placeholder="Apellido" type="text" name={"apellido"}
                                    value={apellido}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </label>
                            <label >
                                Telefono
                                <input className="campo-class" placeholder="Telefono" type="text" name={"telefono"}
                                    value={telefono}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </label>
                            <label>
                                Correo
                                <input className="campo-class" placeholder="Correo" type="text" name="correo"
                                    value={correo}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </label>
                            <label>
                                Password
                                <input className="campo-class" placeholder="Contraseña" type={"text"} name="password"
                                    value={password}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </label>

                            <button type="submit" className="close-modal-registrarme" onClick={toggleModal}>
                                X
                            </button>
                            <button type="submit" className="modal-content-registrarse">
                                Registrarme
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}