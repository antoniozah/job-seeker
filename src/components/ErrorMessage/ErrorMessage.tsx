import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ErrorMessage.css';

interface ErrorMessageProps {
    errorMessage: { message?: string; hasBtn?: boolean } | null;
}

const ErrorMessage = (props: ErrorMessageProps) => {
    const navigate = useNavigate();
    const handleBtnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        localStorage.clear();
        navigate('/login');
    };

    return (
        <div className="error-message">
            <h4>{props.errorMessage?.message}</h4>
            {props.errorMessage?.hasBtn && (
                <button className="btn" onClick={handleBtnClick}>
                    Login
                </button>
            )}
        </div>
    );
};

export default ErrorMessage;
