import React from 'react';
import { FaFacebook, FaGlobe, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (<>
  <div style={{ backgroundColor: '#2c3e50' }} className="text-white py-20 px-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-4 text-center">
          <div className=' p-4'>
            <h1 className='text-3xl font-bold mb-2'>LOCATION</h1>
            <h6 className='pb-5'>2215 John Daniel Drive</h6>
            <span>Clark, MO 65243</span>
          </div>
          <div className="p-4">
            <h1 className='text-3xl font-bold'>AROUND THE WEB</h1>
            <ul className="flex justify-center space-x-4 mt-5">
              <li className='text-white border-2 border-white p-2 rounded-full text-lg'>
                <FaFacebook />
              </li>
              <li className='text-white border-2 border-white p-2 rounded-full text-lg'>
                <FaTwitter />
              </li>
              <li className='text-white border-2 border-white p-2 rounded-full text-lg'>
                <FaLinkedin />
              </li>
              <li className='text-white border-2 border-white p-2 rounded-full text-lg'>
                <FaGlobe />
              </li>
            </ul>
          </div>
          <div className="p-4">
            <h1 className='text-3xl font-bold mb-3'>ABOUT FREELANCER</h1>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </div>
    </div>
    <div style={{ backgroundColor: '#1a252f' }}>
        <div className=" container mx-auto">
            <h1  className='text-center py-5 text-white'>Copyright © Your Website 2021</h1>
        </div>
    </div>
  </>
    
  );
}
