// Libs
import { Text, View, Pressable as Button } from "react-native";
import { useEffect, useState, useTransition } from "react";

// Styles
import { styles } from "@/styles/postDetails";
import { styles as statesStyles } from "@/styles/allNews";

// Types
import type { IPost } from "@/types";

// Services
import newsApis from "@/services/newsApis";

// Components
import CommentCard from "./CommentCard";

export default function PostDetails({
    postID,
    closePost,
}: {
    postID: number;
    closePost: () => void;
}) {
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

    return (
        isDetailsLoading ? (
            <View style={statesStyles.stateBox}>
                <Text style={statesStyles.stateText}>Loading post details...</Text>
            </View>
        ) : error ? (
            <View style={statesStyles.errorBox}>
                <Text style={statesStyles.errorText}>Error: {error}</Text>
            </View>
        ) : (
            <View style={styles.detailsWrap}>
                {/* back button */}
                <Button
                    style={({ pressed }) => [
                        styles.backButton,
                        pressed && styles.pressedButton,
                    ]}
                    onPress={closePost}
                >
                    <Text style={styles.backButtonText}>Back to list</Text>
                </Button>

                {/* post details cards */}
                <View style={styles.detailsCard}>
                    <Text style={styles.detailLabel}>Post# {post.id}</Text>
                    <Text style={styles.detailTitle}>{post.title}</Text>
                    <Text style={styles.detailBody}>{post.body}</Text>
                </View>

                {/* comments */}
                <CommentCard postID={postID} />
            </View>
        )
    );
}
