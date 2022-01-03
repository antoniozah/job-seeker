import React from 'react';
import { IJobDetails, IJobList } from '../../interfaces';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import JobCardItem from '../JobCardItem/JobCardItem';
import './JobDetModal.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../features/modalStatusSlice';
import { RootState } from '../../app/store';

interface JobDetModalProps {
    hasError: boolean;
    errorMessage: { message?: string; hasBtn?: boolean } | null;
}

const JobDetModal = (props: JobDetModalProps) => {
    const job = useSelector(
        (state: RootState) => state.jobDetails.fetchedJobDetails
    );
    const dispatch = useDispatch();

    const handleCloseModal = () => {
        dispatch(toggleModal());
    };

    return (
        <div className="modal">
            <div
                className={`modal__inner ${
                    props.hasError ? 'modal__inner--error' : ''
                }`}
            >
                {!props.errorMessage?.hasBtn && (
                    <span className="modal__close" onClick={handleCloseModal}>
                        X
                    </span>
                )}
                {props.hasError ? (
                    <ErrorMessage errorMessage={props.errorMessage} />
                ) : (
                    <>
                        <h3>Apply for the Job</h3>
                        <div className="modal__card-item">
                            <JobCardItem jobData={job} />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default JobDetModal;
