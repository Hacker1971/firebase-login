import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AughProvider from './provider/AughProvider';
import Blog from './components/Blog';
import Privectroute from './routers/Privectroute';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children : [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/register',
        element: <Register></Register>
      },
      {
        path:'/blog',
        element: <Privectroute> <Blog></Blog> </Privectroute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AughProvider>
     <RouterProvider router={router} />
     </AughProvider>
  </React.StrictMode>,
)
