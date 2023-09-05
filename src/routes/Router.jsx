import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { Contacto, Intructores, Cursos, Home } from '../Componentes/pages/index';
import { Root } from '../Componentes/Root/Root';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Root />} path="/">
        <Route element={<Home />} index />
        <Route element={<Contacto />} path="/contactos" />
        <Route element={<Intructores />} path="/instructores" />
        <Route element={<Cursos />} path="/cursos" />
      </Route>
    </>
  )
);