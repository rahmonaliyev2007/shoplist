
import { useEffect } from 'react'
import './App.css'
import { Home } from 'lucide-react'
import toast from 'react-hot-toast'

function App() {

  const handle =()=>{
  toast.success('Ishladi')

  }

  useEffect(()=>{
  },[])
  return (
   <div className=' text-red-500'>Slaom <Home/>
   <button onClick={handle}>Click</button> </div>
  )
}

export default App
