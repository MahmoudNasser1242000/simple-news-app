// Libs
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState, useTransition } from "react";

// Styles
import { styles } from "../styles/allNews";

// Types
import type { IPost } from "../types";

// Services
import newsApis from "@/services/newsApis";

// Components
import NewsCard from "@/components/NewsCard";
import PostDetails from "@/components/PostDetails";

export default function AllNews() {
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

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        {/* Header */}
        <View style={styles.fixedHeader}>
          <View style={styles.hero}>
            <Text style={styles.eyebrow}>Latest News Feed</Text>
            <Text style={styles.title}>News App</Text>
            <Text style={styles.description}>
              All the latest news from around the world
            </Text>
          </View>
        </View>

        {/* Scrollable Content */}
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {isNewsLoading ? (
            <View style={styles.stateBox}>
              <Text style={styles.stateText}>Loading posts...</Text>
            </View>
          ) : error ? (
            <View style={styles.errorBox}>
              <Text style={styles.errorText}>Error: {error}</Text>
            </View>
          ) : posts.length === 0 ? (
            <View style={styles.stateBox}>
              <Text style={styles.stateText}>No posts found</Text>
            </View>
          ) : (
            selectedPostID ? (
              <PostDetails
                postID={selectedPostID}
                closePost={closePost}
              />
            ) : (
              <View style={styles.list}>
                {posts.map((post) => (
                  <NewsCard 
                    key={post.id}
                    post={post}
                    openPost={openPost}
                  />
                ))}
              </View>
            )
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
