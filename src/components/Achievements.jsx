import React, { useState } from 'react'
import Ailp from '../assets/awards/Ailp.jpeg';
import Codechum from '../assets/awards/Codechum.jpg';
import deanslist from '../assets/awards/deanslist.jpg';
import JavaThird from '../assets/awards/Java-3rd.jpeg';
import President from '../assets/awards/President.png';
import Webdev2nd from '../assets/awards/Webdev-2nd.jpeg';
import Webdev3rd from '../assets/awards/Webdev-3rd.jpeg';

function Achievements() {
    const [selectedImage, setSelectedImage] = useState(null);

    const viewFullImage = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const achievements = [
        {
            id: 5, title: "President of JPCS", image: President, date: "2025-06-10",
            description: "Selected as the President of the Junior Philippine Computer Society (JPCS), leading initiatives to promote computer science education and community engagement."
        },
        {
            id: 4, title: "Java 3rd Place", image: JavaThird, date: "2025-05-14",
            description: "Achieved 3rd place in the Java programming competition, showcasing proficiency in Java development."
        },
        {
            id: 2, title: "Codechum National Programming Challenge", image: Codechum, date: "2024-11-27",
            description: "Codechum is a national programming challenge that brings together the best young coders to compete in a series of algorithmic and coding tasks."
        },
        {
            id: 6, title: "Web Development 2nd Place", image: Webdev2nd, date: "2024-08-24",
            description: "Secured 2nd place in the Web Development competition, demonstrating advanced skills in front-end and back-end technologies."
        },
        {
            id: 1, title: "Academe Industry Linkages and Pathways", image: Ailp, date: "2024-06-05",
            description: "Ailp is a program that connects students with industry professionals to enhance learning and career opportunities."
        },
        {
            id: 3, title: "2024 First Semester Deanslist", image: deanslist, date: "2024-01-15",
            description: "The Dean's List recognizes outstanding academic achievement by students in the first semester of 2024."
        },
        {
            id: 7, title: "Web Development 3rd Place", image: Webdev3rd, date: "2023-03-17",
            description: "Achieved 3rd place in the Web Development competition, showcasing proficiency in web technologies."
        }
    ];

    return (
        <div>
            <div className="min-h-screen bg-gray-900 text-white">
                <div className="max-w-6xl mx-auto px-4 py-8">
                    <h1 className='text-3xl font-bold mb-4 text-gray-300'>Achievements</h1>
                    <p className='text-gray-400 mb-6'>
                        A collection of my academic and extracurricular achievements that showcase my dedication and skills.
                    </p>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                        {achievements.map((achievement) => (
                            <div key={achievement.id} className='bg-gray-800 p-4 rounded-lg shadow-lg'>
                                <img
                                    src={achievement.image}
                                    alt={achievement.title}
                                    className='w-full h-48 object-cover rounded-t-lg mb-4 cursor-pointer hover:opacity-90 transition-opacity'
                                    onClick={() => viewFullImage(achievement.image)}
                                />
                                <h2 className='text-xl font-semibold mb-2'>{achievement.title}</h2>
                                <p className='text-gray-300 mb-2'>{achievement.description}</p>
                                <span className='text-sm text-gray-500'>{new Date(achievement.date).toLocaleDateString()}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                    onClick={closeModal}
                >
                    <div className="relative max-w-4xl w-full">
                        <button
                            className="absolute -top-10 right-0 text-white text-3xl hover:text-gray-300"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <img
                            src={selectedImage}
                            alt="Full size"
                            className="w-full max-h-[90vh] object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Achievements