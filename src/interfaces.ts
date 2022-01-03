export interface IAuthUser {
    id?: number;
    firstName?: string;
    lastName?: string;
    email: string;
}

export interface LoginProps {
    authStatus: any;
    authUser: any;
}

export interface IJobList {
    id: number;
    companyName: string;
    address: string;
    title: string;
    createdAt: number;
    validUntil: number;
}

export interface IJobDetails extends IJobList {
    description: string;
}