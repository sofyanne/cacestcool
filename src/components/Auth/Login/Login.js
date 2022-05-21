import {useRef, useState, useEffect} from 'react';
import {Link} from "react-router-dom";

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);

    const formSubmitHandler = async (e) => {
        e.preventDefault();

        setUser('');
        setPwd('');
        setSuccess(true);
    };


    return (
            <>
                { success ? (
                    <section>
                        <h1>You are logged in!</h1>
                    </section>
                ) : (
                    <section className="h-1/4 w-3/5 flex flex-col items-center justify-between" onSubmit={formSubmitHandler}>
                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                        <form action="">
                            <label htmlFor="username">Username:</label>
                            <input
                                className="w-2/4 max-w-lg min-w-[80%] h-10 p-3 rounded-full text-gray-300 focus:border-blue-400 focus:text-gray-500"
                                type="text"
                                name="username"
                                id="username"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                required
                            />
                            <label htmlFor="password">Password:</label>
                            <input
                                className="w-2/4 max-w-lg min-w-[80%] h-10 p-3 rounded-full text-gray-300 focus:border-blue-400 focus:text-gray-500"
                                type="password"
                                name="password"
                                id="password"
                                autoComplete="off"
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                required
                            />

                            <button
                                className="min-w-[60%] h-10 rounded-full bg-blue-500 text-white font-semibold text-sm active:animate-ping"
                            >
                                Se connecter</button>

                        </form>

                        <Link className="text-blue-500" to="/">
                            Mot de passe perdu ?
                        </Link>
                        <Link className="text-blue-500" to="/signup">
                            Vous n'avez pas de compte ? S'inscrire.
                        </Link>
                    </section>
                    )}
            </>
            );
};

export default Login;