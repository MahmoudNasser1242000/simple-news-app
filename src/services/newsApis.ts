const API_URL = 'https://jsonplaceholder.cypress.io';

const getAllPosts = async () => {
    try {
        const response = await fetch(`${API_URL}/posts`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error: { message: string } | any) {
        throw error.message || "Failed to fetch all posts";
    }
};

export default {
    getAllPosts,
};