// Libs
import { useEffect, useState, useTransition } from "react";

// Types
import type { IPost } from "@/types";

// Services
import newsApis from "@/services/newsApis";

const usePostDetails = (postID: number) => {
  // Hooks
  const [post, setPost] = useState<IPost>({} as IPost);
  const [error, setError] = useState<string>("");
  const [isDetailsLoading, startTransition] = useTransition();

  // Fetch post details and comments
  useEffect(() => {
    const fetchPostDetails = async () => {
      startTransition(async () => {
        try {
          const postData = await newsApis.getPostDetails(postID);
          setPost(postData);
        } catch (error: any) {
          setError(error.message);
        }
      });
    };
    fetchPostDetails();
  }, [postID]);

  return {
    post,
    error,
    isDetailsLoading,
  };
};

export default usePostDetails;
