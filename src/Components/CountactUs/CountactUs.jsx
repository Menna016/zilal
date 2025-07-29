import React from "react";
import social1 from "../../assets/social1.jpg";
import social2 from "../../assets/social2.jpg";
import social3 from "../../assets/social3.jpg";
import social4 from "../../assets/social4.jpg";
import social5 from "../../assets/social5.jpg";
import social6 from "../../assets/social6.jpg";
import header from "../../assets/header1.jpg";

export default function ContactUs() {
    return (
        <div className="min-h-screen bg-[#eac997] text-gray-800 flex flex-col items-center pt-20 pb-16 px-6 md:px-24">

            
            <div className="w-screen h-[400px] md:h-[600px] overflow-hidden mb-[-100px]">
                <img
                    src={header}
                    alt="Contact Header"
                    className="w-full h-full object-cover"
                />
            </div>


            
            <div className="bg-white p-8 shadow-xl max-w-xl text-center mb-12 rounded-xl border border-[#e8e1d3]">
                <h2 className="text-4xl font-[Great_Vibes] text-[#a88f6b] mb-4">
                    We'd Love to Hear from You
                </h2>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    Whether it's a whisper of thought or a loud echo of curiosity,
                    Zilal welcomes your message with open halls and listening walls.
                </p>
                <p className="text-[#a88f6b] underline cursor-pointer tracking-wide text-sm hover:text-[#967751] transition">
                    hello@zilalgallery.com
                </p>
            </div>

            
            <form className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                <input
                    type="text"
                    placeholder="Name"
                    className="border border-gray-300 px-4 py-3 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-[#a88f6b] text-sm"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="border border-gray-300 px-4 py-3 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-[#a88f6b] text-sm"
                />
                <input
                    type="text"
                    placeholder="Subject"
                    className="md:col-span-2 border border-gray-300 px-4 py-3 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-[#a88f6b] text-sm"
                />
                <textarea
                    placeholder="Message"
                    rows="5"
                    className="md:col-span-2 border border-gray-300 px-4 py-3 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-[#a88f6b] text-sm"
                ></textarea>
                <div className="md:col-span-2 text-center">
                    <button
                        type="submit"
                        className="bg-[#a88f6b] text-white py-2 px-8 rounded-full uppercase tracking-widest text-sm hover:bg-[#967751] transition"
                    >
                        Send Message
                    </button>
                </div>
            </form>

            
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3 max-w-6xl">
                {[social1, social2, social3, social4, social5, social6].map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        alt={`Social ${i + 1}`}
                        className="rounded-xl shadow-md object-cover w-full h-32 hover:scale-105 transition-transform duration-300"
                    />
                ))}
            </div>
        </div>
    );
}
