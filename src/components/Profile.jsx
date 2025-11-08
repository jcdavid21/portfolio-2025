import React, { useState } from 'react';
import { GoLocation, GoLink, GoMail } from "react-icons/go";
import { IoMdCloudDownload } from "react-icons/io";
import ProfilePic from '../assets/profile.jpg';
import pdfDownload from '../assets/Resume.pdf'

function Profile() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleDownload = () =>{
        const link = document.createElement('a');
        link.href = pdfDownload;
        link.download = 'Juan_Carlo_David_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div>
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-600">
                            <img
                                src={ProfilePic}
                                alt="Juan Carlo David"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h1 className="text-4xl md:text-6xl font-normal mb-4">Juan Carlo David</h1>
                            <p className="text-xl text-gray-300 mb-6">Full Stack Developer</p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
                                <div className="flex items-center gap-2 text-gray-400">
                                    <GoLocation className="text-lg" />
                                    <span>Philippines</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-400">
                                    <GoMail className="text-lg" />
                                    <span>juancarlodavid14@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-400">
                                    <GoLink className="text-lg" />
                                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                                        <span>github.com/jcdavid</span>
                                    </a>
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                <div className="bg-gray-700 px-4 py-2 rounded-lg">
                                    <span className="text-lg font-bold text-sky-400">41</span>
                                    <span className="text-gray-400 ml-2">Repositories</span>
                                </div>
                                <button 
                                    className="bg-green-700 px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                                    onClick={handleDownload}
                                >
                                    <span>
                                        <IoMdCloudDownload className="inline text-xl" />
                                    </span>
                                    <span className="text-white ml-2">
                                        Curriculum Vitae
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-gray-800 rounded-lg max-w-md w-full p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-semibold">Curriculum Vitae</h3>
                            <button 
                                onClick={closeModal}
                                className="text-gray-400 hover:text-white"
                            >
                                &times;
                            </button>
                        </div>
                        <div className="py-4">
                            <p className="text-gray-300">The CV will be available soon. Please check back later.</p>
                        </div>
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={closeModal}
                                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Profile