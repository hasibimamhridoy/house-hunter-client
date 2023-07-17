import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainRoutes from './routes/MainRoutes/MainRoutes.jsx'
import { AuthProvider } from './authProvider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider><RouterProvider router={MainRoutes}></RouterProvider></AuthProvider>
  </React.StrictMode>,
)
