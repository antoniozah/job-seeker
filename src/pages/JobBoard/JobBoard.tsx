import React, { useEffect, useRef, useState } from 'react';
import './JobBoard.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import JobDetModal from '../../components/JobDetModal/JobDetModal';
import JobList from '../../components/JobList/JobList';
import GreetingHero from '../../components/GreetingHero/GreetingHero';
import LoadMore from '../../components/LoadMore/LoadMore';
import useJobFetch from '../../useJobFetch';

interface JobBoardProps {
    auth: string | boolean | null;
    authUser: string | null;
    authStatus: any;
    isAuthUser: any;
}

const JobBoard = (props: JobBoardProps) => {
    const [page, setPage] = useState<number>(1);

    const modalStatus = useSelector(
        (state: RootState) => state.modalStatus.value
    );

    const { data, hasMore, loading, error, jobsAmount } = useJobFetch(page);
    const loadMore = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const pageEnd = useRef<HTMLHeadingElement>(null!);

    useEffect(() => {
        if (loading) {
            const observer = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting && hasMore) {
                        setTimeout(() => {
                            loadMore();
                        }, 500);
                    }
                },
                { threshold: 1, rootMargin: '10px' }
            );
            observer.observe(pageEnd.current);
        }
    }, [hasMore, loading]);

    return (
        <div className="container">
            <GreetingHero user={props.authUser} />
            <JobList data={data} jobsAmount={jobsAmount} />
            <div className="loading" ref={pageEnd}>
                <LoadMore />
            </div>
            {modalStatus && <JobDetModal />}
        </div>
    );
};

export default JobBoard;
