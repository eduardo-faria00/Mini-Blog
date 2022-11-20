import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'
// hooks
import { useState, useEffect } from 'react'
import { useAuth } from './hooks/useAuth'
// components
import Footer from './components/Footer'
import NavBar from './components/NavBar'
// pages
import About from './pages/About'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
//context
import { AuthProvider } from './context/AuthContext'
import { onAuthStateChanged } from 'firebase/auth'
import CreatePost from './pages/CreatePost'
import DashBoard from './pages/DashBoard'

export default function App() {
  const [user, setUser] = useState(undefined)
  const { auth } = useAuth()

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if (loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="home" />} />
            <Route path="/register" element={!user ? <Register /> : <Navigate to="home" />} />
            <Route path="/posts/create" element={user ? <CreatePost /> : <Navigate to="login" />} />
            <Route path="/dashboard" element={user ? <DashBoard /> : <Navigate to="login" />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}
