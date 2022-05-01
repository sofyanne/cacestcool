import {Routes, Route} from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import SignupPage from "./components/Pages/SignupPage";
import LoginPage from "./components/Pages/LoginPage";
import Navigation from "./components/Navigation/NavigationComponent"

function App() {
  return (
    <>
    <Routes>
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/" element={<LoginPage />} />
    </Routes>
   
    </>
  );
}

export default App;
