import React from 'react'
import { FaStar } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="flex items-center justify-center p-20 bg-[#1abc9c]">
      <div className="text-center text-white pt-20">
        <img src="public/avataaars.svg" alt="Avatar" className="mx-auto mb-4 w-full" />
        <h1 className="text-3xl font-bold uppercase mb-4">Start Framework</h1>
        {/* Line with Star */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex-1 border-t-4 border-white"></div>
          <div className="mx-4 text-2xl"><FaStar /></div>
          <div className="flex-1 border-t-4 border-white"></div>
        </div>
        <h5>Graphic Artist - Web Designer - Illustrator</h5>
      </div>
    </div>
  )
}
