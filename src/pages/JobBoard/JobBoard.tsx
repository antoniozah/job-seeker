import React, { useEffect, useState } from 'react';
import { IAuthUser, IJobList } from '../../interfaces';
import axios from 'axios';
import './JobBoard.css';
import GreetingHero from '../../components/GreetingHero/GreetingHero';
import { useNavigate } from 'react-router-dom';
import JobList from '../../components/JobList/JobList';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { setJobList } from '../../features/jobListSlice';
import JobDetModal from '../../components/JobDetModal/JobDetModal';

interface JobBoardProps {
    auth: string | boolean | null;
    authUser: string | null;
    authStatus: any;
    isAuthUser: any;
}

const JobBoard = (props: JobBoardProps) => {
    const modalStatus = useSelector(
        (state: RootState) => state.modalStatus.value
    );

    const dispatch = useDispatch();

    let navigate = useNavigate();

    useEffect(() => {
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
            params: {
                page: 1,
                sizePerPage: 5,
            },
        };

        const getData = async () => {
            try {
                const response = await axios.get(
                    `https://ka-fe-assignment.azurewebsites.net/api/job-posts`,
                    config
                );
                if (response.status !== 200) {
                    throw new Error();
                } else {
                    dispatch(setJobList(response.data));
                }
            } catch (error) {
                localStorage.clear();
                props.authStatus(false);
                props.isAuthUser({});
                navigate('/login');
                console.log(error);
            }
        };
        getData();
    }, []);
    return (
        <div>
            <GreetingHero user={props.authUser} />
            <JobList />
            {modalStatus && <JobDetModal />}
        </div>
    );
};

export default JobBoard;
