import React, { useState } from 'react';
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { FaFacebookF, FaTiktok, FaTelegramPlane } from "react-icons/fa";
import { IoMdBook } from "react-icons/io";
import { VscGithubProject } from "react-icons/vsc";
import { TbAward } from "react-icons/tb";
import ProfilePic from '../assets/profile.jpg';

function Navbar() {
    const icon_size = "text-xl rounded-md border border-gray-500 bg-opacity-40 p-2 text-white bg-gray-700 h-[34px] w-[34px] cursor-pointer hover:bg-gray-600 transition-colors";

    const [navigation, setNavigation] = useState([
        { name: 'Overview', href: '#overview', active: true, icon: <IoMdBook /> },
        { name: 'Projects', href: '#project', active: false, icon: <VscGithubProject /> },
        { name: 'Achievements', href: '#achievements', active: false, icon: <TbAward /> },
        { name: 'Contact', href: '#contact', active: false, icon: <FaTelegramPlane /> },
    ]);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const activeNavigation = (nav) =>{
        setNavigation(prevNav => 
            prevNav.map(item => ({
                ...item,
                active: item.name === nav
            }))
        );
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className='navbar text-white p-4 pb-0 border-b border-b-gray-500'>
            <div className='flex items-center justify-between pb-5'>
                <div className='flex items-center justify-center gap-3'>
                    <IoReorderThreeOutline 
                        className='text-[28px] border border-gray-500 rounded-sm text-gray-500 cursor-pointer hover:bg-gray-600 transition-colors' 
                        onClick={toggleMenu}
                    />
                    <a href="https://github.com/" target='blank' rel="noopener noreferrer">
                        <IoLogoGithub className='text-[36px]' />
                    </a>
                    
                    <div className='text-[14px] font-semibold hidden sm:block'>Juan Carlo David</div>
                </div>
                <div className='flex items-center justify-center gap-2 sm:gap-3'>
                    <FaFacebookF className={`${icon_size} hidden sm:block`} />
                    <FaTiktok className={`${icon_size} hidden sm:block`} />
                    <FaTelegramPlane className={`${icon_size}`} />
                    <div className='h-8 w-8 sm:h-11 sm:w-11 rounded-full overflow-hidden'>
                        <img src={ProfilePic} alt="Profile"
                            className='h-full w-full object-fit-contain object-center' />
                    </div>
                </div>
            </div>

            <div className={`flex gap-2 sm:gap-5 overflow-x-auto ${isMenuOpen ? 'hidden' : 'flex'} sm:flex`}>
                {navigation.map((item) => {
                    const { name, href, active, icon } = item;
                    
                    return (
                        <a
                            key={name}
                            href={href}
                            onClick={() => activeNavigation(name)}
                            className={`flex items-center gap-1 border-b-2 px-2 py-2 cursor-pointer text-[14px] sm:text-[16px] whitespace-nowrap ${active ? 'font-semibold border-amber-600' : 'border-b-transparent'} transition-colors duration-300`}
                        >
                            <div className='text-[18px] sm:text-[20px] text-gray-400'>{icon}</div>
                            <span className='hidden sm:inline'>{name}</span>
                        </a>
                    );
                })}
            </div>
        </div>
    );
}

export default Navbar;