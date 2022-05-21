import {useRef, useState, useEffect} from 'react';
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate} from "react-router-dom";
import axios from "../../../api/axios";

const LOGIN_URL = '/users/signin';

const Login = () => {
    const {setAuth} = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    // const from = location.state.from.pathname || "/";

    const emailRef = useRef();
    const errRef = useRef();

    const [email, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        emailRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [email, password]);

    const formSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL, JSON.stringify({email, password}), {
                headers: {'Content-Type': 'application/json'}, withCredentials: true
            });
            const accessToken = response.data.token;

            setAuth({ email, password, accessToken});

            setUser('');
            setPassword('');
            navigate("/home", { replace: true })

        } catch (err) {
            if (!err.response.status) {
                setErrMsg('Le serveur ne répond pas !');
            }
            else if (err.response.status === 400) {
                setErrMsg('L\'email ou le mot de passe sont manquants');
            }
            else if (err.response.status === 401) {
                setErrMsg('L\'email ou le mot de passe sont invalides');
            } else {
                setErrMsg('Echec de l\'authentification !');
            }
            errRef.current.focus();

        }


    };


    return (<section className="h-1/4 w-3/5 flex flex-col items-center justify-between"
                                onSubmit={formSubmitHandler}>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <form action="">
                <label htmlFor="email">Email:</label>
                <input
                    className="w-2/4 max-w-lg min-w-[80%] h-10 p-3 rounded-full text-gray-300 focus:border-blue-400 focus:text-gray-500"
                    type="email"
                    name="email"
                    id="email"
                    ref={emailRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={email}
                    required
                />
                <label htmlFor="password">Password:</label>
                <input
                    className="w-2/4 max-w-lg min-w-[80%] h-10 p-3 rounded-full text-gray-300 focus:border-blue-400 focus:text-gray-500"
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                />

                <button
                    className="min-w-[60%] h-10 rounded-full bg-blue-500 text-white font-semibold text-sm active:animate-ping"
                >
                    Se connecter
                </button>

            </form>

            {/*<Link className="text-blue-500" to="/">*/}
            {/*    Mot de passe perdu ?*/}
            {/*</Link>*/}
            {/*<Link className="text-blue-500" to="/signup">*/}
            {/*    Vous n'avez pas de compte ? S'inscrire.*/}
            {/*</Link>*/}
        </section>
    );
};

export default Login;