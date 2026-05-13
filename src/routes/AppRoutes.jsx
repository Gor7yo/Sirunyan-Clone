import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { NotFound } from "../pages/NotFound/NotFound";
import { About } from "../pages/About/Aboute";
import { Blog } from "../pages/Blog/Blog";
import { Services } from "../pages/Services/Services";
import { Portfolio } from "../pages/Portfolio/Portfolio";

const routes = [
  { path: '/home', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/blog', element: <Blog /> },
  { path: '/services', element: <Services /> },
  { path: '/portfolio', element: <Portfolio /> },
  { path: "*", element: <NotFound /> }
];

export const AppRoutes = () => {


  return (
    <Routes>
      <Route path="/" element={<Navigate to={'/home'} />} />
      {routes.map(route => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};
