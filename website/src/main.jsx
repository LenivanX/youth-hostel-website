import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/home/Home'
import Tariff from './components/tariff/Tariff'
import Rules from './components/rules/Rules'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Gallery from './components/gallery/Gallery'

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='tariff' element={<Tariff />} />
      <Route path='gallery' element={<Gallery />} />
      <Route path='rules' element={<Rules />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
