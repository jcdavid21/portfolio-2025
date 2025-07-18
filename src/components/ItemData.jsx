import Anemia1Image from '../assets/projects/anemia-1.jpeg';
import Anemia2Image from '../assets/projects/anemia-2.jpeg';
import capstone1Image from '../assets/projects/capstone-1.png';
import capstone2Image from '../assets/projects/capstone-2.png';
import capstone3Image from '../assets/projects/capstone-3.png';
import coffee1Image from '../assets/projects/coffee-1.png';
import coffee2Image from '../assets/projects/coffee-2.png';
import coffee3Image from '../assets/projects/coffee-3.png';
import weed1Image from '../assets/projects/weed-1.jpeg';
import weed2Image from '../assets/projects/weed-2.jpeg';
import weed3Image from '../assets/projects/weed-3.jpeg';
import emp1Image from '../assets/projects/emp-1.png';
import emp2Image from '../assets/projects/emp-2.png';
import vid1Image from '../assets/projects/vid-1.png';
import vid2Image from '../assets/projects/vid-2.png';
import vid3Image from '../assets/projects/vid-3.png';


const ItemData = [
    {
        id: 1,
        title: "Customize Meal Planner Machine Learning",
        description: <div className='grid grid-cols-1 gap-4 p-6 text-gray-300'>
            <p>
                A machine learning model that generates personalized meal plans based on user preference, BMI Data, and dietary restrictions.
            </p>
            <p>
                The model uses a combination of collaborative filtering and content-based filtering to recommend meals that align with the user's taste and health goals.
                
                It incorporates nutritional databases and leverages user feedback to continuously improve recommendations. The backend is built with Python and TensorFlow, while the frontend uses React for seamless user interaction.
            </p>
            <p>
                The project includes a user-friendly interface where users can input their preferences, and the model will generate a weekly meal plan with recipes and nutritional information.
            </p>
        </div>,
        image: [
            {url: capstone1Image, alt: "Meal Planner Image 1"},
            {url: capstone2Image, alt: "Meal Planner Image 2"},
            {url: capstone3Image, alt: "Meal Planner Image 3"}
        ],
        date: "2024-01-15",
    },
    {
        id: 2,
        title: "Advertisement Video Analyzer",
        description: <div className='grid grid-cols-1 gap-4 p-6 text-gray-300'>
            <p>
                A machine learning model designed to analyze advertisement videos for effectiveness and engagement metrics.
            </p>
            <p>
                The system processes video content to detect emotional responses, attention patterns, and provides analytics on viewer engagement.
            </p>
            <p>
                It helps marketers optimize their video content by identifying which segments perform best and which need improvement.
            </p>
        </div>,
        image: [
            {url: vid1Image, alt: "Advertisement Video Image 1"},
            {url: vid2Image, alt: "Advertisement Video Image 2"},
            {url: vid3Image, alt: "Advertisement Video Image 3"}
        ],
        date: "2023-11-20",
    },
    {
        id: 3,
        title: "Anemia Detection System",
        description: <div className='grid grid-cols-1 gap-4 p-6 text-gray-300'>
            <p>
                A medical imaging analysis tool that detects signs of anemia through image processing and machine learning.
            </p>
            <p>
                The system uses advanced algorithms to analyze cbc result images and identify patterns indicative of anemia.
                The model is trained on a diverse dataset to ensure accuracy and reliability in detection.
            </p>
            <p>
                Designed to assist healthcare professionals in early detection, especially in resource-limited settings.
            </p>
        </div>,
        image: [
            {url: Anemia1Image, alt: "Anemia Detection Image 1"},
            {url: Anemia2Image, alt: "Anemia Detection Image 2"}
        ],
        date: "2023-10-05",
    },
    {
        id: 4,
        title: "Coffee Shop Management System",
        description: <div className='grid grid-cols-1 gap-4 p-6 text-gray-300'>
            <p>
                A comprehensive web application for managing all aspects of coffee shop operations.
            </p>
            <p>
                Features include inventory management, employee scheduling, customer orders, and sales analytics.
            </p>
            <p>
                The system provides real-time data to help owners make informed business decisions and improve customer service.
            </p>
            <p>
                Built with a focus on user experience, allowing easy navigation and quick access to essential functions.
            </p>
        </div>,
        image: [
            {url: coffee1Image, alt: "Coffee Shop Image 1"},
            {url: coffee2Image, alt: "Coffee Shop Image 2"},
            {url: coffee3Image, alt: "Coffee Shop Image 3"}
        ],
        date: "2023-09-12",
    },
    {
        id: 5,
        title: "Employee Performance Evaluation System",
        description: <div className='grid grid-cols-1 gap-4 p-6 text-gray-300'>
            <p>
                A web-based platform for comprehensive employee performance assessment and feedback.
            </p>
            <p>
                The system allows HR managers to set performance metrics, conduct evaluations, and provide feedback.
                Also includes features for tracking employee progress and setting development goals.
            </p>
            <p>
                Helps organizations maintain objective performance metrics and supports employee development.
            </p>
        </div>,
        image: [
            {url: emp1Image, alt: "Employee Performance Image 1"},
            {url: emp2Image, alt: "Employee Performance Image 2"}
        ],
        date: "2023-08-22",
    },
    {
        id: 6,
        title: "Weed in Rice Field Detection",
        description: <div className='grid grid-cols-1 gap-4 p-6 text-gray-300'>
            <p>
                A computer vision system that identifies weeds in rice fields using machine learning and OpenCV.
            </p>
            <p>
                The model differentiates between rice plants and common weeds, helping farmers target herbicide application.
                This system helps reduce chemical usage and improve crop yield through precision agriculture techniques.
            </p>
            <p>
                The project aims to enhance agricultural productivity by providing farmers with tools to manage their crops more effectively.
            </p>
        </div>,
        image: [
            {url: weed1Image, alt: "Weed Detection Image 1"},
            {url: weed2Image, alt: "Weed Detection Image 2"},
            {url: weed3Image, alt: "Weed Detection Image 3"}
        ],
        date: "2023-07-30",
    }
];

export default ItemData;