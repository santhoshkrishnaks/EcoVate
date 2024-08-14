import { SignedIn, SignedOut, useAuth } from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SignInPage from "./Components/Login/SignInPage.jsx";
import SignUpPage from "./Components/Login/SignUpPage.jsx";
import Home from "./Components/Home/Home.jsx";
import Ecocalc from "./Components/Ecocalc/Ecocalc.jsx";
import Results from "./Components/Ecocalc/Results.jsx";
import Feed from "./Components/EcoConnect/Feed.jsx";
import Donate from "./Components/EcoFund/Donate.jsx";
import { Page1 } from "./Components/EcoCorp/Page1.jsx";
import { ProjectPop } from "./Components/EcoVision/ProjectPop.jsx";
import Create from "./Components/Context.jsx";
import Form from "./Components/EcoCorp/EcoCorpForm.jsx";
import UserProfilePage from "./Components/Profile.jsx";
const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [load, setLoad] = useState(false);
  return (
    <div>
      <Create.Provider value={{ showForm, setShowForm, load, setLoad }}>
        <Router>
          <Routes>
            <Route path="/Ecoconnect" element={<Feed />} />
            <Route path="/Ecovision" element={<ProjectPop />} />
            <Route path="/Ecoconnect" element={<Feed />} />
            <Route path="/Ecocorp" element={<Page1 />} />
            <Route path="/Ecocalc" element={<Ecocalc />} />
            <Route path="/result" element={<Results />} />
            <Route path="/Ecofund" element={<Donate />} />
            <Route path="/Profile" element={<UserProfilePage />} />
            <Route path="/form" element={<Form />} />
            {/* <Route path="/profile" element={<ProfilePage/>} /> */}
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
                  <SignUpPage />{" "}
                </SignedOut>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </Create.Provider>
    </div>
  );
};

export default App;
