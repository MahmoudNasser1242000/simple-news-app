// Libs
import { Text, View } from "react-native";
import { useEffect, useState, useTransition } from "react";

// Styles
import { styles } from "@/styles/comments";
import { styles as statesStyles } from "@/styles/allNews";

// Types
import type { IComment } from "@/types";

// Services
import newsApis from "@/services/newsApis";

const CommentCard = ({ postID }: { postID: number }) => {
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

    return (
        isCommentsLoading ? (
            <View style={statesStyles.stateBox}>
                <Text style={statesStyles.stateText}>Loading comments...</Text>
            </View>
        ) : error ? (
            <View style={statesStyles.errorBox}>
                <Text style={statesStyles.errorText}>Error: {error}</Text>
            </View>
        ) : comments.length === 0 ? (
            <View style={statesStyles.stateBox}>
                <Text style={statesStyles.stateText}>No comments found</Text>
            </View>
        ) : (
            <>
                {/* comments header */}
                <View style={styles.commentsHeader}>
                    <Text style={styles.sectionTitle}>Comments</Text>
                    <Text style={styles.commentCount}>{comments.length}</Text>
                </View>
                {/* comments list */}
                <View style={styles.list}>
                    {
                        comments.map((comment) => (
                            <View key={comment.id} style={styles.commentCard}>
                                <Text style={styles.commentName}>{comment.name}</Text>
                                <Text style={styles.commentEmail}>{comment.email}</Text>
                                <Text style={styles.commentBody}>{comment.body}</Text>
                            </View>
                        ))
                    }
                </View>
            </>
        )
    )
}

export default CommentCard