import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './routes/routes.jsx'
import { RouterProvider } from "react-router";
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster
      position="bottom-right"
      reverseOrder={false}
    />
  </StrictMode>,

)
