import { NavLink } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useAuthValue } from '../context/AuthContext'

const CustomLink = ({ to, children }) => (
  <NavLink
    className={({ isActive }) =>
      isActive ? 'font-semibold bg-blue-700 p-2 duration-300' : 'font-semibold p-2'
    }
    to={to}
    end
  >
    {children}
  </NavLink>
)

const NavBar = () => {
  const { user } = useAuthValue()
  const { logout } = useAuth()

  return (
    <nav className="flex justify-between items-center py-4 px-3 border-b-gray-800 border-b-2">
      <h1 className="text-2xl font-bold">
        Mini'<span className="text-blue-500">Blog</span>
      </h1>
      <ul className="flex gap-3 items-center delay-300">
        <li>
          <CustomLink to="/">Home</CustomLink>
        </li>
        {!user && (
          <>
            <li>
              <CustomLink to="login">Entrar</CustomLink>
            </li>
            <li>
              <CustomLink to="register">Cadastrar</CustomLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <CustomLink to="/posts/create">Novo Post</CustomLink>
            </li>
            <li>
              <CustomLink to="/dashboard">Dashboard</CustomLink>
            </li>
          </>
        )}
        <li>
          <CustomLink to="/about">Sobre</CustomLink>
        </li>
        {user && (
          <li>
            <button
              onClick={logout}
              className="font-semibold text-lg py-1.5 px-3 hover:text-red-700 duration-300"
            >
              Sair
            </button>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default NavBar
