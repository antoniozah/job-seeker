import React from 'react';
import { IJobList } from '../../interfaces';
import JobItem from '../JobItem/JobItem';
import './JobList.css';

interface JobListProps {
    jobs: IJobList[];
    totalJobs: number;
}

const JobList = (props: JobListProps) => {
    return (
        <div className="job-list">
            <div className="container">
                <h3>
                    {`Showing ${props.jobs.length} from ${props.totalJobs} job posts`}{' '}
                </h3>
                <div className="job-list__wrapper">
                    {props.jobs?.map((job: IJobList) => (
                        <JobItem jobData={job} key={job.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JobList;
