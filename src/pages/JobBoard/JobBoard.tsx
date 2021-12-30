import React from 'react';
import { AuthUser } from '../../interfaces';
import './JobBoard.css';

interface JobBoardProps {
    auth: string | boolean | null;
    authUser: AuthUser | {};
}

const JobBoard = (props: JobBoardProps) => {
    return <div>JobBoard</div>;
};

export default JobBoard;
