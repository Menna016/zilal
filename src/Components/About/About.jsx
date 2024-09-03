import React from 'react';
import { FaStar } from 'react-icons/fa';

export default function About() {
    return (
        <div className="about-bg">
           <div className=' text-white p-44 flex flex-col items-center justify-center'>
            <div className="max-w-4xl px-4">
                <div className=" mb-12">
                    <h1 className="text-5xl text-center font-bold mb-3 uppercase">About Component</h1>
                    
                    {/* Line with Star */}
                    <div className="flex items-center mb-8">
                        <div className="flex-1 border-t-4 border-white w-1/6"></div>
                        <div className="mx-4 text-2xl text-white"><FaStar/></div>
                        <div className="flex-1 border-t-4 border-white w-1/6"></div>
                    </div>
                    
                    {/* Text Content */}
                    <div className="grid lg:grid-cols-2 gap-6">
                        <p>
                            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML,
                            CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </p>
                        <p>
                            Freelancer is a free bootstrap theme created by Route. The download includes the
                            complete source files including HTML, CSS, and JavaScript as well as optional SASS 
                            stylesheets for easy customization.
                        </p>
                    </div>
                </div>
            </div>
        </div> 
        </div>
        
    );
}
