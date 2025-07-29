import React from "react";
import footerBgIcon from "../../assets/footer-bg.png"; // صورة PNG شفافة

export default function Footer() {
  return (
    <div className="relative">
      {/* ===== الصورة الزخرفية ===== */}
      <img
        src={footerBgIcon}
        alt="Decorative"
<<<<<<< HEAD
        className="absolute bottom-0 sm:-top-36 right-0 w-48 sm:w-[250px] opacity-95 z-40 pointer-events-none"
      />

      {/* ===== الفوتر ===== */}
      <footer className="bg-[#2f2a1f] text-white py-10 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left items-start">

          {/* العمود 1: وصف زلال */}
          <div>
            <h3 className="text-3xl sm:text-4xl font-[Great_Vibes] text-[#e0cba6] mb-3">Zilal</h3>
=======
        className="absolute -top-40 right-0 w-[250px] opacity-95 z-40 pointer-events-none"
      />

      {/* ===== الفوتر ===== */}
      <footer className="bg-[#2f2a1f] text-white py-10 px-6 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left items-start">

          {/* العمود 1: وصف زلال */}
          <div>
            <h3 className="text-4xl font-[Great_Vibes] text-[#e0cba6] mb-3">Zilal</h3>
>>>>>>> 9925b70d4a3a84463466546ee7e71fc625a64f3e
            <p className="text-sm text-gray-300 leading-relaxed">
              Beneath every shadow lies a story — Zilal invites you to witness the silence of ancient halls,
              the whispers of forgotten art, and the echo of civilizations long gone.
            </p>
          </div>

          {/* العمود 2: روابط سريعة */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-[#e2dac5] mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/about" className="hover:text-white transition">About</a></li>
              <li><a href="/gallery" className="hover:text-white transition">Gallery</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

<<<<<<< HEAD
          {/* العمود 3: السوشيال ميديا */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-[#e2dac5] mb-3">Follow Us</h4>
            <div className="flex flex-col sm:flex-row md:flex-col items-center sm:items-start gap-3 text-sm sm:text-base">
=======
          {/* العمود 3: السوشيال ميديا بشكل عمودي */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-[#e2dac5] mb-3">Follow Us</h4>
            <div className="flex flex-col items-center md:items-start gap-2 text-lg">
>>>>>>> 9925b70d4a3a84463466546ee7e71fc625a64f3e
              <a href="#" className="text-[#e0cba6] hover:text-white transition flex items-center gap-2">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a href="#" className="text-[#e0cba6] hover:text-white transition flex items-center gap-2">
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <a href="#" className="text-[#e0cba6] hover:text-white transition flex items-center gap-2">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="#" className="text-[#e0cba6] hover:text-white transition flex items-center gap-2">
                <i className="fab fa-youtube"></i> YouTube
              </a>
            </div>
          </div>

        </div>

        {/* ===== الحقوق ===== */}
<<<<<<< HEAD
        <div className="text-center text-xs text-white mt-10 border-t border-white pt-4">
=======
        <div className="text-center text-xs text-white mt-8 border-t border-white pt-4">
>>>>>>> 9925b70d4a3a84463466546ee7e71fc625a64f3e
          © {new Date().getFullYear()} Zilal — Curating echoes of the unseen.
        </div>
      </footer>
    </div>
  );
}
