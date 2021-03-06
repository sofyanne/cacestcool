import SignupComponent from "../Auth/Signup/SignupComponent";

const SignupPage = (props) => {

    return (
      <section className="h-full w-full flex flex-col items-center bg-slate-100">
        <img className="w-1/5" src="logo.svg" alt="logo" />
        <SignupComponent />
      </section>
    );
};

export default SignupPage;