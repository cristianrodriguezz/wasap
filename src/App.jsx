import { useState } from 'react'
import './App.css'
import SelectCodeArea from './components/SelectCodeArea'
import TextEditor from './components/TextEditor'
import Error from './components/Error'
import Wasap from './components/icons/Wasap'
import GitHub from './components/icons/GitHub'

function App() {
  const [error,setError] = useState('')

  const handleSubmit = async (e) => {

    e.preventDefault()

    const formData = new FormData(e.target)
    
    const number = formData.get('wasap')
    const message = formData.get('message')
    const code = formData.get('code')

    if(!number) return setError("Debes ingresar un número de teléfono")

    setError("")
    const send = `https://api.whatsapp.com/send?phone=${code}${number}&text=${message}`

    window.open(send)

  }



  return (
    <>
    <div className='grid place-content-center h-dvh font-figtree sm:bg-orange-100 relative my-2'>
      <div className='sm:px-10 sm:py-5 p-2 bg-white rounded-xl sm:shadow-as'>
        <div className='flex flex-col items-center justify-center mb-5'>
          <Wasap/>
          <h2 className='sm:text-3xl justify-center text-lg text-center text-green-500 font-bold'>Enviar WhatsApp sin agendar</h2>
        </div>
        <form action='submit' id='forum' onSubmit={handleSubmit} className='flex flex-col gap-2'>
          <label htmlFor="wasap" className='sm:text-lg font-bold text-gray-600'>Ingresá el número</label>
          <div className='flex gap-2'> 
            <SelectCodeArea />
            <input type="number" name='wasap'id='wasap' className='w-full bg-slate-200 rounded-md placeholder:p-4 pl-4' placeholder='99 999 999'/>
          </div>
          <h2 className='font-bold sm:text-lg  text-gray-600'>Mensaje</h2>
          <TextEditor/>
          <button className='w-full h-10 bg-green-600 rounded-lg text-white text-lg font-medium mb-2'>Enviar mensaje</button>
        </form>
        <div className='h-5'>
          {error && <Error error={error}/>}
        </div>
      </div>
      <footer className='m-auto my-3'><a href='https://github.com/cristianrodriguezz'><GitHub/></a></footer>
    </div>
    </>
  )
}

export default App
