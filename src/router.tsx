import {
  createBrowserRouter,
  Outlet,
} from "react-router-dom";
import Home from './pages/Home';
import Sharing from './pages/Sharing';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Header from './components/custom/Header';
import Footer from './components/custom/Footer';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<>
      <Header />
      <Outlet />
      <Footer />
    </>),
    children: [
      { path: "/", element: <Home />, },
      { path: "/sharing", element: <Sharing />, },
      { path: "/contact", element: <Contact />, },
    ]
  },
  {
    path: "*",
    element: <NotFound />,
  }
]);

export default router;

