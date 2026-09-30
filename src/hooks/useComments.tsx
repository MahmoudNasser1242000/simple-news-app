// Libs
import { useEffect, useState, useTransition } from "react";

// Types
import type { IComment } from "@/types";

// Services
import newsApis from "@/services/newsApis";

const useComments = (postID: number) => {
    // Hooks
    const [comments, setComments] = useState<IComment[]>([]);
    const [error, setError] = useState<string>("");
    const [isCommentsLoading, startTransition] = useTransition();
    
    // Fetch post comments
    useEffect(() => {
        const fetchComments = async () => {
            startTransition(async () => {
                try {
                    const data = await newsApis.getPostComments(postID);
                    setComments(data);
                } catch (error: any) {
                    setError(error.message);
                }
            });
        };
        fetchComments();
    }, [postID]);
    
    return {
        comments,
        error,
        isCommentsLoading,
    };
}

export default useComments
