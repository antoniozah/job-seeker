import React, { useState } from 'react';
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

interface JobItemProps {
    job: IJobList;
}

const JobItem = (props: JobItemProps) => {
    // const [jobDetails, setJobDetails] = useState<Partial<IJobDetails | any>>(
    //     []
    // );
    const [hasError, setHasError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<any>({});

    const modalStatus = useSelector(
        (state: RootState) => state.modalStatus.value
    );
    const dispatch = useDispatch();

    const config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
    };

    console.log('Hello', props.job);

    const getJobDetails = async (id: number) => {
        try {
            setHasError(false);
            setErrorMessage('');
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
                alert('Authentication Error!');
                setHasError(true);
                setErrorMessage({
                    message: 'Only authenticated users can access the data',
                    hasBtn: true,
                });
                // localStorage.clear();
                // navigate('/login');
            } else {
                setHasError(true);
                setErrorMessage({
                    message: 'Job post does not exist',
                    hasBtn: false,
                });
            }
        }
    };

    const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        getJobDetails(props.job.id);
        dispatch(toggleModal());
    };

    if (modalStatus)
        return <JobDetModal hasError={hasError} errorMessage={errorMessage} />;

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
