import {Routes, Route} from "react-router-dom";
import {useState} from "react";

import logo from "./logo.svg";
import "./App.css";
import SignupPage from "./components/Pages/SignupPage";
import LoginPage from "./components/Pages/LoginPage";
import HomePage from "./components/Pages/HomePage";
import { hasAuthenticated } from "./services/AuthApi";
import AuthProvider from "./Context/AuthProvider";
import Login from "./components/Auth/Login/Login";

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated());
  // return (
  //   <>
  //   <AuthProvider.Provider  value={{isAuthenticated}} >
  //   <Routes>
  //     <Route path="/signup" element={<SignupPage />} />
  //     <Route path="/" element={<LoginPage />} />
  //
  //     <Route path="/home" element={<HomePage />} />
  //   </Routes>
  //
  //   </AuthProvider.Provider>
  //
  //   </>
  // );

  return (<><Login /></>);
}

export default App;
