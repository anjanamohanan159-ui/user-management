
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Userdetails from './pages/Userdetails'
import Pnf from './pages/Pnf'

function App() {

  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/user/:id' element={<Userdetails />}/>
      <Route path='*' element={<Pnf/>}/>
     </Routes>
    </>
  )
}

export default App
