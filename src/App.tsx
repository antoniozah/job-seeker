import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import { AuthUser } from './interfaces';
import JobBoard from './pages/JobBoard/JobBoard';
import Login from './pages/Login/Login';

function App() {
    const [isAuth, setIsAuth] = useState<Partial<string | boolean | null>>(
        localStorage.getItem('auth') ? localStorage.getItem('auth') : false
    );
    const [user, setUser] = useState<Partial<AuthUser>>({});

    const onAuthStatusChange = (status: string | boolean) => {
        setIsAuth(status);
    };

    const onAuthSetUser = (user: AuthUser) => {
        setUser(user);
        console.log(user);
    };

    return (
        <div className="App">
            <Header authStatus={onAuthStatusChange} authUser={onAuthSetUser} />
            <Routes>
                {
                    <Route
                        path="/"
                        element={
                            isAuth ? (
                                <JobBoard auth={isAuth} authUser={user} />
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    />
                }
                <Route
                    path="/login"
                    element={
                        <Login
                            authStatus={onAuthStatusChange}
                            authUser={onAuthSetUser}
                        />
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
