import React, { useState } from 'react';
import { IoMdStar, IoMdGitBranch } from "react-icons/io";
import { GoRepo, GoRepoForked, GoGitCommit } from "react-icons/go";
import { Link } from 'react-router-dom';

function Project() {
    const [activeTab, setActiveTab] = useState('projects');

    const repositories = [
        {
            id: 1,
            name: 'Customize Meal Planner Machine Learning',
            description: 'Web-based application for customizing meal plans using machine learning algorithms',
            language: ['React', 'Node.js', 'Python', 'MySQL'],
            languageColor: {
                React: '#61dafb',
                'Node.js': '#68a063',
                Python: '#3572A5',
                MySQL: '#4479A1'
            },
            stars: 15,
            forks: 3,
            updated: '2 days ago',
            isPrivate: false
        },
        {
            id: 2,
            name: 'Advertisement Video Analyzer',
            description: 'Machine learning model for analyzing advertisement videos',
            language: ['React', 'Node.js', 'Python'],
            languageColor: {
                React: '#61dafb',
                'Node.js': '#68a063',
                Python: '#3572A5'
            },
            stars: 8,
            forks: 2,
            updated: '1 week ago',
            isPrivate: false
        },
        {
            id: 3,
            name: 'Anemia Detection System',
            description: 'Machine learning model for detecting anemia in medical images',
            language: ['PHP', 'JavaScript', 'Python'],
            languageColor: {
                PHP: '#4F5B93',
                JavaScript: '#f1e05a',
                Python: '#3572A5'
            },
            stars: 12,
            forks: 5,
            updated: '3 days ago',
            isPrivate: false
        },
        {
            id: 4,
            name: 'Coffee Shop Management System',
            description: 'Web-based application for managing coffee shop operations',
            language: ['React', 'Node.js', 'MySQL'],
            languageColor: {
                React: '#61dafb',
                'Node.js': '#68a063',
                MySQL: '#4479A1'
            },
            stars: 6,
            forks: 1,
            updated: '5 days ago',
            isPrivate: false
        },
        {
            id: 5,
            name: 'Employee Performance Evaluation System',
            description: 'Web-based application for evaluating employee performance',
            language: ['PHP', 'JavaScript', 'MySQL', 'Python'],
            languageColor: {
                PHP: '#4F5B93',
                JavaScript: '#f1e05a',
                MySQL: '#4479A1',
                Python: '#3572A5'
            },
            stars: 9,
            forks: 4,
            updated: '1 week ago',
            isPrivate: false
        },
        {
            id: 6,
            name: 'Weed in Rice Field Detection',
            description: 'Machine learning model for detecting weeds in rice fields',
            language: ['PHP', 'JavaScript', 'Python', 'OpenCV'],
            languageColor: {
                PHP: '#4F5B93',
                JavaScript: '#f1e05a',
                Python: '#3572A5',
                OpenCV: '#5C3EE8'
            },
            stars: 7,
            forks: 2,
            updated: '1 week ago',
            isPrivate: false
        }
    ];

    const activities = [
        {
            type: 'commit',
            repo: '3rd Place in Java CodeFest',
            message: 'Our Lady Of Fatima University - Quezon City, intercampus 2025 Java CodeFest',
            time: '2025'
        },
        {
            type: 'create',
            repo: 'JPCS President 2024-2025',
            message: 'Juan Carlo David elected as JPCS President',
            time: '2024-2025'
        },
        {
            type: 'star',
            repo: 'Developed Portfolio Website',
            message: 'Created a personal portfolio website using React and Tailwind CSS',
            time: '2 days ago'
        },
        {
            type: 'fork',
            repo: 'Developed Machine Learning Model',
            message: 'I developed a machine learning model for Video Analyzer',
            time: '2025'
        },
        {
            type: 'commit',
            repo: 'Developed Meal Planner App',
            message: 'I developed a meal planner app using React, Node.js, Python, and MySQL',
            time: '2025'
        }
    ];


    const ActivityIcon = ({ type }) => {
        switch (type) {
            case 'commit':
                return <GoGitCommit className="text-green-400" />;
            case 'create':
                return <IoMdGitBranch className="text-blue-400" />;
            case 'star':
                return <IoMdStar className="text-yellow-400" />;
            case 'fork':
                return <GoRepoForked className="text-gray-400" />;
            default:
                return <GoGitCommit className="text-green-400" />;
        }
    };

    return (
        <div>
            <div className="min-h-screen bg-gray-900 text-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
                        {/* Right Column - Repositories & Activity */}
                        <div className="lg:col-span-2">
                            {/* Tabs */}
                            <div className="border-b border-gray-700 mb-6">
                                <nav className="flex space-x-8">
                                    <button
                                        onClick={() => setActiveTab('projects')}
                                        className={`py-2 px-1 border-b-2 font-medium text-sm ${activeTab === 'projects'
                                            ? 'border-amber-500 text-amber-500'
                                            : 'border-transparent text-gray-400 hover:text-gray-300'
                                            }`}
                                    >
                                        <GoRepo className="inline mr-2" />
                                        Projects
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('activity')}
                                        className={`py-2 px-1 border-b-2 font-medium text-sm ${activeTab === 'activity'
                                            ? 'border-amber-500 text-amber-500'
                                            : 'border-transparent text-gray-400 hover:text-gray-300'
                                            }`}
                                    >
                                        <GoGitCommit className="inline mr-2" />
                                        Activity
                                    </button>
                                </nav>
                            </div>
                            <h2 className='text-sm mb-4 text-gray-400'> # Click the project name to view details</h2>
                            {/* Tab Content */}
                            {activeTab === 'projects' && (
                                <div className="space-y-4">
                                    {repositories.map((repo, index) => (
                                        <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors">
                                            <div className="flex items-start justify-between mb-3">
                                                <div className="flex items-center gap-2">
                                                    <GoRepo className="text-gray-400 mt-1" />
                                                    <Link to={`project/${repo.id}`}
                                                    state={{ repo }}
                                                    className="text-lg font-semibold text-blue-400 hover:underline">
                                                        {repo.name}
                                                    </Link>
                                                    {repo.isPrivate && (
                                                        <span className="text-xs bg-gray-700 px-2 py-1 rounded-full text-gray-300">
                                                            Private
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <p className="text-gray-300 mb-4">{repo.description}</p>
                                            <div className="flex max-sm:grid max-sm:grid-cols-1 gap-4 text-sm text-gray-400">
                                                <div className="flex items-center gap-3 max-sm:grid max-sm:grid-cols-2">
                                                    {repo.language.map((lang, i) => (
                                                        <div key={i} className="flex items-center gap-1 ">
                                                            <span
                                                                className="inline-block w-3 h-3 rounded-full"
                                                                style={{ backgroundColor: repo.languageColor[lang] }}
                                                            ></span>
                                                            <span key={i} className="">{lang}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <IoMdStar />
                                                    <span>{repo.stars}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <GoRepoForked />
                                                    <span>{repo.forks}</span>
                                                </div>
                                                <span>Updated {repo.updated}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {activeTab === 'activity' && (
                                <div className="space-y-4">
                                    {activities.map((activity, index) => (
                                        <div key={index} className="bg-gray-800 rounded-lg p-6">
                                            <div className="flex items-start gap-3">
                                                <div className="mt-1">
                                                    <ActivityIcon type={activity.type} />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="font-medium">{activity.repo}</span>
                                                        <span className="text-gray-400 text-sm">{activity.time}</span>
                                                    </div>
                                                    <p className="text-gray-300">{activity.message}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Project;