import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { IJobDetails, IJobList } from '../../interfaces';
import JobCardItem from '../JobCardItem/JobCardItem';
import JobDetModal from '../JobDetModal/JobDetModal';
import './JobItem.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { toggleModal } from '../../features/modalStatusSlice';
import { setJobDetails } from '../../features/jobDetailsSlice';
import {
    ErrorHandler,
    setErrorMessage,
    clearErrorMessage,
} from '../../features/modalHandlingSlice';

interface JobItemProps {
    job: IJobList;
}

const JobItem = (props: JobItemProps) => {
    const dispatch = useDispatch();

    const config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
    };

    const getJobDetails = async (id: number) => {
        try {
            dispatch(clearErrorMessage());
            const response = await axios.get(
                `https://ka-fe-assignment.azurewebsites.net/api/job-posts/${id}`,
                config
            );

            if (response.status === 200) {
                console.log(response.data);
                dispatch(setJobDetails(response.data));
            } else {
                throw new Error();
            }
        } catch (error: any) {
            if (error.response.status === 401) {
                dispatch(ErrorHandler());
                dispatch(setErrorMessage('401'));
                // localStorage.clear();
                // navigate('/login');
            } else {
                dispatch(ErrorHandler());
                dispatch(setErrorMessage('404'));
            }
        }
    };

    const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        getJobDetails(props.job.id);
        dispatch(toggleModal());
        document.body.classList.add('modal-open');
    };

    // if (modalStatus)
    //     return <JobDetModal hasError={hasError} errorMessage={errorMessage} />;

    return (
        <article className="job">
            <JobCardItem jobData={props.job} />
            {window.location.pathname === '/' && (
                <button
                    className="btn btn--big job__apply-btn"
                    onClick={buttonHandler}
                >
                    Apply Now
                </button>
            )}
        </article>
    );
};

export default JobItem;
