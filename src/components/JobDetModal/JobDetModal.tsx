import React from 'react';
import { IJobDetails, IJobList } from '../../interfaces';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import JobCardItem from '../JobCardItem/JobCardItem';
import './JobDetModal.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../features/modalStatusSlice';
import { RootState } from '../../app/store';
import { useNavigate } from 'react-router-dom';

interface JobDetModalProps {}

const JobDetModal = (props: JobDetModalProps) => {
    const job = useSelector(
        (state: RootState) => state.jobDetails.fetchedJobDetails
    );

    const modalStatus = useSelector(
        (state: RootState) => state.modalStatus.value
    );

    const hasError = useSelector(
        (state: RootState) => state.modalHandling.modalError.hasError
    );

    const errorMessage = useSelector(
        (state: RootState) => state.modalHandling.modalError.errorMessage
    );

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCloseModal = () => {
        dispatch(toggleModal());
        document.body.classList.remove('modal-open');
    };

    const handleApplicationBtn = () => {
        navigate(`/success-application/${job.title}?${job.id}`);
        if (modalStatus) {
            dispatch(toggleModal());
            document.body.classList.remove('modal-open');
        }
    };

    return (
        <div className="modal">
            <div
                className={`modal__inner ${
                    hasError ? 'modal__inner--error' : ''
                }`}
            >
                {hasError ? (
                    <ErrorMessage errorMessage={errorMessage} />
                ) : (
                    <>
                        <div className="modal__header">
                            <h3 className="modal__title">Apply for the Job</h3>
                            {!errorMessage?.hasBtn && (
                                <span
                                    className="modal__close"
                                    onClick={handleCloseModal}
                                >
                                    X
                                </span>
                            )}
                        </div>

                        <div className="modal__card-item">
                            <JobCardItem jobData={job} />
                        </div>
                        <div
                            className="modal__description"
                            dangerouslySetInnerHTML={{
                                __html: `${job.description}`,
                            }}
                        />
                        <div className="modal__button">
                            <button
                                className="btn btn--big"
                                onClick={handleApplicationBtn}
                            >
                                Send Application
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default JobDetModal;
