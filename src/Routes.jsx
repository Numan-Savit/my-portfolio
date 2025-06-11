
import Main from "./Components/LayOut/Main";
import Home from "./Components/Home/Home";

import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Contact from "./Components/Navbar/Contact";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,

      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>
        }
      ]
    },
   
  ]);

  export default router