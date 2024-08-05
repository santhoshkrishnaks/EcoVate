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
        <Route path="/" element={<Home />} />
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
