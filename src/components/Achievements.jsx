import React, { useState } from 'react'
import Ailp from '../assets/awards/Ailp.jpeg';
import Codechum from '../assets/awards/Codechum.jpg';
import deanslist from '../assets/awards/deanslist.jpg';
import JavaThird from '../assets/awards/Java-3rd.jpeg';
import President from '../assets/awards/President.png';
import Webdev2nd from '../assets/awards/Webdev-2nd.jpeg';
import Webdev3rd from '../assets/awards/Webdev-3rd.jpeg';
import cert1 from '../assets/certs/cert-1.jpg';
import cert2 from '../assets/certs/cert-2.jpg';
import cert3 from '../assets/certs/cert-3.jpg';
import awsCert from '../assets/certs/aws-cert.jpg';

function Achievements() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [showMore, setShowMore] = useState(false);

    const viewFullImage = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const certificates = [
        { id: 1, title: "Wi-fi Configuration and IP address of Computer Networking", image: cert1, description: "This certificate focuses on the configuration of Wi-Fi networks and the management of IP addresses in computer networking. It covers essential topics such as setting up wireless networks, understanding IP addressing schemes, and ensuring secure and efficient network connectivity.", date: "2025-08-27" },

        { id: 2, title: "Network Essentials: From LAN to WAN, VPNs and Firewalls", image: cert2, description: "This certificate provides a comprehensive understanding of network essentials, covering topics such as Local Area Networks (LANs), Wide Area Networks (WANs), Virtual Private Networks (VPNs), and firewalls. It equips learners with the knowledge to design, implement, and manage secure and efficient networks.", date: "2025-08-27" },

        { id: 3, title: "Computer Security and Safety, Ethics and Privacy", image: cert3, description: "This certificate covers essential topics in computer security, including best practices for maintaining safety, understanding ethical considerations, and protecting privacy in the digital age.", date: "2025-09-10" },
        
        { id: 4, title: "AWS Lamda Foundation", image: awsCert, description: "AWS Lambda is a serverless compute service that lets you run code without provisioning or managing servers. It automatically scales your applications by running code in response to events and only charges you for the compute time you consume." },
    ];

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
            description: "Codechum is a app that provides a platform for competitive programming, allowing users to practice and improve their coding skills through various challenges."
        },
        {
            id: 6, title: "Web Development 2nd Place", image: Webdev2nd, date: "2024-08-24",
            description: "Secured 2nd place in the Web Development competition, demonstrating advanced skills in web technologies and design."
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
                <div className="max-w-6xl mx-auto px-4 py-8 mt-5">
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showMore ? 'max-h-[5000px]' : 'max-h-[820px]'}`}>
                        <h1 className='text-3xl font-bold mb-4 text-gray-300'>Certificates</h1>
                        <p className='text-gray-400 mb-6'>
                            A collection of my professional certificates that demonstrate my commitment to continuous learning and skill development.
                        </p>

                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                            {certificates.map((certificate) => (
                                <div key={certificate.id} className='bg-gray-800 p-4 rounded-lg shadow-lg'>
                                    <img
                                        src={certificate.image}
                                        alt={certificate.title}
                                        className='w-full h-48 object-cover object-top rounded-t-lg mb-4 cursor-pointer hover:opacity-90 transition-opacity'
                                        onClick={() => viewFullImage(certificate.image)}
                                    />
                                    <h2 className='text-xl font-semibold mb-2'>{certificate.title}</h2>
                                    <p className='text-gray-300 mb-2'>{certificate.description}</p>
                                    <span className='text-sm text-gray-500'>{new Date(certificate.date).toLocaleDateString()}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='flex justify-end mt-6'>
                        <button
                            className='bg-gray-700 text-white px-4 py-2 
                            rounded-lg hover:bg-gray-600 transition-colors'
                            onClick={() => setShowMore(!showMore)}
                        >
                            {showMore ? 'Show Less' : 'Show More'}
                        </button>
                    </div>
                </div>
            </div>

            <div className="min-h-screen bg-gray-900 text-white">
                <div className="max-w-6xl mx-auto px-4 py-8">
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showMore ? 'max-h-[5000px]' : 'max-h-[820px]'}`}>
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
                    <div className='flex justify-end mt-6'>
                        <button
                            className='bg-gray-700 text-white px-4 py-2 
                            rounded-lg hover:bg-gray-600 transition-colors'
                            onClick={() => setShowMore(!showMore)}
                        >
                            {showMore ? 'Show Less' : 'Show More'}
                        </button>
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