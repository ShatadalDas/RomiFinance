import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/Home.tsx'
import './index.scss'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Buy, Dashboard, Earn, Ecosystem, pages, Referrals } from './pages'


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
        path: pages[4],
        element: <Buy />
      },
      {
        path: pages[5],
        element: <Referrals />
      },
      {
        path: pages[6],
        element: <Ecosystem />
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
