//add basic content with tailwind css
import React from "react";

const home: React.FC = () => {
    return (
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
    );
}