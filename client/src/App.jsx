import { SignedIn, SignedOut, useAuth } from "@clerk/clerk-react";
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SignInPage from "./Components/SignInPage.jsx";
import SignUpPage from "./Components/SignUpPage.jsx";
import Home from "./Components/Home.jsx";
import EcoConnect from "./Components/EcoConnect/Feed.jsx";
import Nav from "./Components/Nav.jsx";
import EcoNav from "./Components/EcoConnect/EcoNav.jsx";
import { Page1 } from "./Components/EcoCsrp/Page1.jsx";
import { ProjectPop } from "./Components/ProjectPop.jsx";
import About from "./Components/About.jsx";
import Feed from "./Components/EcoConnect/Feed.jsx";
const App = () => {
  const { login } = useAuth();
  useEffect(() => {
    if (login) {
      window.location.href = "/";
    }
  }, []);
  return (
    <Router>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/Eco" element={<Feed />} />

        <Route
          path="/signin"
          element={
            <SignedOut>
              <SignInPage />
            </SignedOut>
          }
        />
        <Route
          path="/signup"
          element={
            <SignedOut>
              <SignUpPage />
            </SignedOut>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
