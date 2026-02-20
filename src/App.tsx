import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout.component";
import Contact from "./pages/Contact.component";
import About from "./pages/About.component";
import Projects from "./pages/Projects.component";

function App() {
  const rutas = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path:"/projects",
          element:<Projects/>
        }
      ],
    },
  ]);

  return <RouterProvider router={rutas} />;
}

export default App;
