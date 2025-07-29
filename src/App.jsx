import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';


import Home from './Components/Home/Home';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import ContactUs from './components/CountactUs/CountactUs';






function App() {
  const [count, setCount] = useState(0)

  const routing = createBrowserRouter(
    [
      {
        element: <Layout />, path: "", children: [
          { index: "/", element: <Home /> },
          { path: "/about", element: <About/>},
          { path: "/contact", element: <ContactUs/> },
          { path: "/gallery", element: <Gallery/> },
        //{ path: "*", element: <NotFound /> }
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
