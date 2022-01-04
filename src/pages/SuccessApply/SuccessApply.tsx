import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './SuccessApply.css';
import tickIcon from '../../images/tick.svg';

interface Props {}

const SuccessApply = (props: Props) => {
    let { title } = useParams();
    const navigate = useNavigate();

    const handleReturnButton = () => {
        navigate('/');
    };
    return (
        <div className="success-page">
            <div className="container">
                <div className="success-page__wrapper">
                    <figure>
                        <img src={tickIcon} alt="success icon" />
                    </figure>
                    <div className="success-page__message">
                        <p>Application successfull</p>
                        <p>
                            <strong>{title}</strong>
                        </p>
                    </div>
                    <div className="success-page__button">
                        <button
                            className="btn btn--big"
                            onClick={handleReturnButton}
                        >
                            Back to job list
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessApply;
