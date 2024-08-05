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
<<<<<<< HEAD
import EcoConnect from "./Components/EcoConnect/Feed.jsx";
import Nav from "./Components/Nav.jsx";
import EcoNav from "./Components/EcoConnect/EcoNav.jsx";
import { Page1 } from "./Components/EcoCsrp/Page1.jsx";
import { ProjectPop } from "./Components/ProjectPop.jsx";
import About from "./Components/About.jsx";
import Feed from "./Components/EcoConnect/Feed.jsx";
=======
import Ecocalc from "./Components/Ecocalc/Ecocalc.jsx";
import Results from "./Components/Ecocalc/Results.jsx";
import Feed from "./Components/EcoConnect/Feed.jsx";
import Donate from "./Components/Donate.jsx";
import { Page1 } from "./Components/EcoCsrp/Page1.jsx";
import { ProjectPop } from "./Components/ProjectPop.jsx";
import Create from "./Components/Context.jsx";
import Form from './Components/EcoCsrp/EcoCorpForm.jsx'
>>>>>>> c9be7c39595b6650e5fe651403e8ccdfd26d057f
const App = () => {
  const [showForm, setShowForm] = useState(false);
  return (
<<<<<<< HEAD
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
=======
    <div>
      <Create.Provider value={{ showForm,setShowForm }}>
        <Router>
          <Routes>
            <Route path="/Ecoconnect" element={<Feed />} />
            <Route path="/Ecovision" element={<ProjectPop />} />
            <Route path="/Ecoconnect" element={<Feed />} />
            <Route path="/Ecocorp" element={<Page1 />} />
            <Route path="/Ecocalc" element={<Ecocalc />} />
            <Route path="/result" element={<Results />} />
            <Route path="/Ecofund" element={<Donate />} />
            <Route path="/form" element={<Form/>} />
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignedOut><SignInPage /></SignedOut>}/>
            <Route path="/signup" element={ <SignedOut><SignUpPage /> </SignedOut>}/>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </Create.Provider>
    </div>
>>>>>>> c9be7c39595b6650e5fe651403e8ccdfd26d057f
  );
};

export default App;
