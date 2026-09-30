// Libs
import { Pressable as Button, Text, View } from "react-native";

// Styles
import { styles } from "@/styles/newsCard";

// Types
import { IPost } from "@/types";

export default function NewsCard({ post, openPost }: { post: IPost, openPost: (id: number) => void }) {
    return (
        <Button
            key={post.id}
            onPress={() => openPost(post.id)}
            style={({ pressed }) => [styles.postCard, pressed && styles.pressedCard]}
        >
            <View style={styles.postNumber}>
                <Text style={styles.postNumberText}>{post.id}</Text>
            </View>
            <View style={styles.postContent}>
                <Text style={styles.postTitle}>{post.title}</Text>
                <Text style={styles.postBody}>{post.body}</Text>
                <Text style={styles.readMore}>Read more</Text>
            </View>
        </Button>
    );
}
