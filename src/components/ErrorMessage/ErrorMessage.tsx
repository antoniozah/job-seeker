import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../app/store';
import { toggleModal } from '../../features/modalStatusSlice';
import './ErrorMessage.css';

interface ErrorMessageProps {
    errorMessage: { message?: string; hasBtn?: boolean } | null;
}

const ErrorMessage = (props: ErrorMessageProps) => {
    const modalStatus = useSelector(
        (state: RootState) => state.modalStatus.value
    );
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleBtnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        localStorage.clear();
        if (modalStatus) {
            dispatch(toggleModal());
            document.body.classList.remove('modal-open');
        }
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
