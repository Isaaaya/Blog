import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ArticlePage from './pages/ArticlePage';
import TagPage from './pages/TagPage';
import Header from './components/common/Header';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/:slug",
        element: <ArticlePage />
      },
      {
        path: "/blog/:tag",
        element: <TagPage />
      }
    ]
  }
]);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>  
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

