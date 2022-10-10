import { useState, useEffect } from 'react'

const Register = () => {
  return (
    <div className="flex flex-col items-center text-black">
      <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500 text-4xl font-bold">
        Crie uma conta
      </h1>
      <p className="text-gray-400 mb-4">E compartilhe suas histórias!</p>
      <form className="w-2/5 flex flex-col justify-center bg-gray-100 rounded-md p-6">
        <label className="flex flex-col mb-2">
          <span className="font-bold">Nome:</span>
          <input
            className="box-border p-1 border-b-2 bg-transparent outline-none"
            type="text"
            name="displayName"
            required
            placeholder="nome de usuário"
          />
        </label>
        <label className="flex flex-col mb-2">
          <span className="font-bold">E-mail:</span>
          <input
            className="box-border p-1 border-b-2 bg-transparent outline-none"
            type="email"
            name="email"
            required
            placeholder="e-mail do usuário"
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
          />
        </label>
        <label className="flex flex-col mb-2">
          <span className="font-bold">Confirmação de senha:</span>
          <input
            className="box-border p-1 border-b-2 bg-transparent outline-none"
            type="password"
            name="password"
            required
            placeholder="confirme sua senha"
          />
        </label>
        <button className="bg-gradient-to-r from-blue-500 to-violet-500 rounded-md border-none p-1 text-white font-bold text-lg hover:scale-105 duration-200">
          Cadastrar
        </button>
      </form>
    </div>
  )
}

export default Register
