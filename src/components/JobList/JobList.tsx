import React from 'react';
import { IJobList } from '../../interfaces';
import JobItem from '../JobItem/JobItem';
import './JobList.css';

interface JobListProps {
    data: any;
    jobsAmount: number;
}

const JobList = (props: JobListProps) => {
    return (
        <div className="job-list">
            <h3>{`Showing ${props.data.length} from ${props.jobsAmount} job posts`}</h3>
            <div className="job-list__wrapper">
                {props.data.map((job: IJobList) => (
                    <JobItem job={job} key={job.id} />
                ))}
            </div>
        </div>
    );
};

export default JobList;
