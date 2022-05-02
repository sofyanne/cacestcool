import {useRef, useState} from "react";
import ValidateButton from "../../UI/Buttons/ValidateButton";

const SignupComponent = (props) => {
    const [enteredFirstname, setEnteredFirstname] = useState("");
    const [enteredLastname, setEnteredLastname] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");

    const firstnameInputChangeHandler = (event) => {
        setEnteredFirstname(event.target.value)
    };
    const lastnameInputChangeHandler = (event) => {
        setEnteredLastname(event.target.value)
    };
    const emailInputChangeHandler = (event) => {
        setEnteredEmail(event.target.value)
    };
    const passwordInputChangeHandler = (event) => {
        setEnteredPassword(event.target.value)
    };

    async function signupHandler() {
        const user = {
            firstname: enteredFirstname,
            lastname: enteredLastname,
            email: enteredEmail,
            password: enteredPassword,
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
                placeholder="Prénom"
                value={enteredFirstname}
                onChange={firstnameInputChangeHandler}

            />
            <input
                className="w-2/4 max-w-lg min-w-[80%] h-10 p-3 rounded-full text-gray-300 focus:border-blue-400 focus:text-gray-500"
                placeholder="Nom"
                value={enteredLastname}
                onChange={lastnameInputChangeHandler}
            />
            <input
                className="w-2/4 max-w-lg min-w-[80%] h-10 p-3 rounded-full text-gray-300 focus:border-blue-400 focus:text-gray-500"
                placeholder="Email"
                value={enteredEmail}
                onChange={emailInputChangeHandler}
            />
            <input
                className="w-2/4 max-w-lg min-w-[80%] h-10 p-3 rounded-full text-gray-300 focus:border-blue-400 focus:text-gray-500"
                placeholder="Mot de passe"
                type="password"
                value={enteredPassword}
                onChange={passwordInputChangeHandler}
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
