import Register from '@/components/authModals/Register';
import React from 'react';

function Hero() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 text-center">
      <h1 className="text-5xl font-bold mb-8">
        🎓 O‘rganing, Rivojlaning, Yetakchi Bo‘ling
      </h1>
      <p className="text-lg md:text-2xl mb-8 max-w-2xl leading-10">
        Bizning o‘quv markazimizda siz zamonaviy bilimlarni amaliyot bilan birga o‘rganasiz.
        Interaktiv darslar, mashg‘ulotlar va ekspertlardan maslahatlar bilan o‘z mahoratingizni oshiring.
      </p>
      <div className="flex space-x-4">
        <button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Kurslarni Ko‘rish
        </button>
        <Register>
          <button className="bg-transparent border border-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition">
            Ro‘yxatdan O‘tish
          </button>
        </Register>
      </div>
    </div>
  );
}

export default Hero;
