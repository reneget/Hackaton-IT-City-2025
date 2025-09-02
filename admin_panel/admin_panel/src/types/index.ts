export interface AdminPanelProps {
    title: string;
    isAdmin: boolean;
}

export interface User {
    id: number;
    name: string;
    email: string;
    role: 'admin' | 'user';
}

export interface State {
    users: User[];
    loading: boolean;
    error: string | null;
}