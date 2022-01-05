import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useJobFetch = (page: number) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [data, setData] = useState<never[] | any[]>([]);
    const [jobsAmount, setJobsAmount] = useState<number>(0);
    const [hasMore, setHasMore] = useState<boolean>(false);

    let navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        setError(false);
        let resultsPerPage;
        if (window.innerWidth > 767) {
            resultsPerPage = 10;
        } else {
            resultsPerPage = 5;
        }
        axios({
            method: 'GET',
            url: 'https://ka-fe-assignment.azurewebsites.net/api/job-posts',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
            params: { page: page, sizePerPage: resultsPerPage },
        })
            .then((res) => {
                setData((prevData) => {
                    return [...prevData, ...res.data.items];
                });
                setJobsAmount(res.data.totalCount);
                setHasMore(res.data.items.length > 0);
            })
            .catch((error) => {
                localStorage.clear();
                console.log(error);
                setError(true);
                navigate('/login');
            });
    }, [page]);
    return { loading, error, data, hasMore, jobsAmount };
};

export default useJobFetch;
