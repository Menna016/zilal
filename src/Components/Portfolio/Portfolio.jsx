import React, { useState, useEffect } from 'react';
import { FaPlus, FaStar, FaTimes } from 'react-icons/fa';

export default function Portfolio() {
    const [data, setData] = useState([
        { img: "/poert1.png", id: "img1" },
        { img: "/port2.png", id: "img2" },
        { img: "/port3.png", id: "img3" },
        { img: "/poert1.png", id: "img4" },
        { img: "/port2.png", id: "img5" },
        { img: "/port3.png", id: "img6" },
    ]);

    const [showImage, setShowImage] = useState(null);

    useEffect(() => {
        if (showImage) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        // Cleanup on component unmount
        return () => document.body.classList.remove('no-scroll');
    }, [showImage]);

    const handleDivClick = (e, img) => {
        e.stopPropagation();
        setShowImage(img);
    };

    const handleCloseModal = () => {
        setShowImage(null);
    };

    return (
        <div className='container mx-auto pb-10 px-16' onClick={handleCloseModal}>
            <div className='pt-32 pb-4 flex items-center justify-center'>
                <div className="px-4 w-full max-w-3xl">
                    <h1 className="text-4xl text-center font-bold mb-3 uppercase" style={{ color: '#2c3e50' }}>Portfolio Component</h1>
                    {/* Line with Star */}
                    <div className="flex items-center mb-2">
                        <div className="flex-1 border-t-4" style={{ borderColor: '#2c3e50', width: '16.66%' }}></div>
                        <div className="mx-4 text-2xl" style={{ color: '#2c3e50' }}><FaStar /></div>
                        <div className="flex-1 border-t-4" style={{ borderColor: '#2c3e50', width: '16.66%' }}></div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {data.map((item) => (
                        <div key={item.id} className="relative group">
                            <img src={item.img} alt="Portfolio item" className="w-full h-auto object-cover rounded-lg" />
                            <div
                                onClick={(e) => handleDivClick(e, item.img)}
                                className="absolute inset-0 bg-blue-300 rounded-lg flex justify-center items-center text-7xl text-white opacity-0 group-hover:opacity-90 transition-opacity duration-300"
                            >
                                <FaPlus />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {showImage && (
                <div className="fixed inset-0 bg-blue-500 bg-opacity-50 flex justify-center items-center z-50" onClick={handleCloseModal}>
                    <div className="relative">
                        <img src={showImage} alt="Popup" className="max-w-lg max-h-full object-cover" />
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleCloseModal();
                            }}
                            className="absolute top-4 right-4 text-white text-3xl"
                        >
                            <FaTimes />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
