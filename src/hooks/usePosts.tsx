// Libs
import { useEffect, useState, useTransition } from "react";

// Types
import type { IPost } from "@/types";

// Services
import newsApis from "@/services/newsApis";

const usePosts = () => {
    // Hooks
    const [posts, setPosts] = useState<IPost[]>([]);
    const [error, setError] = useState<string>("");
    const [isNewsLoading, startTransition] = useTransition();

    const [selectedPostID, setSelectedPostID] = useState<number | null>(null);

    // open post handler
    const openPost = (id: number) => {
        setSelectedPostID(id);
    };

    // close post handler
    const closePost = () => {
        setSelectedPostID(null);
    };

    // Fetch all posts
    useEffect(() => {
        const fetchNews = async () => {
            startTransition(async () => {
                try {
                    const data = await newsApis.getAllPosts();
                    setPosts(data);
                } catch (error: any) {
                    setError(error.message);
                }
            });
        };
        fetchNews();
    }, []);

    return {
        posts,
        error,
        isNewsLoading,
        selectedPostID,
        openPost,
        closePost,
    }
}

export default usePosts;
