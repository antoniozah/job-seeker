export interface AuthUser {
    id: number;
    firstName: string;
    email: string;
    lastName: string;
}

export interface LoginProps {
    authStatus: any;
    authUser: any;
}
