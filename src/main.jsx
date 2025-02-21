 import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Route/Route.jsx'
import { Authcontext } from './Components/Authprovider/Authprovider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Authcontext>
  <RouterProvider router={router}></RouterProvider>
  </Authcontext>
  </StrictMode>,
)
