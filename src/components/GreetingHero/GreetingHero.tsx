import React from 'react';
import './GreetingHero.css';

interface GreetingHeroProps {
    user: string | null;
}

const GreetingHero = (props: GreetingHeroProps) => {
    return (
        <div className="greeting-hero">
            <div className="container">
                <div className="greeting-hero__wrapper">
                    <div className="greeting-hero__user">
                        <p>Hello</p>
                        <p className="text-lead">{props.user}</p>
                    </div>
                    <div className="greeting-hero__search">
                        <p>Search for a job</p>
                        <input
                            type="text"
                            name="jobQuery"
                            placeholder="Enter keyword"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GreetingHero;
