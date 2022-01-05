import React from 'react';

interface LoadMoreProps {}

const LoadMore = (props: LoadMoreProps) => {
    return (
        <>
            <div className="loading__circles">
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
            </div>
            <p className="loading__text">loading more jobs</p>
        </>
    );
};

export default LoadMore;
