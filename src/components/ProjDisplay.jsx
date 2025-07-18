import React, { useState, useEffect } from 'react'
import ItemData from './ItemData';
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { FaFacebookF, FaTiktok, FaTelegramPlane, FaExternalLinkAlt, FaStar, FaEye, FaCodeBranch, FaCalendarAlt, FaUser, FaCode, FaClock, FaDownload } from "react-icons/fa";
import { VscGithubProject } from "react-icons/vsc";
import { IoArrowBackCircle } from "react-icons/io5";
import { useLocation, useParams } from 'react-router-dom';
import Profile from '../assets/profile.jpg';
import { Slide } from 'react-slideshow-image';
import { IoGitBranchSharp } from "react-icons/io5";
import { BiCodeBlock, BiWorld, BiFolder } from "react-icons/bi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { MdBugReport, MdSecurity, MdSpeed } from "react-icons/md";
import 'react-slideshow-image/dist/styles.css'
import Footer from './Footer';

function ProjDisplay() {
    const icon_size = "text-xl rounded-md border border-gray-500 bg-opacity-40 p-2 text-white bg-gray-700 h-[34px] w-[34px] cursor-pointer hover:bg-gray-600 transition-colors";

    const { id } = useParams();
    const { state } = useLocation();
    const [project, setProject] = useState(null);
    const [stateProject, setStateProject] = useState(state ? state.repo : null);
    const [activeTab, setActiveTab] = useState('details');

    useEffect(() => {
        if (state && state.repo) {
            const foundProject = ItemData.find(item => item.id === parseInt(id));
            console.log(foundProject);
            setProject(foundProject);
        }
    }, [id, state]);

    const slideProperties = {
        duration: 3000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: false,
        pauseOnHover: true,
        autoplay: true,
    };

    if (!project) return <div className="text-white text-center py-16">Loading project...</div>;

    if (!stateProject) {
        return <div className="text-white text-center py-16">Project not found</div>;
    }

    // Mock data for additional project details
    const projectStats = {
        stars: Math.floor(Math.random() * 100) + 1,
        forks: Math.floor(Math.random() * 20) + 1,
        watchers: Math.floor(Math.random() * 50) + 1,
        issues: Math.floor(Math.random() * 10),
        commits: Math.floor(Math.random() * 200) + 50,
        contributors: Math.floor(Math.random() * 5) + 1,
        fileSize: (Math.random() * 5 + 1).toFixed(1) + ' GB'
    };


    const features = [
        { icon: <MdSpeed className="text-green-400" />, title: "High Performance", description: "Optimized for speed and efficiency" },
        { icon: <MdSecurity className="text-blue-400" />, title: "Secure", description: "Built with security best practices" },
        { icon: <BiWorld className="text-purple-400" />, title: "Cross-Platform", description: "Works across different platforms" },
        { icon: <HiOutlineDesktopComputer className="text-orange-400" />, title: "Modern UI", description: "Clean and intuitive user interface" }
    ];

    const tabContent = {
        overview: (
            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-4 text-gray-300 flex items-center gap-2">
                            <FaCode className="text-amber-500" />
                            Project Statistics
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-2">
                                <FaStar className="text-yellow-400" />
                                <span className="text-sm">Stars: {projectStats.stars}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaCodeBranch className="text-green-400" />
                                <span className="text-sm">Forks: {projectStats.forks}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaEye className="text-blue-400" />
                                <span className="text-sm">Watchers: {projectStats.watchers}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MdBugReport className="text-red-400" />
                                <span className="text-sm">Issues: {projectStats.issues}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <BiCodeBlock className="text-purple-400" />
                                <span className="text-sm">Commits: {projectStats.commits}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaUser className="text-indigo-400" />
                                <span className="text-sm">Contributors: {projectStats.contributors}</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-4 text-gray-300 flex items-center gap-2">
                            <BiFolder className="text-amber-500" />
                            Project Details
                        </h3>
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-gray-400">Repository Size:</span>
                                <span className="text-gray-300">{projectStats.fileSize}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">License:</span>
                                <span className="text-gray-300">MIT</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Status:</span>
                                <span className="text-green-400">Active</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Version:</span>
                                <span className="text-gray-300">v1.0.0</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-300">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3 p-4 bg-gray-700 rounded-lg">
                                <div className="text-xl">{feature.icon}</div>
                                <div>
                                    <h4 className="font-semibold text-gray-300">{feature.title}</h4>
                                    <p className="text-sm text-gray-400">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ),
        details: (
            <div className="space-y-6">
                <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-300">Full Description</h3>
                    <div className="prose prose-invert max-w-none max-sm:text-sm">
                        {project.description || "No description available for this project."}
                    </div>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-300">Installation & Setup</h3>
                    <div className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                        <code className="text-green-400 text-sm max-sm:text-xs whitespace-pre-wrap break-words">
                            # This is a design only, don't copy this verbatim
                            <br /><br />
                            # Clone the repository
                            <br />
                            git clone https://github.com/username/{project.title?.toLowerCase().replace(/\s+/g, '-')}
                            <br /><br />
                            # Install dependencies<br />
                            npm install<br /><br />
                            # Run the project<br />
                            npm start
                        </code>
                    </div>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-300">Project Structure</h3>
                    <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
                        <div className="text-gray-400">
                            📁 {project.title?.toLowerCase().replace(/\s+/g, '-')}<br />
                            ├── 📁 src/<br />
                            │   ├── 📁 components/<br />
                            │   ├── 📁 assets/<br />
                            │   └── 📄 index.js<br />
                            ├── 📁 public/<br />
                            ├── 📄 package.json<br />
                            └── 📄 README.md
                        </div>
                    </div>
                </div>
            </div>
        )
    };


    return (
        <div className='bg-gray-900 text-white min-h-screen'>
            <div className='navbar text-white p-4 pb-0 border-b border-b-gray-500'>
                <div className='flex items-center justify-between pb-5'>
                    <div className='flex items-center justify-center gap-3'>
                        <a href="/" className="flex items-center">
                            <IoArrowBackCircle className='text-[28px] text-gray-200 hover:text-white transition-colors' />
                        </a>
                        <a href="https://github.com/" target='blank' rel="noopener noreferrer">
                            <IoLogoGithub className='text-[36px] hover:text-gray-300 transition-colors' />
                        </a>
                        <div className='text-[14px] font-semibold hidden sm:block'>Juan Carlo David</div>
                    </div>
                    <div className='flex items-center justify-center gap-2 sm:gap-3'>
                        <FaFacebookF className={`${icon_size} hidden sm:block`} />
                        <FaTiktok className={`${icon_size} hidden sm:block`} />
                        <FaTelegramPlane className={`${icon_size}`} />
                        <div className='h-8 w-8 sm:h-11 sm:w-11 rounded-full overflow-hidden'>
                            <img src={Profile} alt="Profile"
                                className='h-full w-full object-fit-contain object-center' />
                        </div>
                    </div>
                </div>

                <div className='flex gap-2 sm:gap-5 overflow-x-auto'>
                    <a className="flex items-center gap-1 border-b-2 px-2 py-2 cursor-pointer text-[14px] sm:text-[16px] font-semibold border-amber-600 transition-colors duration-300 whitespace-nowrap">
                        <div className='text-[18px] sm:text-[20px] text-gray-400'>
                            <VscGithubProject />
                        </div>
                        <span className='hidden sm:inline'>Project Display</span>
                    </a>
                </div>
            </div>

            <div className='bg-gradient-to-b from-gray-800 to-gray-900 py-8 px-4'>
                <div className="max-w-6xl mx-auto">
                    <div className='text-gray-400 pb-2 border-b border-b-gray-500 mb-6 font-semibold text-sm'>
                        <VscGithubProject className='inline text-lg' />
                        Project {'>'} {project.title}
                    </div>

                    {/* Project Header */}
                    <div className="bg-gray-800 rounded-lg p-6 mb-6">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <div>
                                <h1 className="text-3xl font-bold mb-2 text-white flex items-center gap-2 max-sm:text-xl">
                                    <IoGitBranchSharp className='text-amber-500 max-sm:text-4xl' />
                                    {project.title}
                                </h1>
                                <p className="text-gray-300 text-sm mb-4">
                                    {project.description ? project.description.props.children[0] : "No description available for this project."}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='bg-gray-900 text-green-400 text-sm mb-4 p-4 rounded-lg'>
                        <h2># Note: Some UI are for demonstration / display purposes only and may not be fully functional.</h2>
                    </div>

                    {/* Image Slideshow */}
                    <div className="slide-container bg-gray-800 rounded-lg overflow-hidden shadow-xl mb-6">
                        <Slide {...slideProperties}>
                            {Array.isArray(project.image) && project.image.length > 0 ? (
                                project.image.map((img, index) => (
                                    <div className="each-slide" key={index}>
                                        <div className="flex justify-center">
                                            <img src={img.url} alt={img.alt} className="w-full h-auto max-h-[600px] object-cover" />
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="each-slide">
                                    <div className="flex justify-center text-gray-400 py-16 bg-gray-700">
                                        <div className="text-center">
                                            <HiOutlineDesktopComputer className="text-6xl mx-auto mb-4" />
                                            <p>No images available for this project</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Slide>
                    </div>

                    {/* Tech Stack */}
                    <div className='bg-gray-800 rounded-lg p-6 mb-6'>
                        <h2 className='text-xl font-semibold mb-4 text-gray-300 flex items-center gap-2'>
                            <FaCode className="text-amber-500" />
                            Tech Stack
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {Array.isArray(stateProject?.language) && stateProject.language.length > 0 ? (
                                stateProject.language.map((lang, index) => (
                                    <div key={index} className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-full">
                                        <span
                                            className="inline-block w-3 h-3 rounded-full"
                                            style={{ backgroundColor: stateProject.languageColor[lang] || '#6B7280' }}
                                        ></span>
                                        <span className="text-sm font-medium">{lang}</span>
                                    </div>
                                ))
                            ) : (
                                <span className="text-sm bg-gray-700 px-4 py-2 rounded-full text-gray-300">
                                    No languages specified
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Project Tabs */}
                    <div className="bg-gray-800 rounded-lg overflow-hidden">
                        <div className="flex border-b border-gray-700">
                            <button
                                onClick={() => setActiveTab('details')}
                                className={`px-6 py-3 text-sm font-medium transition-colors ${activeTab === 'details'
                                    ? 'bg-amber-600 text-white'
                                    : 'text-gray-400 hover:text-gray-300'
                                    }`}
                            >
                                Details
                            </button>
                            <button
                                onClick={() => setActiveTab('overview')}
                                className={`px-6 py-3 text-sm font-medium transition-colors ${activeTab === 'overview'
                                    ? 'bg-amber-600 text-white'
                                    : 'text-gray-400 hover:text-gray-300'
                                    }`}
                            >
                                Overview
                            </button>
                        </div>
                        <div className="p-6">
                            {tabContent[activeTab]}
                        </div>
                    </div>

                    {/* Project Timeline */}
                    <div className="bg-gray-800 rounded-lg p-6 mt-6">
                        <h3 className="text-xl font-semibold mb-4 text-gray-300 flex items-center gap-2">
                            <FaCalendarAlt className="text-amber-500" />
                            Project Timeline
                        </h3>
                        <div className="space-y-4">
                            {project.date && (
                                <div className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg">
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    <div>
                                        <p className="font-semibold text-gray-300">Project Completed</p>
                                        <p className="text-sm text-gray-400">
                                            {new Date(project.date).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </p>
                                    </div>
                                </div>
                            )}
                            <div className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg">
                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                <div>
                                    <p className="font-semibold text-gray-300">Development Started</p>
                                    <p className="text-sm text-gray-400">
                                        {project.date ?
                                            new Date(new Date(project.date).getTime() - 30 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            }) : 'Date not available'
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default ProjDisplay