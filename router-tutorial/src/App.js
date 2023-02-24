import React from "react";
import { Route, Routes, Link, useParams, useLocation } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import NavigateSample from "./pages/NavigateSample";
import Profile from "./pages/Profile";
import Profiles from "./pages/Profiles";
import WithRouterSample from "./pages/WithRouterSample";

const App = () => {
  let { username } = useParams();
  const location = useLocation();

  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/about"> About </Link>
          </li>
          <li>
            <Link to={"/profiles"}>profiles</Link>
          </li>
          <li>
            <Link to="/profile/woojin"> woojin's Profile </Link>
          </li>
          <li>
            <Link to="/profile/velopert"> velopert's Profile </Link>
          </li>
          <li>
            <Link to="/navigate"> naviagate </Link>
          </li>
          <li>
            <Link to="/with-router-sample"> with-router-sample </Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/profiles/*" element={<Profiles />} />
        <Route path="/navigate" element={<NavigateSample />} />
        <Route path="/with-router-sample" element={<WithRouterSample />} />
        <Route
          path="*"
          element={
            <div>
              <h1>404 not found</h1>
              <p>{location.pathname}</p>
            </div>
          }
        />
      </Routes>
    </>
  );
};

export default App;
