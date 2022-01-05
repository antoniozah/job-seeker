import React from 'react';
import './JobCardItem.css';
import dummyLogo from '../../images/company-dymmy-logo.png';
import { IJobList } from '../../interfaces';
import { timestampToDate } from '../../helpers';
interface JobCardItemProps {
    jobData: IJobList;
}

const JobCardItem = (props: JobCardItemProps) => {
    return (
        <div className="jobcard">
            <div className="jobcard__header">
                <figure className="jobcard__logo">
                    <img src={dummyLogo} alt="company logo" />
                </figure>
                <div className="jobcard__details">
                    <p className="jobcard__company">
                        {props.jobData.companyName}
                    </p>
                    <h3 className="jobcard__title">{props.jobData.title}</h3>
                </div>
            </div>
            <div className="jobcard__meta">
                <div className="jobcard__posted-date">
                    <p>Date Posted</p>
                    <span>{timestampToDate(props.jobData.createdAt)}</span>
                </div>
                <div className="jobcard__expired-date">
                    <p>Apply until</p>
                    <span>{timestampToDate(props.jobData.validUntil)}</span>
                </div>
                <div className="jobcard__location">
                    <p>Location</p>
                    <span>{props.jobData.address}</span>
                </div>
            </div>
        </div>
    );
};

export default JobCardItem;
