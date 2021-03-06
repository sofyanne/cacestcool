import LoginComponent from "../Auth/Login/LoginComponent";
import PostCard from "../UI/Cards/PostCard";
import StatusBarComponent from "../UI/SideBar/StatusBarComponent";

const LoginPage = (props) => {
  return (
    <section className="h-full w-full flex flex-col items-center bg-slate-100">
      <img className="w-1/5" src="logo.svg" alt="logo" />
      <LoginComponent />
    </section>
  );
};

export default LoginPage;
