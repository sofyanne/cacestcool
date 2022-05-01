import { useRef } from "react";
import ValidateButton from "../../UI/Buttons/ValidateButton";

const SignupComponent = (props) => {
  const enteredFirstname = useRef("");
  const enteredLastname = useRef("");
  const enteredEmail = useRef("");
  const enteredPassword = useRef("");

  async function signupHandler() {
    const user = {
      firstname: enteredFirstname.current.value,
      lastname: enteredLastname.current.value,
      email: enteredEmail.current.value,
      password: enteredPassword.current.value,
      avatar: "un avatar",
    };
    const response = await fetch("http://127.0.0.1:8000/users/signup", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="h-1/4 w-3/5 flex flex-col items-center justify-between">
      <input
        className="w-2/4 max-w-lg min-w-[80%] h-10 p-3 rounded-full text-gray-300 focus:border-blue-400 focus:text-gray-500"
        ref={enteredFirstname}
        placeholder="Prénom"
      />
      <input
        className="w-2/4 max-w-lg min-w-[80%] h-10 p-3 rounded-full text-gray-300 focus:border-blue-400 focus:text-gray-500"
        ref={enteredEmail}
        placeholder="Nom"
      />
      <input
        className="w-2/4 max-w-lg min-w-[80%] h-10 p-3 rounded-full text-gray-300 focus:border-blue-400 focus:text-gray-500"
        ref={enteredEmail}
        placeholder="Email"
      />
      <input
        className="w-2/4 max-w-lg min-w-[80%] h-10 p-3 rounded-full text-gray-300 focus:border-blue-400 focus:text-gray-500"
        ref={enteredPassword}
        placeholder="Mot de passe"
        type="password"
      />
      <ValidateButton
        type="submit"
        label="S'enregistrer"
        onClickHandler={signupHandler}
      />
      <a className="text-blue-500" href="/">
        Vous avez déja un compte ?
      </a>
    </div>
  );
};

export default SignupComponent;
