import React from 'react'
import { FaStar } from 'react-icons/fa'

export default function Contact() {
    return (
        <div>
            <div className='p-12 flex items-center justify-center'>
                <div className="px-4 pt-32 w-full max-w-3xl"> 
                    <h1 className="text-4xl text-center font-bold mb-3 uppercase" style={{ color: '#2c3e50' }}>contact section</h1>
                    {/* Line with Star */}
                    <div className="flex items-center mb-8">
                        <div className="flex-1 border-t-4" style={{ borderColor: '#2c3e50', width: '16.66%' }}></div>
                        <div className="mx-4 text-2xl" style={{ color: '#2c3e50' }}><FaStar /></div>
                        <div className="flex-1 border-t-4" style={{ borderColor: '#2c3e50', width: '16.66%' }}></div>
                    </div>

                    <form className="w-full">
                        <div className="mb-5">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium" style={{ color: '#2c3e50' }}>userName :</label>
                            <input type="text" id="name"
                                className="shadow-sm border-b border-b-green-400 text-gray-900 text-sm w-full p-2.5" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="age" className="block mb-2 text-sm font-medium" style={{ color: '#2c3e50' }}>UserAge :</label>
                            <input type="text" id="age"
                                className="shadow-sm border-b border-b-green-400 text-gray-900 text-sm w-full p-2.5" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium" style={{ color: '#2c3e50' }}>UserEmail :</label>
                            <input type="email" id="email"
                                className="shadow-sm border-b border-b-green-400 text-gray-900 text-sm w-full p-2.5" required />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium" style={{ color: '#2c3e50' }}>userPassword :</label>
                            <input type="password" id="password"
                                className="shadow-sm border-b border-b-green-400 text-gray-900 text-sm w-full p-2.5" required />
                        </div>

                        <button type="submit" style={{backgroundColor : '#1abc9c'}} className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Send Message
                        </button>
                    </form>

                </div>
            </div>
        </div>
    )
}
