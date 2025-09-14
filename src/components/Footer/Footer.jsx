import React from 'react';
import { FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* LMS haqida */}
        <div>
          <h2 className="text-2xl font-bold mb-4">LMS</h2>
          <p className="text-gray-300">
            LMS - Online ta'lim platformangiz. Biz bilan siz bilimlaringizni rivojlantiring va o‘rganishni osonlashtiring.
          </p>
        </div>

        {/* Tezkor linklar */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Tezkor linklar</h2>
          <ul className="text-gray-300 space-y-2">
            <li><a href="#home" className="hover:text-purple-500 transition-colors">Home</a></li>
            <li><a href="#courses" className="hover:text-purple-500 transition-colors">Courses</a></li>
            <li><a href="#contact" className="hover:text-purple-500 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Ijtimoiy tarmoqlar va login */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Bizni ijtimoiy tarmoqlarda kuzating</h2>
          <div className="flex gap-4 mb-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-600 transition-colors">
              <FaInstagram size={28} />
            </a>
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition-colors">
              <FaTelegram size={28} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-700 transition-colors">
              <FaYoutube size={28} />
            </a>
          </div>

          {/* Input + Login */}
          <form className="flex gap-2 mt-4">
            <input 
              type="text" 
              placeholder="Email" 
              className="flex-1 px-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button 
              type="submit" 
              className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold shadow-lg hover:scale-105 transform transition-transform"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      {/* Footer pasti */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} LMS. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
}

export default Footer;
