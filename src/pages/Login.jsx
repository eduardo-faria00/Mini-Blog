import { useState, useEffect } from 'react'
import { useAuth } from '../hooks/useAuth'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { login, error: authError, loading } = useAuth()

  const handleSubmit = async (event) => {
    event.preventDefault()

    setError('')

    const user = {
      email,
      password,
    }

    const res = await login(user)
    console.log(res)
  }

  useEffect(() => {
    if (authError) {
      setError(authError)
    }
  }, [authError])

  return (
    <div className="flex flex-col items-center text-black">
      <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500 text-4xl font-bold">
        Entrar
      </h1>
      <p className="text-gray-400 mb-4">Faça login para realizar novas postagens!</p>
      <form
        className="xl:w-1/3 lg:w-2/5 md:w-3/6 w-4/5 flex flex-col justify-center bg-gray-100 rounded-md p-6"
        onSubmit={handleSubmit}
      >
        <label className="flex flex-col mb-2">
          <span className="font-bold">E-mail:</span>
          <input
            className="box-border p-1 border-b-2 bg-transparent outline-none"
            type="email"
            name="email"
            required
            placeholder="e-mail do usuário"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="flex flex-col mb-2">
          <span className="font-bold">Senha:</span>
          <input
            className="box-border p-1 border-b-2 bg-transparent outline-none"
            type="password"
            name="password"
            required
            placeholder="insira sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {!loading && (
          <button className="bg-gradient-to-r from-blue-500 to-violet-500 rounded-md border-none p-1 text-white font-bold text-lg hover:scale-105 duration-200">
            Entrar
          </button>
        )}
        {loading && (
          <button
            className="bg-gradient-to-r from-blue-500 to-violet-500 rounded-md border-none p-1 text-white font-bold text-lg hover:scale-105 duration-200"
            disabled
          >
            Aguarde...
          </button>
        )}
        {error && (
          <p
            className="p-1 bg-red-500 text-white text-center
        mt-2 rounded-md"
          >
            {error}
          </p>
        )}
      </form>
    </div>
  )
}

export default Login
