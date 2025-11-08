
import Navbar from './Navbar';
import Profile from './Profile';
import Project from './Project';
import Overview from './Overview';
import Footer from './Footer';
import Achievements from './Achievements';
import Contact from './Contact';


function Main() {
    

    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-gray-900 text-white">
                <Profile />
                <div id='overview'>
                    <Overview />
                </div>
                <div id='project'>
                    <Project />
                </div>
                <div id='achievements'>
                    <Achievements id='achievements' />
                </div>
                <div id='contact'>
                    <Contact />
                </div>
                <Footer />
            </div>

        </div>
    );
}

export default Main;