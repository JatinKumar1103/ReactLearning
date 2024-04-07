import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Layout from './Layout.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Header from './Components/Header.jsx';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import Github, { githubLoader } from './Components/Github.jsx';
import User from './Components/User.jsx';

const router = createBrowserRouter(createRoutesFromElements(
<Route path='/' element={<Layout/>}>
    <Route path='' element={<Home />} />
    <Route path = 'about' element={<About/>}/>
    <Route path='contact' element={<Contact />} />
    <Route
      path='github'
      element={<Github />}
      loader={githubLoader}
    /> 
    <Route path ='user/:userid' element={<User/>}/>;
    
</Route>
))


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     
    <RouterProvider router={router} />
  </React.StrictMode>,
    )
  
