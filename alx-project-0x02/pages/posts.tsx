import Header from "@/components/layout/Header";
import React from "react";

const Posts: React.FC = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Posts Page
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-8">
            This page will display a list of posts.
          </p>
          {/* Future implementation for displaying posts will go here */}
        </main>
      </div>
    </>
  );
};

export default Posts;