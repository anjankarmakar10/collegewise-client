import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Profile from "../pages/Profile/Profile";
import NotFound from "../pages/Error/NotFound";
import Colleges from "../pages/Colleges/Colleges";
import CollegeDetails from "../pages/CollageDetails/CollegeDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/colleges",
        element: <Colleges />,
      },
      {
        path: "/colleges/:id",
        element: <CollegeDetails />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

export default routes;
