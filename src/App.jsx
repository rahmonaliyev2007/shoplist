
import { useEffect } from 'react'
import './App.css'
import { Home } from 'lucide-react'
import useSearchUser from './service/searchUsers';

function App() {

  const {data:groups} = useSearchUser('ali', 'users');
  console.log(groups);
  

  useEffect(()=>{
  },[])
  return (
   <div className=' text-red-500'>Slaom <Home/>
   {/* <button onClick={handle}>Click</button>  */}
   </div>
  )
}

export default App
