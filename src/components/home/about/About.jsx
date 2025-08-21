import React from 'react';
import { GraduationCap, Lightbulb, Users, Target, TrendingUp, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const StatCard = ({ icon, number, description }) => (
  <div className="bg-white border-t-4 border-pink-600 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
    {icon}
    <p className="text-4xl font-bold text-pink-600 mt-2">{number}</p>
    <p className="text-gray-600 mt-1">{description}</p>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-pink-100 mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export default function About() {
  return (
    <div className="bg-gray-50" id='about'>
      {/* Hero Section */}
      <div className="relative bg-white text-gray-600 text-center py-24 px-6 overflow-hidden">
        <div className="absolute inset-0  opacity-20"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-4xl font-extrabold mb-4 tracking-tight">
            Taraqqiyot O'quv Markazi
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-10 ">
            Bizning vazifamiz — har bir o‘quvchining ichidagi salohiyatni yuzaga chiqarish va ularni muvaffaqiyatli kelajak sari yetaklash. Zamonaviy bilimlar va innovatsion ta'lim bizning ustuvor yo'nalishimiz.
          </p>
          <Link href={'#courses'}>
            <button className="mt-8 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full border-2 transition-all duration-300 transform hover:scale-110 flex items-center mx-auto">
              Kurslarimizni Ko'ring <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard
              icon={<TrendingUp className="h-10 w-10 text-pink-500" />}
              number="5+"
              description="Yillik muvaffaqiyatli faoliyat"
            />
            <StatCard
              icon={<Users className="h-10 w-10 text-pink-500" />}
              number="1,200+"
              description="Bitiruvchilarimiz soni"
            />
            <StatCard
              icon={<Calendar className="h-10 w-10 text-pink-500" />}
              number="2018"
              description="Faoliyatimiz boshlangan yil"
            />
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nega Aynan Biz?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
            Biz shunchaki o'rgatmaymiz, biz ilhomlantiramiz. Har bir o'quvchi uchun individual yondashuv va amaliy natijalarga e'tibor qaratamiz.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
            <FeatureCard
              icon={<GraduationCap className="h-8 w-8 text-pink-600" />}
              title="Sifatli Ta'lim"
              description="Eng so‘nggi o'quv dasturlari va amaliy mashg‘ulotlar orqali o‘quvchilarni jahon standartlarida tayyorlaymiz. Har bir kurs tajribali mutaxassislar tomonidan olib boriladi."
            />
            <FeatureCard
              icon={<Lightbulb className="h-8 w-8 text-pink-600" />}
              title="Innovatsion Yondashuv"
              description="Ta'limda interaktiv texnologiyalar va ijodiy metodlardan foydalanamiz. Bu o'quvchilarga tanqidiy fikrlash va muammolarni samarali hal qilishga yordam beradi."
            />
            <FeatureCard
              icon={<Target className="h-8 w-8 text-pink-600" />}
              title="Natijaga Yo'naltirilganlik"
              description="Bizning asosiy maqsadimiz — har bir talabaning o'z oldiga qo'ygan maqsadlariga erishishiga ko'maklashish. Portfolio yaratishdan tortib, ishga joylashishgacha yordam beramiz."
            />
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
              alt="Jamoaviy ish"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Bizning Missiyamiz</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Bizning missiyamiz – yosh avlodga nafaqat bugungi kun uchun, balki kelajak kasblari uchun ham zarur bo'lgan chuqur bilim va mustahkam ko'nikmalarni berishdir.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Biz har bir o'quvchining o'ziga xos qobiliyatlarini kashf etishiga va ularni rivojlantirishiga yordam beradigan, qo'llab-quvvatlovchi va ilhomlantiruvchi muhit yaratishga intilamiz.
            </p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Muvaffaqiyatli Karyerangizni Biz Bilan Boshlang!</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            O'z kelajagingizga bugun investitsiya qiling. Bizning kurslarimiz sizga yangi imkoniyatlar eshigini ochadi.
          </p>
          {/* <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Hoziroq Ro'yxatdan O'ting
          </button> */}
        </div>
      </div>
    </div>
  );
}