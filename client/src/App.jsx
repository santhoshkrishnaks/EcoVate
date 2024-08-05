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
import Form from './Components/EcoCsrp/EcoCorpForm.jsx'
const App = () => {
  const [showForm, setShowForm] = useState(false);
  return (
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
  );
};

export default App;
