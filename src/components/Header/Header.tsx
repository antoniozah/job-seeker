import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
    authStatus: any;
    authUser: any;
}

const Header = (props: HeaderProps) => {
    let navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        props.authStatus(false);
        props.authUser({});
        navigate('/login');
    };
    return (
        <header className="header">
            <h1 className="header__logo">kariera.gr</h1>
            <ul>
                <li>
                    <Link to="/login" onClick={handleLogout}>
                        logout
                    </Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;
