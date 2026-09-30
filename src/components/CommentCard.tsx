// Libs
import { Text, View } from "react-native";

// Styles
import { styles } from "@/styles/comments";

// Base Components
import QueryState from "@/base/QueryState";

// Hooks
import { useComments } from "@/hooks";

const CommentCard = ({ postID }: { postID: number }) => {
    // Custom Hooks
    const { comments, error, isCommentsLoading } = useComments(postID);

    return (
        <QueryState
            isLoading={isCommentsLoading}
            error={error}
            isEmpty={comments.length === 0}
            loadingText="Loading Comments..."
            emptyText="No Comments Found"
        >
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
        </QueryState>
    )
}

export default CommentCard