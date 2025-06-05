import React from "react";
import Head from "next/head";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Welcome to Next.js App</title>
        <meta name="description" content="A modern Next.js application" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Welcome to My Next.js Application
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
            This is a comprehensive Next.js project built with TypeScript and
            Tailwind CSS. Navigate through the application to explore different
            features and components.
          </p>
        </main>
      </div>
    </>
  );
};

export default Home;