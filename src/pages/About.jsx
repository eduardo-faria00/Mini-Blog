import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="flex flex-col items-center text-center gap-3">
      <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500 text-4xl font-bold mb-1">
        Sobre o MiniBlog
      </h2>
      <p className="text-gray-500">
        Este projeto consiste em um mini blog desenvolivdo utilizado React no front-end e firebase
        no back-end
      </p>
    </div>
  )
}

export default About
