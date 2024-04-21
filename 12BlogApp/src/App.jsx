import {useDispatch} from 'react-redux'
import { useEffect, useState } from 'react';
import './App.css'
import authService from "./appwrite/auth"
import { login, logout } from './store/authSlice'
import { Header, Footer, Login,Signup } from './components'
import {Outlet} from 'react-router-dom'


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser().then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }

    }).finally(()=>setLoading(false))
  },[])

  return !loading ? <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className='w-full block'>
      <Header />
      <main>
        Todo:<Outlet /> 
      </main>
      
      <Footer/>
    </div>
  </div> : <img src="https://media.istockphoto.com/id/1302436578/video/loading-circle-icon-animation-on-black-background-4k-video-loopable-preloader.jpg?s=640x640&k=20&c=WiK1w7O6VvTD7Xu7Ov8DdzGY2lX2bSlJDxw4r4DHzfI=" alt="Loading is still happening" />;
}

export default App
