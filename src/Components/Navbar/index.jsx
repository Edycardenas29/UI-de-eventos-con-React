import { NavLink } from 'react-router-dom'

const Navbar = () => {
     const activeStyle = 'underline underline-offset-4'
    

    return (
      <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
        <ul className='flex items-center gap-3'>
            <li className='font-semibold text-lg'>
                <NavLink to='/'>
                    EventEase
                </NavLink>
            </li>
            <li>
                <NavLink to='/' className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
                    Todo
                </NavLink>
            </li>
            <li>
                <NavLink to='/Bodas' className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
                  Bodas
                </NavLink>
            </li>
            <li>
                <NavLink to='/bautisos' className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
                 Bautisos
                </NavLink>
            </li>
            <li>
                <NavLink to='/quinceaños' className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
                Quinceaños
                </NavLink>
            </li>
            <li>
                <NavLink to='/grados' className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
                Grados
                </NavLink>
            </li>
            <li>
                <NavLink to='/conferencias' className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
                Conferencias
                </NavLink>
            </li>
        </ul>
        <ul className='flex items-center gap-3'>
            <li className='text-black/60'>
                nc279797@gmail.com
            </li>
            <li>
                <NavLink to='/Eventos' className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
                    Eventos
                </NavLink>
            </li>
            <li>
                <NavLink to='/Calendario' className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
                  Calendario
                </NavLink>
            </li>
            <li>
                <NavLink to='/Invitaciones' className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
                 Invitaciones
                </NavLink>
            </li>
            <li>
                <NavLink to='/Configuracion' className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
                Configuracion
                </NavLink>
            </li>
            <li>
                <NavLink to='/Login' className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
                Login
                </NavLink>
            </li>
            <li>
                <NavLink to='/Perfil' className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
                Perfil
                </NavLink>
            </li>
        </ul>
      </nav>
    )
}

export default Navbar