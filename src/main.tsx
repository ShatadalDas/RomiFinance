import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/Home.tsx'
import './index.scss'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Dashboard, Earn, pages } from './pages'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: pages[0],
        element: <Home />
      },
      {
        path: pages[1],
        element: <Dashboard />
      },
      {
        path: pages[3],
        element: <Earn />
      },
      {
        path: "/*",
        element: <Home/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
