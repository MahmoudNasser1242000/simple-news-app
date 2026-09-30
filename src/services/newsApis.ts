const API_URL = 'https://jsonplaceholder.cypress.io';

const getAllPosts = async () => {
    try {
        const response = await fetch(`${API_URL}/posts`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw error;
        }
        throw new Error("Failed to fetch post details");
    }
};

const getPostDetails = async (id: number) => {
    try {
        const response = await fetch(`${API_URL}/posts/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw error;
        }
        throw new Error("Failed to fetch post details");
    }
};

const getPostComments = async (id: number) => {
    try {
        const response = await fetch(`${API_URL}/posts/${id}/comments`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw error;
        }
        throw new Error("Failed to fetch post details");
    }
};

export default {
    getAllPosts,
    getPostDetails,
    getPostComments,
};