import {Routes, Route} from "react-router-dom";
import {useState} from "react";

import logo from "./logo.svg";
import "./App.css";
import SignupPage from "./components/Pages/SignupPage";
import LoginPage from "./components/Pages/LoginPage";
import HomePage from "./components/Pages/HomePage";
import { hasAuthenticated } from "./services/AuthApi";
import Auth from "./Context/Auth";
import AuthenticatedRoute from "./components/Auth/AuthenticatedRoute";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());
  return (
    <>
    <Auth.Provider  value={{isAuthenticated}} >
    <Routes>
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/" element={<LoginPage />} />

      <AuthenticatedRoute path="/home" element={<HomePage />} />
    </Routes>

    </Auth.Provider>
   
    </>
  );
}

export default App;
