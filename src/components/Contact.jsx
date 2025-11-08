import { FaUser, FaPhone, FaMapMarkerAlt, FaEnvelope, FaHandshake } from 'react-icons/fa';

function Contact() {
    return (
        <div>
            <div>
                <div className="mb-5 bg-gray-900 text-white">
                    <div className="max-w-6xl mx-auto px-4 py-8">
                        <h1 className='text-3xl font-bold mb-4 text-gray-300'>Contact</h1>
                        <p className='text-gray-400 mb-6'>
                            Feel free to reach out to me through any of the platforms below.
                        </p>
                        <div className='border border-gray-400 p-6 rounded-lg'>
                            <h2 className='text-lg font-bold mb-4 text-gray-200'>Get in Touch
                                <FaHandshake className='inline ml-2' />
                            </h2>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                                <div className='text-sm text-gray-400 border border-gray-400 px-4 py-2 rounded-md flex items-center'>
                                    <FaUser className='text-sm mr-1' />
                                    <input type="text" placeholder='Full Name' className='w-full bg-transparent focus:outline-none' />
                                </div>

                                <div className='text-sm text-gray-400 border border-gray-400 px-4 py-2 rounded-md flex items-center'>
                                    <FaPhone className='text-sm mr-1' />
                                    <input type="text" placeholder='Phone Number' className='w-full bg-transparent focus:outline-none' />
                                </div>

                                <div className='text-sm text-gray-400 border border-gray-400 px-4 py-2 rounded-md flex items-center'>
                                    <FaMapMarkerAlt className='text-sm mr-1' />
                                    <input type="text" placeholder='Location' className='w-full bg-transparent focus:outline-none' />
                                </div>

                                <div className='text-sm text-gray-400 border border-gray-400 px-4 py-2 rounded-md flex items-center'>
                                    <FaEnvelope className='text-sm mr-1' />
                                    <input type="email" placeholder='Email Address' className='w-full bg-transparent focus:outline-none' />
                                </div>
                            </div>

                            <div>
                                <textarea
                                    className='w-full mt-6 p-4 bg-gray-800 text-gray-300 border border-gray-400 rounded-md focus:outline-none'
                                    rows="5"
                                    placeholder='Your Message'
                                ></textarea>
                            </div>

                            <button className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact