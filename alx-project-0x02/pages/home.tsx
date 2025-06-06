//add basic content with tailwind css
import React from "react";
import Card from "amos/components/common/Card"; 

const Home: React.FC = () => {
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

     {/* Cards Section */}
    <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
            title="Card Title"
            content="This is a reusable card component that can be used to display information in a structured format.">            
            </Card>
        <Card
            title="Another Card"    
            content="You can use this card to showcase different content, such as articles, products, or any other information you want to present.">
            </Card>

    </section>
        </main>
        </div>


    );
}
//use the Card component to display a card with title and content


export default Home;
