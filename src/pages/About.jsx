// About.js
import React from 'react';

const About = () => {
    return (
        <div className="max-w-5xl mx-auto p-6 text-gray-800">
            <section className="bg-gray-100 p-6 my-4 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to MovieStore</h1>
                <p className="text-lg">MovieStore is an educational project designed to showcase the integration of The Movie Database (TMDb) API with modern web development practices using React.</p>
            </section>
            
            <section className="bg-gray-100 p-6 my-4 rounded-lg shadow-lg flex ">
                <div className='w-[100%] md:w-[50%]'>


                </div>
                <div className='hidden md:block md:w-[50%] '>

                <h2 className="text-3xl font-semibold text-blue-600 mb-4">Project Overview</h2>
                <ul className="list-none">
                    <li><strong>Project Name:</strong> MovieStore</li>
                    <li><strong>Purpose:</strong> Educational</li>
                    <li><strong>Technology Stack:</strong> React, TMDb API, Tailwind CSS</li>
                </ul>

                </div>
             
            </section>
            
            <section className="bg-gray-100 p-6 my-4 rounded-lg shadow-lg text-left">
                <h2 className="text-3xl font-semibold text-blue-600 mb-4">Key Features</h2>
                <ul className="list-disc pl-5">
                    <li>Browse Movies: Discover movies by browsing through different categories like trending, popular, and top-rated.</li>
                    <li>Movie Details: View detailed information about each movie, including synopsis, cast, release date, and ratings.</li>
                    <li>Search Functionality: Quickly find your favorite movies using our powerful search feature.</li>
                    <li>Responsive Design: Enjoy a consistent and optimized viewing experience across various devices.</li>
                </ul>
            </section>
            
            <section className="bg-gray-100 p-6 my-4 rounded-lg shadow-lg text-right">
                <h2 className="text-3xl font-semibold text-blue-600 mb-4">Why MovieStore?</h2>
                <p className="text-lg">MovieStore serves as a practical example for developers interested in learning how to build a dynamic and responsive web application with React.</p>
            </section>
            
            <section className="bg-gray-100 p-6 my-4 rounded-lg shadow-lg text-left">
                <h2 className="text-3xl font-semibold text-blue-600 mb-4">Educational Goals</h2>
                <ul className="list-disc pl-5">
                    <li>React Development: Gain hands-on experience with React components, hooks, and state management.</li>
                    <li>API Integration: Learn how to fetch and display data from external APIs in a user-friendly format.</li>
                    <li>UI/UX Design: Understand the principles of creating intuitive and visually appealing web interfaces.</li>
                    <li>Responsive Web Design: Explore techniques for building adaptable layouts that work on any screen size.</li>
                </ul>
            </section>
            
            <section className="bg-gray-100 p-6 my-4 rounded-lg shadow-lg text-right">
                <h2 className="text-3xl font-semibold text-blue-600 mb-4">Legal Disclaimer</h2>
                <p className="text-lg">MovieStore is an independent project created for educational purposes only. It is not affiliated with or endorsed by The Movie Database (TMDb).</p>
            </section>
            
            <section className="bg-gray-100 p-6 my-4 rounded-lg shadow-lg text-left">
                <h2 className="text-3xl font-semibold text-blue-600 mb-4">Contact Us</h2>
                <p className="text-lg">For any questions or feedback about MovieStore, feel free to reach out to us:</p>
                <ul className="list-none">
                    <li><strong>Email:</strong> support@moviestore.com</li>
                    <li><strong>GitHub:</strong> <a href="https://github.com/yourusername/moviestore" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">MovieStore Repository</a></li>
                </ul>
            </section>
        </div>
    );
};

export default About;
