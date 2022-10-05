import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import Home from './pages/home'
import Signup from './pages/signup'
import Login from './pages/login'

const routers = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
]);

export default function Router(){
  return (
    <RouterProvider router={routers} />
  )
}