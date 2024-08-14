import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import NewsPage from "./Components/Admin/NewsPage";
import VolunteerSubmissions from "./Components/Admin/VolunteerSubmissions";
import EcovisionSubmissions from "./Components/Admin/EcovisionSubmissions";
import UserProfilePage from "./Components/p";
// import Home from "./Components/Home";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProfilePage/>
   
  </React.StrictMode>
);
