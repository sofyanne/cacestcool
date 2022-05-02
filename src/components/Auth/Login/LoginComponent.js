import {useState} from "react";
import {Link} from "react-router-dom";
import ValidateButton from "../../UI/Buttons/ValidateButton";


const LoginComponent = (props) => {
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");

    const inputEmailChangeHandler = (event) => {

        setEnteredEmail(event.target.value);

    }
    const inputPasswordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);

    }

    async function signinHandler() {
        const user = {
            email: enteredEmail, password: enteredPassword,
        };
        const response = await fetch("http://127.0.0.1:8000/users/signin", {
            method: "POST", body: JSON.stringify(user), headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await response.json();
        console.log(data);

        setEnteredEmail("");
        setEnteredPassword("");
    }

    return (<div className="h-1/4 w-3/5 flex flex-col items-center justify-between">
        <input
            className="w-2/4 max-w-lg min-w-[80%] h-10 p-3 rounded-full text-gray-300 focus:border-blue-400 focus:text-gray-500"
            placeholder="Email"
            onChange={inputEmailChangeHandler}
            value={enteredEmail}
        />
        <input
            className="w-2/4 max-w-lg min-w-[80%] h-10 p-3 rounded-full text-gray-300 focus:border-blue-400 focus:text-gray-500"
            placeholder="Mot de passe"
            type="password"
            onChange={inputPasswordChangeHandler}
            value={enteredPassword}
        />
        <ValidateButton
            type="submit"
            label="Se connecter"
            onClickHandler={signinHandler}
        />
        <Link className="text-blue-500" to="/">
            Mot de passe perdu ?
        </Link>
        <Link className="text-blue-500" to="/signup">
            Vous n'avez pas de compte ? S'inscrire.
        </Link>
    </div>);
};

export default LoginComponent;
