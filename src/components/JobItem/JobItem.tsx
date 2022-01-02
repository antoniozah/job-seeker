import React from 'react';
import { IJobList } from '../../interfaces';
import dummyLogo from '../../images/company-dymmy-logo.png';
import './JobItem.css';

interface JobItemProps {
    jobData: IJobList;
}

const JobItem = (props: JobItemProps) => {
    return (
        <article className="job">
            <div className="job__wrapper">
                <div className="job__header">
                    <figure className="job__logo">
                        <img src={dummyLogo} alt="company logo" />
                    </figure>
                    <div className="job__details">
                        <p className="job__company">
                            {props.jobData.companyName}
                        </p>
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
                        <span>Spain</span>
                    </div>
                </div>
                <button className="btn btn--big job__apply-btn">
                    Apply Now
                </button>
            </div>
        </article>
    );
};

export default JobItem;
