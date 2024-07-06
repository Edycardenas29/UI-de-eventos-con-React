import { useRoutes, BrowserRouter } from 'react-router-dom';
import Home from '../Home';
import Bodas from '../Bodas';
import Bautisos from '../Bautisos';
import Quinceaños from '../Quinceaños';
import Grados from '../Grados';
import Conferencias from '../Conferencias';
import Eventos from '../Eventos';
import Calendario from '../Calendario';
import Invitaciones from '../Invitaciones';
import Perfil from '../Perfil';
import Configuracion from '../Configuracion';
import NotFound from '../NotFound';
import Login from '../Login';
import Navbar from '../../Components/Navbar'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes ([
    { path: '/', element: <Home />},
    { path: '/Bodas', element: <Bodas />},
    { path: '/Bautisos', element: <Bautisos />},
    { path: '/Quinceaños', element: <Quinceaños />},
    { path: '/Grados', element: <Grados />},
    { path: '/Conferencias', element: <Conferencias />},
    { path: '/Eventos', element: <Eventos />},
    { path: '/Calendario', element: <Calendario />},
    { path: '/Invitaciones', element: <Invitaciones />},
    { path: '/Perfil', element: <Perfil />},
    { path: '/Configuracion', element: <Configuracion />},
    { path: '/*', element: <NotFound />},
    { path: '/Login', element: <Login />},
  ])
  return routes
}

const App = () => {
  return (
    <BrowserRouter>
    <AppRoutes />
    <Navbar />
    </BrowserRouter>
  )
}

export default App