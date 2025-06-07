import React, { useEffect, useState } from "react";
import PostCard from "../components/common/PostCard"; // adjust path based on your structure
import { PostProps } from "../interfaces"; // This should match what PostCard expects

const PostsPage: React.FC = () => {
  // 1️⃣ State to store the list of posts fetched from the API
  const [posts, setPosts] = useState<PostProps[]>([]);

  // 2️⃣ Fetch posts when the component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // JSONPlaceholder provides a fake /posts API
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();

        // Optional: limit number of posts
        const slicedPosts = data.slice(0, 10);

        // Add userId to match PostCard requirements
        const formattedPosts = slicedPosts.map((post: any) => ({
          title: post.title,
          content: post.body,
          userId: post.userId,
        }));

        setPosts(formattedPosts); // Set the state with formatted data
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts(); // Call the async fetch function
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Posts from API</h1>
      
      {/* 3️⃣ Display a grid of posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            content={post.content}
            userId={post.userId}
          />
        ))}
      </div>
    </div>
  );
};

export default PostsPage;