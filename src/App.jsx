import './App.css';
import { useContext } from 'react';
import { AppContext } from './contexts/AppContext';
import {Routes, Route} from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Hero from './pages/auth/Hero';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
 const {state:{user}} = useContext(AppContext)

 if(!user){
  return(
    <>
    <ToastContainer theme='colored' position='top-center'/>
    <Routes>
      <Route path='/' element={<Hero/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Register/>} />
    </Routes>
    </>
  )
 }

  return (
    <>
     <ToastContainer theme='colored' position='top-center'/>
     <Routes>
      <Route path='/' element={<RootLayout/>}>

      </Route>
     </Routes>
    </>
  )
}


export default App
