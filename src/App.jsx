import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Fetch from './fetch'
import Swal from 'sweetalert2'

function App() {

  const [count, setCount] = useState(0)


  const sumar = () => {

    setCount(count + 1)

  }
  const restar = () => {
    setCount(count - 1)
  }
  const reiniciar = () => {
    setCount(0)
  }

  const alerta = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-start',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'warning',
      title: 'Signed in successfully'
    })
  }

  const [texto, setTexto] = useState('')

  const captTexto = (e) => {

    setTexto(e.target.value)
    console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Enviando datos')

  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>{count}</h2>

      <div className="card">
        <button onClick={sumar}>
          Sumar + 1
        </button>
        <button onClick={restar}>
          Restar
        </button>
        <button onClick={reiniciar}>
          Reiniciar
        </button>

      </div>

      <div>
        <button onClick={alerta}>Alert</button>
      </div>

      <div>
        <input onChange={captTexto} />
      </div>

      <form onSubmit={handleSubmit} >
        <input type="text" />

        <button>Enviar</button>
      </form>

      <Fetch />

    </div>
  )
}

export default App
