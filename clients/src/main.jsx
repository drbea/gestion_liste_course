import React from "react";
import ReactDOM from "react-dom/client";
import App from "./loginPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Store } from "./store.js";
import { Provider } from "react-redux";
import LoginPage from "./loginPage.jsx";
import Admin from "./routes/admin.jsx";
import ManageLists from "./components/gestionListe.jsx";
import RegisterPage from "./registerPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    children: [
      {
        path: "/components",
        element: <registr />,
      },
    ],
  },
  /*   { path: "./loginPage", element: <LoginPage /> }, */
  {
    path: "/admin",
    element: <Admin />,
    children: [
      { path: "./loginPage", element: <LoginPage /> },
      {
        path: "./registerPage",
        element: <RegisterPage />,
      },
      { path: "./gestionList", element: <ManageLists /> },
    ],
  },
  {
    path: "/admin/registerPage",
    element: <RegisterPage />,
  },
  { path: "/admin/gestionList", element: <ManageLists /> },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
