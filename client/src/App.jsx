import { SignedIn, SignedOut, useAuth } from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SignInPage from "./Components/SignInPage.jsx";
import SignUpPage from "./Components/SignUpPage.jsx";
import Home from "./Components/Home.jsx";
import Ecocalc from "./Components/Ecocalc/Ecocalc.jsx";
import Results from "./Components/Ecocalc/Results.jsx";
import Feed from "./Components/EcoConnect/Feed.jsx";
import Donate from "./Components/Donate.jsx";
import { Page1 } from "./Components/EcoCsrp/Page1.jsx";
import { ProjectPop } from "./Components/ProjectPop.jsx";
import Create from "./Components/Context.jsx";
const App = () => {
  const { login } = useAuth();
  useEffect(() => {
    if (login) {
      window.location.href = "/";
    }
  }, []);
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
    </div>
  );
};

export default App;
