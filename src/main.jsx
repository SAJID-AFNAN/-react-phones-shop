import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Pages/Root/Root.jsx'
import Home from './Pages/Home/Home.jsx'
import Favorites from './Pages/Favorites/Favorites.jsx'
import Login from './Pages/Login/Login.jsx'
import SignUp from './Pages/SignUp/SignUp.jsx'
import PhonesDetails from './Components/PhonesDetails/PhonesDetails.jsx'

const myCreateRouter = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('phones.json')
      },
      {
        path: "/favorites",
        element: <Favorites></Favorites>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path : "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/phones/:id",
        element: <PhonesDetails></PhonesDetails>,
        loader: () => fetch('phones.json')
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCreateRouter}></RouterProvider>
  </React.StrictMode>,
)
