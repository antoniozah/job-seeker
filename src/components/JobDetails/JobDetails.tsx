import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './JobDetails.css';
import JobCardItem from '../JobCardItem/JobCardItem';
import { RootState } from '../../app/store';
import { toggleModal } from '../../features/modalStatusSlice';

interface JobDetailsProps {
    hasCloseBtn?: boolean;
}

const JobDetails = (props: JobDetailsProps) => {
    const job = useSelector(
        (state: RootState) => state.jobDetails.fetchedJobDetails
    );

    const modalStatus = useSelector(
        (state: RootState) => state.modalStatus.value
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
        <>
            <div className="modal__header">
                <h3 className="modal__title">Apply for the Job</h3>
                {!props.hasCloseBtn && (
                    <span className="modal__close" onClick={handleCloseModal}>
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
                <button className="btn btn--big" onClick={handleApplicationBtn}>
                    Send Application
                </button>
            </div>
        </>
    );
};

export default JobDetails;
