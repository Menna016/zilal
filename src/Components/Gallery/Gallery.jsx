import React, { useState } from "react";
import {
    FaPinterestP,
    FaInstagram,
    FaEnvelope,
    FaTimes,
    FaChevronLeft,
    FaChevronRight,
} from "react-icons/fa";

import galler1 from "../../assets/gallery/galler1.jpg";
import galler2 from "../../assets/gallery/galler2.jpg";
import galler3 from "../../assets/gallery/galler3.jpg";
import galler4 from "../../assets/gallery/galler4.jpg";
import galler5 from "../../assets/gallery/galler5.jpg";
import galler6 from "../../assets/gallery/galler6.jpg";
import galler7 from "../../assets/gallery/galler7.jpg";
import galler8 from "../../assets/gallery/galler8.jpg";
import galler9 from "../../assets/gallery/galler9.jpg";
import galler10 from "../../assets/gallery/galler10.jpg";
import galler11 from "../../assets/gallery/galler11.jpg";
import galler12 from "../../assets/gallery/galler12.jpg";
import galler13 from "../../assets/gallery/galler13.jpg";
import galler14 from "../../assets/gallery/galler14.jpg";
import galler15 from "../../assets/gallery/galler15.jpg";
import galler16 from "../../assets/gallery/galler16.jpg";
import galler17 from "../../assets/gallery/galler17.jpg";
import galler18 from "../../assets/gallery/galler18.jpg";
import galler19 from "../../assets/gallery/galler19.jpg";
import galler20 from "../../assets/gallery/galler20.jpg";
import galler21 from "../../assets/gallery/galler21.jpg";
import galler22 from "../../assets/gallery/galler22.jpg";
import galler23 from "../../assets/gallery/galler23.jpg";
import galler24 from "../../assets/gallery/galler24.jpg";
import galler25 from "../../assets/gallery/galler25.jpg";
import galler26 from "../../assets/gallery/galler26.jpg";
import galler27 from "../../assets/gallery/galler27.jpg";
import galler28 from "../../assets/gallery/galler28.jpg";
import galler29 from "../../assets/gallery/galler29.jpg";
import galler30 from "../../assets/gallery/galler30.jpg";

const images = [
  galler1,
  galler2,
  galler3,
  galler4,
  galler5,
  galler6,
  galler7,
  galler8,
  galler9,
  galler10,
  galler11,
  galler12,
  galler13,
  galler14,
  galler15,
  galler16,
  galler17,
  galler18,
  galler19,
  galler20,
  galler21,
  galler22,
  galler23,
  galler24,
  galler25,
  galler26,
  galler27,
  galler28,
  galler29,
  galler30,
];

export default function Gallery() {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <div className="pt-32 pb-16 px-6 md:px-24 bg-white min-h-screen">
            <h2 className="text-4xl font-[Great_Vibes] text-[#a88f6b] mb-10 text-center">
                Zilal Photo Collection
            </h2>

            {/* شبكة الصور */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {images.map((img, idx) => (
                    <div
                        key={idx}
                        className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md transition transform hover:scale-105"
                        onClick={() => setActiveIndex(idx)}
                    >
                        <img
                            src={img}
                            alt={`Gallery ${idx + 1}`}
                            className="h-48 w-full object-cover"
                        />
                        {/* overlay icons */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center gap-3 text-white text-lg">
                            <a href="#" onClick={(e) => e.stopPropagation()}>
                                <FaPinterestP className="hover:text-[#bd081c]" />
                            </a>
                            <a href="#" onClick={(e) => e.stopPropagation()}>
                                <FaInstagram className="hover:text-[#e1306c]" />
                            </a>
                            <a href="mailto:photographer@example.com" onClick={(e) => e.stopPropagation()}>
                                <FaEnvelope className="hover:text-[#a88f6b]" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* ===== الصورة المكبرة ===== */}
            {activeIndex !== null && (

                <div
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                    onClick={() => setActiveIndex(null)}
                >
                    <div className="relative max-w-6xl w-full px-4 flex flex-col md:flex-row gap-4" onClick={(e) => e.stopPropagation()}>

                        {/* ===== وصف الصورة ===== */}
                        <div className="bg-black/70 text-gray-200 p-6 rounded-lg md:w-1/3 w-full flex flex-col justify-between">
                            {/* النص الرئيسي */}
                            <p className="text-sm leading-relaxed text-center md:text-left mb-4">
                                This photo captures a timeless moment echoing Zilal's essence —
                                shadows that whisper history, light that reveals forgotten tales.
                            </p>

                            {/* الحقوق */}
                            <p className="text-xs text-gray-400 text-center md:text-left mt-auto">
                                © {new Date().getFullYear()} Zilal Gallery
                            </p>
                        </div>

                        {/* ===== الصورة ===== */}
                        <div className="relative md:w-2/3 w-full">
                            <button
                                className="absolute -top-10 right-4 text-3xl text-white"
                                onClick={() => setActiveIndex(null)}
                            >
                                <FaTimes />
                            </button>

                            <img
                                src={images[activeIndex]}
                                alt="Full"
                                className="w-full rounded-lg shadow-xl object-contain max-h-[80vh]"
                            />

                            {/* ===== أسهم + أيقونات تحت الصورة ===== */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-6 text-white text-2xl">
                                <FaChevronLeft
                                    className="cursor-pointer hover:text-[#e0cba6]"
                                    onClick={() =>
                                        setActiveIndex((prev) =>
                                            prev === 0 ? images.length - 1 : prev - 1
                                        )
                                    }
                                />
                                <FaPinterestP className="hover:text-[#bd081c] cursor-pointer" />
                                <FaInstagram className="hover:text-[#e1306c] cursor-pointer" />
                                <FaEnvelope className="hover:text-[#a88f6b] cursor-pointer" />
                                <FaChevronRight
                                    className="cursor-pointer hover:text-[#e0cba6]"
                                    onClick={() =>
                                        setActiveIndex((prev) => (prev + 1) % images.length)
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}


        </div>
    );
}
