// Libs
import { Text, View, Pressable as Button } from "react-native";

// Styles
import { styles } from "@/styles/postDetails";

// Components
import CommentCard from "./CommentCard";
import QueryState from "@/base/QueryState";

// Hooks
import { usePostDetails } from "@/hooks";

export default function PostDetails({
    postID,
    closePost,
}: {
    postID: number;
    closePost: () => void;
}) {
    // Custom Hooks
    const { post, error, isDetailsLoading } = usePostDetails(postID);

    return (
        <QueryState
            isLoading={isDetailsLoading}
            error={error}
            isEmpty={false}
            loadingText="Loading Post Details..."
        >
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
                    <Text style={styles.detailLabel}>Post# {post.id || "0"}</Text>
                    <Text style={styles.detailTitle}>{post.title || "No Title"}</Text>
                    <Text style={styles.detailBody}>{post.body || "No Body"}</Text>
                </View>

                {/* comments */}
                <CommentCard postID={postID} />
            </View>
        </QueryState>
    );
}
