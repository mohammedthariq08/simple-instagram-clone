import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Viewstory from "./Viewstory.jsx";
import Profile from './Profile1.jsx';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/story/:id/:total',
    element:<Viewstory/>
  },
  {
    path:'/profile',
    element:<Profile/>
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/> 
)
