//Create a PostCard.tsx component in components/common/PostCard.tsx that accepts title, content, and userId as props.
//Fetch data from an API (e.g., JSONPlaceholder) and display a list of posts using the PostCard component in pages/posts.tsx.

import React from "react";
import { PostProps } from "../../interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-2">{content}</p>
      <p className="text-gray-500 text-sm">User ID: {userId}</p>
    </div>
  );
}

export default PostCard;