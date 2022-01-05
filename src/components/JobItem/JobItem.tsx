import React from 'react';

import { IJobList } from '../../interfaces';
import JobCardItem from '../JobCardItem/JobCardItem';
import './JobItem.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
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
                dispatch(setJobDetails(response.data));
            } else {
                throw new Error();
            }
        } catch (error: any) {
            if (error.response.status === 401) {
                dispatch(ErrorHandler());
                dispatch(setErrorMessage('401'));
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
