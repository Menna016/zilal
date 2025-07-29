import React from "react";

export default function About() {
  return (
    <div className="bg-[#f5f2ec] text-gray-800 pt-32 pb-20 px-6 md:px-24">
      {/* العنوان */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-[Great_Vibes] text-[#a88f6b] mb-3">
          About Zilal
        </h1>
        <p className="text-sm font-[Montserrat] tracking-widest uppercase text-gray-500">
          Curating Echoes of the Unseen
        </p>
      </div>

      {/* المحتوى */}
      <div className="max-w-4xl mx-auto text-sm font-[Montserrat] leading-relaxed space-y-6 text-gray-700">
        <p>
          <strong>Zilal</strong> is not just a gallery — it's a sanctuary for stories long forgotten,
          a space where art and time intertwine. Every piece in Zilal whispers
          of civilizations, dreams, and echoes left behind.
        </p>

        <p>
          Our mission is to revive the soul of history through curated imagery that
          connects the past with the present. Whether it’s the silence of ancient halls,
          or the forgotten brushstrokes of lost artists, Zilal invites you to <em>see beyond the visible</em>.
        </p>

        <p>
          What makes Zilal unique is not just the art we display, but the <strong>feelings we preserve</strong> —
          we believe every shadow holds a story, and every viewer brings it to life again.
        </p>

        <p>
          Join us as we uncover the fragments of human expression, one image at a time.
        </p>

        <div className="mt-6 text-center">
          <a
            href="/gallery"
            className="bg-[#a88f6b] hover:bg-[#967751] text-white px-6 py-2 text-sm rounded-full tracking-widest uppercase transition"
          >
            Explore the Gallery
          </a>
        </div>
      </div>
    </div>
  );
}
