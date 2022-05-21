import {useRef, useState, useEffect} from 'react';

const Login = () => {
    const userRef = useRef();
    const errref = userRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        userRef.current.focus();
    }, []);


    return (
        <div></div>
    );
};

export default Login;