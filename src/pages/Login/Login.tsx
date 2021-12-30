import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

interface LoginProps {
    authStatus: any;
    authUser: any;
}

const Login = (props: LoginProps) => {
    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');

    let navigate = useNavigate();

    const handleEmailChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setEmail(e.target.value);
    };

    const handlePassChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setPass(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            email: email,
            password: pass,
        };

        axios
            .post('https://ka-fe-assignment.azurewebsites.net/api/login', data)
            .then((response) => {
                console.log(response.data);
                localStorage.setItem('token', response.data.token.accessToken);
                localStorage.setItem('auth', 'true');
                props.authStatus(localStorage.getItem('auth'));
                props.authUser({
                    id: response.data.user.id,
                    firstName: response.data.user.fistName,
                    lastName: response.data.user.lastName,
                    email: response.data.user.email,
                });
                navigate('/');
            })
            .catch((error) => console.log(error));
    };
    return (
        <div className="loginpage">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form__group">
                    <label>Enter your email</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className="form__group">
                    <label>Enter your password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        value={pass}
                        onChange={handlePassChange}
                    />
                </div>
                <div className="form__button">
                    <input className="btn" type="submit" value="Login" />
                </div>
            </form>
        </div>
    );
};

export default Login;
