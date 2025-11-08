import React, { useState } from 'react';
import { IoMdStar, IoMdGitBranch } from "react-icons/io";
import { GoRepo, GoRepoForked, GoGitCommit } from "react-icons/go";
import { FaReact, FaNodeJs, FaPython, FaJava, FaJs, FaCode, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiPhp, SiMysql } from "react-icons/si";
import { LuGraduationCap } from "react-icons/lu";
import Elementary from '../assets/elem-icon.png';
import Jhs from '../assets/jhs.png';
import College from '../assets/olfu.png';
import DisVid from '../assets/vid.mp4';
import Threads from './Threads.jsx';
import Ref1 from '../assets/erick-dp.jpg'
import { FaNetworkWired } from "react-icons/fa";
import { FaFacebookF, FaTiktok, FaTelegramPlane } from "react-icons/fa";




function Overview() {
    const [activeTab, setActiveTab] = useState('overview');
    const [activeLeftCol, setActiveLeftCol] = useState('education');

    const skills = [
        { name: 'React', icon: <FaReact className="text-blue-400" />, level: 82 },
        { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, level: 85 },
        { name: 'JavaScript', icon: <FaJs className="text-yellow-400" />, level: 95 },
        { name: 'Python', icon: <FaPython className="text-blue-500" />, level: 80 },
        { name: 'Java', icon: <FaJava className="text-red-500" />, level: 74 },
        { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-400" />, level: 88 },
        { name: 'PHP', icon: <SiPhp className="text-gray-200" />, level: 85 },
        { name: 'MySQL', icon: <SiMysql className="text-white" />, level: 88 },
        { name: 'Git', icon: <FaGitAlt className="text-orange-500" />, level: 40 }
    ];

    const schools = [
        {
            name: 'San Antonio Elementary School - Quezon City', title: "Elementary", year: "2009-2015",
            imgSrc: Elementary, comment: ''
        },
        {
            name: 'Little Merry Hearts Montessori Center - Quezon City', title: "Junior High School", year: "2015-2019",
            imgSrc: Jhs, comment: ''
        },
        {
            name: 'Our Lady Of Fatima University - Quezon City', title: "Senior High School", year: "2019-2021",
            imgSrc: College, comment: ''
        },
        {
            name: 'Our Lady Of Fatima University - Quezon City', title: "College", year: "2021-2025",
            imgSrc: College, comment: <div>
                BS Information Technology
            </div>
        },
    ]

    // load the before displaying the page
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setActiveTab('overview');
        }, 1000); // 1 second delay
        return () => clearTimeout(timer); // Cleanup the timer on unmount
    }, []);


    return (
        <div>
            <div className="min-h-screen bg-gray-900 text-white">
                {/* Main Content */}
                <div className="max-w-6xl mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column - Profile Info */}
                        <div className="lg:col-span-1 mt-[13px]">
                            <div className='text-start text-[15px] font-semibold text-gray-400
                                border-b border-b-gray-500 mb-6 flex justify-between'>
                                <h2 className={`cursor-pointer ${activeLeftCol === "education" ? 'text-amber-500 border-b-2 border-b-amber-500 ' : ''}`}
                                    onClick={() => setActiveLeftCol("education")}>
                                    Education
                                    <LuGraduationCap className='inline text-xl ml-2' />
                                </h2>
                                <h2 className={`cursor-pointer ${activeLeftCol === "skills" ? 'text-amber-500 border-b-2 border-b-amber-500 ' : ''}`}
                                    onClick={() => setActiveLeftCol("skills")}>
                                    Skills & Technologies
                                    <FaCode className='inline text-xl ml-2' />
                                </h2>
                            </div>
                            {activeLeftCol === "education" && (
                                <div className="space-y-6">
                                    {schools.map((item) => {
                                        const { name, title, year, imgSrc, comment } = item;
                                        return (
                                            <div className="bg-gray-800 rounded-lg p-6">
                                                <div className="relative pl-6">
                                                    <div className="absolute left-0 top-0 h-full w-px bg-gray-600"></div>
                                                    <div className="absolute left-[-3px] top-1/2 transform -translate-y-1/2 h-2 w-2 rounded-full bg-white"></div>

                                                    <div className='flex items-center justify-between'>
                                                        <h2 className='font-semibold'>{title}</h2>
                                                        <span className='text-gray-500 text-sm font-semibold'>{year}</span>
                                                    </div>
                                                    <div className='flex items-center justify-start gap-3 mt-2'>
                                                        <div className='h-12 w-16 rounded-lg overflow-hidden bg-white'>
                                                            <img src={imgSrc} className='h-full w-full object-contain' alt="" />
                                                        </div>
                                                        <div className="mt-2 text-gray-300 text-[15px]">
                                                            {name}
                                                        </div>
                                                    </div>
                                                    {comment && (
                                                        <div className='text-xs mt-2 leading-5 p-2 bg-gray-700 shadow-lg rounded-md text-gray-300'>
                                                            {comment}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            )}

                            {/* Skills */}
                            {activeLeftCol === "skills" && (
                                <div className="bg-gray-800 rounded-lg p-6 mb-6">
                                    <h2 className="text-xl font-semibold mb-4">Skills & Technologies</h2>
                                    <div className="space-y-3">
                                        {skills.map((skill, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <div className="text-2xl">{skill.icon}</div>
                                                <div className="flex-1">
                                                    <div className="flex justify-between items-center mb-1">
                                                        <span className="text-sm font-medium">{skill.name}</span>
                                                        <span className="text-sm text-gray-400">{skill.level}%</span>
                                                    </div>
                                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                                        <div
                                                            className="bg-amber-500 h-2 rounded-full transition-all duration-500"
                                                            style={{ width: `${skill.level}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Right Column - Repositories & Activity */}
                        <div className="lg:col-span-2">
                            {/* Tabs */}
                            <div className="border-b border-gray-700 mb-6">
                                <nav className="flex space-x-8">
                                    <button
                                        onClick={() => setActiveTab('overview')}
                                        className={`py-2 px-1 border-b-2 font-medium text-sm ${activeTab === 'overview'
                                            ? 'border-amber-500 text-amber-500'
                                            : 'border-transparent text-gray-400 hover:text-gray-300'
                                            }`}
                                    >
                                        <GoRepo className="inline mr-2" />
                                        Overview
                                    </button>

                                    <button
                                        onClick={() => setActiveTab('references')}
                                        className={`py-2 px-1 border-b-2 font-medium text-sm ${activeTab === 'references'
                                            ? 'border-amber-500 text-amber-500'
                                            : 'border-transparent text-gray-400 hover:text-gray-300'
                                            }`}
                                    >
                                        <GoRepo className="inline mr-2" />
                                        References
                                    </button>
                                </nav>
                            </div>

                            {/* Tab Content */}
                            {activeTab === 'overview' && (
                                <div className="space-y-4">
                                    <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors">
                                        <div className='text-start leading-7'>
                                            <h2 className='text-2xl pb-4'>About Me</h2>
                                            <p className='text-gray-300 pb-5 text-sm leading-6 font-extralight'>
                                                I am Juan Carlo David, a recent Bachelor of Science in Information Technology from Our Lady of Fatima University. Over four years of rigorous academic training, I developed my expertise in software development, and system analysis.
                                            </p>

                                            <p className='text-gray-300 pb-5 text-sm leading-6 font-extralight'>
                                                Beyond academics, I engaged in extracurricular activities that developed my leadership and teamwork skills. As an active student, I always grabbed opportunities to join coding competitions and create projects that pushed my limits. These experiences taught me the value of collaboration and effective communication in achieving shared goals.
                                            </p>

                                            <div className="text-gray-300 text-sm leading-6 font-extralight">
                                                I also do freelance work, where I apply my skills to real-world projects, delivering solutions that meet client needs. This hands-on experience has honed my ability to adapt to different project requirements and work efficiently under deadlines.
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ width: '100%', height: '250px', position: 'relative' }}>
                                        <Threads
                                            amplitude={1}
                                            distance={0}
                                            enableMouseInteraction={true}
                                        />
                                        <div className="absolute inset-0 rounded-md overflow-hidden">
                                            <div className="w-full h-full bg-gradient-to-b from-transparent to-black opacity-50" />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className='flex flex-col items-center justify-center text-center'>
                                                    <p className="text-white text-sm font-light text-center max-w-xs">
                                                        I approach each project with a blend of creativity and analytical thinking, ensuring a well-rounded and effective solution.
                                                    </p>
                                                    <a href="#" className="mt-4 inline-block">
                                                        <button className='text-sm font-semibold bg-white text-gray-600 px-4 py-2 rounded-md hover:bg-gray-700 hover:text-gray-300 transition-colors'>
                                                            Get Started
                                                        </button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'references' && (
                                <div className="space-y-4">
                                    <div className="bg-gray-800 rounded-lg p-6 transition-colors">
                                        <h2 className='text-1xl pb-4 text-gray-300'>References</h2>
                                        <div className='flex justify-between gap-6 '>
                                            <div className='flex gap-4'>
                                                <div className='h-20 w-20 max-sm:h-16 max-sm:w-16 rounded-full overflow-hidden'>
                                                    <img src={Ref1} alt="ref-1-dp"
                                                        className='h-full w-full object-contain' />
                                                </div>
                                                <div className='leading-4'>
                                                    <h2 className='text-lg font-medium max-md:text-sm text-gray-200'>John Erick Llanita
                                                    </h2>
                                                    <span className='inline text-xs font-medium text-gray-400'>Senior Cloud Engineer
                                                        <FaNetworkWired className='inline ml-1 text-sm' />
                                                    </span>
                                                </div>
                                            </div>

                                            <div className='flex gap-4'>
                                                <a href="https://www.facebook.com/erickoco" target='_blank' rel="noopener noreferrer">
                                                    <FaFacebookF className='cursor-pointer' />
                                                </a>
                                                <FaTiktok className='cursor-pointer' />
                                                <FaTelegramPlane className='cursor-pointer' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Overview;