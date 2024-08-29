import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashbord from "./pages/dashboard/Dasbhoard.jsx";
import Connexion from "./pages/connexion/Connexion.jsx";
import Inscription from "./pages/inscription/Inscription.jsx";
import User from "./pages/user/User.jsx";
import Entrant from "./pages/entrant/Entrant.jsx";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Sortant from "./pages/sortant/Sortant.jsx";
import Archivage from "./pages/archivage/Archivage.jsx";
import Parametre from "./pages/parametre/Parametre.jsx";

const queryClient = new QueryClient();
// Creation de l'objet browserRouter

const router = createBrowserRouter([
  {
    path: "/",
    element: <Connexion />,
  },
  {
    path: "/dashbord",
    element: <Dashbord />,
  },
  {
    path: "/inscription",
    element: <Inscription />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/entrant",
    element: <Entrant />,
  },
  {
    path: "/sortant",
    element: <Sortant />,
  },
  {
    path: "/archivage",
    element: <Archivage />,
  },
  {
    path: "/parametre",
    element: <Parametre />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <RouterProvider router={router}></RouterProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
