import { useRef } from "react";
import ValidateButton from "../../UI/Buttons/ValidateButton";


const LoginComponent = (props) => {
    const enteredEmail = useRef("");
    const enteredPassword = useRef("");

      async function signinHandler() {
        const user = {
          email: enteredEmail.current.value,
          password: enteredPassword.current.value,
        };
        const response = await fetch("http://127.0.0.1:8000/users/signin", {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        console.log(data);

        enteredEmail.current.value = "";
        enteredPassword.current.value = "";
      }

  return (
    <div className="h-1/4 w-3/5 flex flex-col items-center justify-between">
      <input
        ref={enteredEmail}
        className="w-2/4 max-w-lg min-w-[80%] h-10 p-3 rounded-full text-gray-300 focus:border-blue-400 focus:text-gray-500"
        placeholder="Email"
      />
      <input
        ref={enteredPassword}
        className="w-2/4 max-w-lg min-w-[80%] h-10 p-3 rounded-full text-gray-300 focus:border-blue-400 focus:text-gray-500"
        placeholder="Mot de passe"
        type="password"
      />
      <ValidateButton
        type="submit"
        label="Se connecter"
        onClickHandler={signinHandler}
      />
      <a className="text-blue-500" href="/">
        Mot de passe perdu ?
      </a>
      <a className="text-blue-500" href="/signup">
        Vous n'avez pas de compte ? S'incrire.
      </a>
    </div>
  );
};

export default LoginComponent;
