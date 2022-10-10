import { NavLink } from 'react-router-dom'

const CustomLink = ({ to, children }) => (
  <NavLink
    className={({ isActive }) =>
      isActive ? 'font-semibold bg-blue-500 rounded-md p-1 duration-300' : 'font-semibold'
    }
    to={to}
    end
  >
    {children}
  </NavLink>
)

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-3 shadow-2xl shadow-gray-900">
      <h1 className="text-2xl font-bold">
        Mini'<span className="text-blue-500">Blog</span>
      </h1>
      <ul className="flex gap-3 items-center delay-300">
        <li>
          <CustomLink to="/">Home</CustomLink>
        </li>
        <li>
          <CustomLink to="login">Entrar</CustomLink>
        </li>
        <li>
          <CustomLink to="register">Cadastrar</CustomLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
