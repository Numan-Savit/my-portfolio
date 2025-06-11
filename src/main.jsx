import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './Components/ContextApi/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode >
     <div className='dark:bg-gray-900 dark:text-white '>
         <ThemeProvider>
          <RouterProvider router={router} />
     </ThemeProvider>
     </div>
  </StrictMode>,
)
