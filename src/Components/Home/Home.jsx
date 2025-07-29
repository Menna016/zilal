import React, { useRef, useEffect } from "react";
import france from "../../assets/france.jpg";
import museum1 from "../../assets/museum1.jpg";
import museum2 from "../../assets/museum2.jpg";
import gallery1 from "../../assets/gallery1.jpg";
import gallery2 from "../../assets/gallery2.jpg";
import gallery3 from "../../assets/gallery3.jpg";
import gallery4 from "../../assets/gallery4.jpg";
import gallery5 from "../../assets/gallery5.jpg";
import gallery6 from "../../assets/gallery6.jpg";
import gallery7 from "../../assets/gallery7.jpg";
import gallery8 from "../../assets/gallery8.jpg";
import gallery9 from "../../assets/gallery9.jpg";
import gallery10 from "../../assets/gallery10.jpg";

export default function HomeSection() {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const middleImage =
        scrollRef.current.scrollWidth / 2 - scrollRef.current.clientWidth / 2;
      scrollRef.current.scrollLeft = middleImage;
    }
  }, []);

  return (
    <div>

      <div
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${france})` }}
      >
        <div className="flex items-center justify-center h-full text-center text-white px-4">
          <div>
            <h1 className="text-5xl font-[Great_Vibes] text-white mb-2">
              Zilal
            </h1>
            <p className="text-sm font-[Montserrat] tracking-widest uppercase text-gray-200 mb-6">
              Echoes of the unseen
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
              <a
                href="/contact"
                className="bg-[#a88f6b] hover:bg-[#967751] text-white px-6 py-2 rounded-full text-sm uppercase tracking-widest transition duration-300"
              >
                Join Us
              </a>
              <a
                href="/gallery"
                className="border border-white text-white hover:border-[#a88f6b] hover:bg-[#a88f6b] hover:text-white px-6 py-2 rounded-full text-sm uppercase tracking-widest transition duration-300"
              >
                View
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#2f2a1f] text-white py-10 px-6 md:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl md:text-4xl font-[Montserrat] font-light tracking-wide text-[#e2dac5] mb-4">
              Welcome to ZILAL
            </h2>
            <p className="text-sm text-[#c4b89c] mb-6 leading-relaxed">
              Discover the world through the eyes of art, history, and culture.
              Our platform celebrates museums across the globe — from timeless masterpieces
              to ancient relics, we invite you to explore the stories that shaped humanity.
            </p>
            <a
              href="/about"
              className="bg-[#a88f6b] hover:bg-[#967751] text-white px-6 py-2 text-sm rounded tracking-widest uppercase transition"
            >
              Read more
            </a>
          </div>

          <div className="md:w-1/2 relative flex justify-center">
            <img
              src={museum1}
              alt="Main Museum"
              className="w-[260px] sm:w-[360px] h-[360px] sm:h-[460px] object-cover shadow-lg"
            />
            <div className="absolute left-[-40px] top-[40px] sm:left-[-60px] sm:top-[60px] w-[200px] sm:w-[300px] h-[250px] sm:h-[350px] overflow-hidden shadow-md">
              <img
                src={museum2}
                alt="Overlay"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>

      <div className="bg-white py-10 text-gray-800">
        <h2 className="text-4xl font-[Great_Vibes] text-[#a88f6b] mb-10 text-center">
          Our Gallery
        </h2>

        <div
          ref={scrollRef}
          className="overflow-x-auto whitespace-nowrap pb-6 scrollbar-none px-4"
        >
          <div className="inline-flex gap-4 sm:gap-6">
            {[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-[140px] sm:w-[180px] h-[200px] sm:h-[270px] object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-6">
          <a
            href="/gallery"
            className="bg-[#a88f6b] hover:bg-[#967751] text-white px-6 py-2 text-sm rounded-full tracking-widest uppercase transition"
          >
            View Full Gallery
          </a>
        </div>
      </div>

    </div>
  );
}
