import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';



function App() {
  const [count, setCount] = useState(0)

  const routing = createBrowserRouter(
    [
      {
        element: <Layout />, path: "", children: [
          { index: true, element: <Home /> },
          { path: "about", element: <About /> },
          { path: "contact", element: <Contact /> },
          { path: "portfolio", element: <Portfolio /> },
          { path: "*", element: <NotFound /> }
        ]
      }
    ])
  return (
    <>
     <RouterProvider router={routing} />
    </>
  )
}

export default App
