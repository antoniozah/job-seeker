import React from 'react';
import { IJobList } from '../../interfaces';
import JobItem from '../JobItem/JobItem';
import './JobList.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

interface JobListProps {}

const JobList = (props: JobListProps) => {
    const jobs = useSelector(
        (state: RootState) => state.jobListData.fethcedJobList.items
    );
    console.log(jobs);
    return (
        <div className="job-list">
            <div className="container">
                <h3>{`Showing ${5} from ${100} job posts`}</h3>
                <div className="job-list__wrapper">
                    {jobs?.map((job: IJobList) => (
                        <JobItem job={job} key={job.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JobList;
