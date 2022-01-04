import React from 'react';
import { IJobDetails, IJobList } from '../../interfaces';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import './JobDetModal.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import JobDetails from '../JobDetails/JobDetails';

interface JobDetModalProps {}

const JobDetModal = (props: JobDetModalProps) => {
    const hasError = useSelector(
        (state: RootState) => state.modalHandling.modalError.hasError
    );

    const errorMessage = useSelector(
        (state: RootState) => state.modalHandling.modalError.errorMessage
    );

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
                    <JobDetails hasCloseBtn={errorMessage.hasBtn} />
                )}
            </div>
        </div>
    );
};

export default JobDetModal;
