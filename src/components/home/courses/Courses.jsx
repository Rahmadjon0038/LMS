import React, { useState } from 'react';
import './style.css';
import { courses } from './cousedata';
import { FaHeart } from "react-icons/fa";

function Courses() {

  return (
    <div className="px-6 mt-24 bg-[#FFFFFF] min-h-screen" id='courses'>
      <h1 className="text-3xl font-extrabold text-center mb-10 text-gray-800">
        Bizning kurslarimiz
      </h1>

      <div className="course-container ">
        {courses.map((course, index) => (
          <div key={index}
            className='course-card'>
            <img src={'https://blog.tubikstudio.com/wp-content/uploads/2020/04/Pennine-Alps-illustration-tubikarts-1024x768.png'} width={100} height={100} className='w-full h-36' />
            <div
              className="p-4">
              <h2 className="course-title">{course.name}</h2>
              <p className="course-duration"><strong>Davomiyligi:</strong> {course.duration}</p>
              <p className="course-price"><strong>Narxi:</strong> {course.price}</p>
              <p className="course-level"><strong>Daraja:</strong> {course.level}</p>

              <div className='flex justify-between items-center mt-3'>
                <button className='px-4 py-2 bg bg-gradient-to-r transition-all from-pink-500 to-purple-600 text-white  cursor-pointer hover:scale-105'>Batafsil</button>
                <FaHeart className={`text-2xl ${course?.like ? 'text-[#ED37A4]' : "text-gray-400"} active:scale-90 cursor-context-pointer`} />
              </div>

            </div>
          </div>
        ))}
      </div>


    </div>
  );
}

export default Courses;
