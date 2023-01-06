import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import Details from "./Components/Detail";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path:"/details/:id",
    element :<Details/>
  }
]);

function App() {
  return (
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  );
}

export default App;
