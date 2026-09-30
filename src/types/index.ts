interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface IComment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

interface IQueryState {
    isLoading: boolean;
    loadingText?: string;
    error: string | null;
    isEmpty: boolean;
    emptyText?: string;
    children: React.ReactNode;
}

interface IHeader {
    eyebrow: string;
    title: string;
    description: string;
}

export { IPost, IComment, IQueryState, IHeader };