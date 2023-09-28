import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './loginPage.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { Store } from "./store.js";
import { Provider } from 'react-redux';
import LoginPage from "./loginPage.jsx"
import DashBoard from './components/dashBoard.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    children: [
      {
        path: "dashboard",
        element: <DashBoard />,
      },
    ],
  },
  {
    path: "/",
    element: <DashBoard />,
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
