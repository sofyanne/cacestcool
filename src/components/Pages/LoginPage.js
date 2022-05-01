const LoginPage = (props) => {
  return (
    <section className="h-full w-full flex flex-col items-center bg-slate-100">
      <img className="w-1/5" src="logo.svg" alt="logo" />
      {props.children}
    </section>
  );
};

export default LoginPage;
