import { Routes, Route } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import Login from "./components/Auth/Login/Login";
import Layout from "./components/Layout";
import HomePage from "./components/Pages/HomePage";
import SignupPage from "./components/Pages/SignupPage";

function App() {

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="login" element={<Login/>}/>
            <Route path="signup" element={<SignupPage/>}/>
            <Route element={<RequireAuth />}>
                <Route path="home" element={<HomePage/>}/>
            </Route>
        </Route>
      </Routes>
  );
}

export default App;
