import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Modal.css";

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

        nombre: '',
        password: '',
    })
    const { nombre, password } = user

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        if (!user.nombre || !user.password) {
            alert('Por favor, completa todos los campos.');
            return;
          }
        await axios.post("http://localhost:8080/api/auth/login", { nombre, password })
            .then(data => {
                const token = response.data.token;
                localStorage.setItem('token', token);
                console.log(data);
                toggleModal()
                alert('Bienvenido.')
            })
            .catch(data => {
                console.log(data);
                alert('Error.')
            })
        navigate("/cursos")
    }

    return (
        <>
            <button onClick={toggleModal} className="btn-modal">
                Iniciar sesión
            </button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className=""></div>
                    <div className="modal-content">
                        <div className="modal-content-sesion">
                            <h2 className="registro-color-sesion">Iniciar Sesion</h2>
                            <form className="form" onSubmit={(e) => onSubmit(e)}>
                                <label>
                                    Nombre
                                    <input
                                        className="campo-class"
                                        placeholder="Nombre"
                                        type={"text"}
                                        name="nombre"
                                        value={nombre}
                                        onChange={(e) => onInputChange(e)}
                                    />
                                </label>
                                <label>
                                    Password
                                    <input
                                        className="campo-class"
                                        placeholder="Contraseña"
                                        type={"text"}
                                        name="password"
                                        value={password}
                                        onChange={(e) => onInputChange(e)}
                                    />
                                </label>
                                <button type="submit" className="close-modal-registrarme" onClick={toggleModal}>
                                    X
                                </button>
                                <button type="submit" className="modal-content-sesion-button">
                                    Iniciar Sesion
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}