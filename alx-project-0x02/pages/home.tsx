import React, { useState } from "react";
import Card from "../components/common/Card";
import PostModal from "@/components/common/PostModal";
import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";


const Home: React.FC = () => {
  // State to control visibility of the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State to store submitted posts (array of objects with title and content)
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);

  // Function to add a new post to the state
  const handleAddPost = (data: { title: string; content: string }) => {
    setPosts([...posts, data]); // Adds the new post to the existing list
  };

  return (
    <>
      <Header/>
      <div className="min-h-screen bg-gray-50">
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Welcome to My Next.js Application
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-8">
            This is a comprehensive Next.js project built with TypeScript and Tailwind CSS.
          </p>

          {/* Button to open modal */}
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setIsModalOpen(true)} // Opens the modal
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Add New Post
            </button>
          </div>

          {/* Posts rendered as cards */}
          <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <Card key={index} title={post.title} content={post.content} />
            ))}
          </section>
        </main>

        {/* Modal component */}
        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)} // Function to close the modal
          onSubmit={handleAddPost} // Function to receive form data
        />
        <Button size="medium" shape="rounded-md" onClick={() => alert("Hello!")}>
              Click Me
            </Button>

      </div>
    </>
  );
};

export default Home;
