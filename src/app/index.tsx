// Libs
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Styles
import { styles } from "../styles/base";

// Components
import { Header, NewsCard, PostDetails } from "@/components";
import QueryState from "@/base/QueryState";

// Hooks
import { usePosts } from "@/hooks";

export default function AllNews() {
  // Custom Hooks
  const { posts, error, isNewsLoading, selectedPostID, openPost, closePost } =
    usePosts();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        {/* Header */}
        <Header
          eyebrow="Latest News Feed"
          title="News App"
          description="All the latest news from around the world"
        />

        {/* Scrollable Content */}
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <QueryState
            isLoading={isNewsLoading}
            error={error}
            isEmpty={posts.length === 0}
            loadingText="Loading Posts..."
            emptyText="No Posts Found"
          >
            {selectedPostID ? (
              <PostDetails postID={selectedPostID} closePost={closePost} />
            ) : (
              <View style={styles.list}>
                {posts.map((post) => (
                  <NewsCard key={post.id} post={post} openPost={openPost} />
                ))}
              </View>
            )}
          </QueryState>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
