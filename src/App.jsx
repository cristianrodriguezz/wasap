import { useRef } from 'react';
import './App.css'

function App() {


  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    
    const number = formData.get('wasap')

    const send = `https://api.whatsapp.com/send?phone=${number}`

    window.location.replace(send)
  }

  return (
    <div className='container'>
      <h2>Chat de WhatsApp sin agendar</h2>
      <form action='submit' id='forum' onSubmit={handleSubmit} className=''>
        <label htmlFor="wasap">Ingresá el número: </label>
        <input type="number" name='wasap'id='wasap'/>
        <button>Enter</button>
      </form>
    </div>
  )
}

export default App
