
import { useEffect } from 'react'
import './App.css'
import { Home, Route } from 'lucide-react'
import useSearchUser from './service/searchUsers';
import { BrowserRouter, Routes } from 'react-router';

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' >
        <Route index path='/login'/>
        <Route path='/register'/>
      </Route>
      <Route path='/dashboard'>
        <Route path='/profile'/>
        <Route path='/group/:groupId'/>
      </Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
