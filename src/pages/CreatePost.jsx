import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthValue } from '../context/AuthContext'

const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [body, setBody] = useState('')
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div className="flex flex-col items-center text-black">
      <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500 text-4xl font-bold mb-1">
        Criar Post
      </h2>
      <p className="text-gray-400 mb-1">
        Escreva sobre o que quiser e compartilhe seu conhecimento!
      </p>
      <form
        className="xl:w-1/3 lg:w-2/5 md:w-3/6 w-4/5 flex flex-col justify-center bg-gray-100 rounded-md p-6"
        onSubmit={handleSubmit}
      >
        <label className="flex flex-col mb-2">
          <span className="font-bold">Título:</span>
          <input
            className="box-border p-1 border-b-2 bg-transparent outline-none"
            type="text"
            name="title"
            required
            placeholder="Adicione um título criativo"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label className="flex flex-col mb-2">
          <span className="font-bold">URL da imagem:</span>
          <input
            className="box-border p-1 border-b-2 bg-transparent outline-none"
            type="text"
            name="image"
            required
            placeholder="Adicione uma imagem em seu post..."
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        <label className="flex flex-col mb-2">
          <span className="font-bold">Conteúdo:</span>
          <textarea
            className="box-border p-1 border-b-2 bg-transparent outline-none"
            name="body"
            required
            placeholder="Insira o conteúdo do seu post..."
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </label>
        <label className="flex flex-col mb-2">
          <span className="font-bold">Tags:</span>
          <input
            className="box-border p-1 border-b-2 bg-transparent outline-none"
            type="text"
            name="tags"
            required
            placeholder="Insira as tags separadas por vírgula"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>
        <button className="bg-gradient-to-r from-blue-500 to-violet-500 rounded-md border-none p-1 text-white font-bold text-lg hover:scale-105 duration-200 mt-2">
          Criar Post
        </button>
        {/* {!loading && (
          <button className="bg-gradient-to-r from-blue-500 to-violet-500 rounded-md border-none p-1 text-white font-bold text-lg hover:scale-105 duration-200">
            Cadastrar
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
        )} */}
      </form>
    </div>
  )
}

export default CreatePost
