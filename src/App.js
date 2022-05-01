import logo from './logo.svg';
import './App.css';
import LoginPage from './components/Pages/LoginPage';
import SignupPage from './components/Pages/SignupPage';
import SignupComponent from './components/Auth/Signup/SignupComponent';
import LoginComponent from './components/Auth/Login/LoginComponent';

function App() {
  return (
      <SignupPage><LoginComponent/></SignupPage>
  );
}

export default App;
