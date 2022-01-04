import React from 'react';
import { useSelector } from 'react-redux';
import dummyLogo from '../../images/company-dymmy-logo.png';
import { IJobList } from '../../interfaces';
import { RootState } from '../../app/store';

interface JobCardItemProps {
    jobData: IJobList;
}

const JobCardItem = (props: JobCardItemProps) => {
    return (
        <div className="job__wrapper">
            <div className="job__header">
                <figure className="job__logo">
                    <img src={dummyLogo} alt="company logo" />
                </figure>
                <div className="job__details">
                    <p className="job__company">{props.jobData.companyName}</p>
                    <h3 className="job__title">{props.jobData.title}</h3>
                </div>
            </div>
            <div className="job__meta">
                <div className="job__posted-date">
                    <p>Date Posted</p>
                    <span>12 Jun</span>
                </div>
                <div className="job__expired-date">
                    <p>Apply until</p>
                    <span>2 Jul</span>
                </div>
                <div className="job__location">
                    <p>Location</p>
                    <span>{props.jobData.address}</span>
                </div>
            </div>
        </div>
    );
};

export default JobCardItem;
