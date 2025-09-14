// app/components/Contact.jsx
import { useState } from 'react';
import { MapPin, Phone, Mail, } from 'lucide-react';
import { motion } from 'framer-motion'; // Animatsiyalar uchun
import { FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa';

export default function Contact() {
  const branches = [
    {
      id: 1,
      name: 'Davlatabod filiali',
      address: 'Namangan, Davlatabot Otchapar bekati yonida',
      phone: '+998 90 123 45 67',
      email: 'info@namangan-it.uz',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.0198310621045!2d71.58301081185502!3d41.00772857123113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4d79224d84cd%3A0xe0955cee2e887b2!2sTaraqqiyot%20o%E2%80%98quv%20markazi!5e1!3m2!1sen!2s!4v1757828067931!5m2!1sen!2s',
    },
    {
      id: 2,
      name: 'Filial 2',
      address: 'Namangan, Shahar markazi',
      phone: '+998 90 234 56 78',
      email: 'branch2@namangan-it.uz',
      map: 'https://www.google.com/maps/embed?pb=...Filial2Map...',
    },
    {
      id: 3,
      name: 'Filial 3',
      address: 'Namangan, Universitet yaqinida',
      phone: '+998 90 345 67 89',
      email: 'branch3@namangan-it.uz',
      map: '',
    },
  ];
  <iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

  const [selectedBranch, setSelectedBranch] = useState(branches[0]);

  return (
    <section
      id="contact"
      className="min-h-screen px-4 py-16 bg-white">
      <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight"
        >
          Biz bilan bog‘laning
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          Quyidagi filiallarimiz orqali biz bilan osongina bog‘lanishingiz mumkin.
        </motion.p>
      </div>

      {/* Branch Selector */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {branches.map((branch) => (
          <motion.div
            key={branch.id}
            onClick={() => setSelectedBranch(branch)}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className={`relative cursor-pointer p-6 border-t-2 border-[#E60076] rounded-2xl shadow-lg transition-all duration-300 bg-white ${selectedBranch.id === branch.id
                ? 'border-2 border-[#E60076] bg-white'
                : 'hover:bg-gray-50'
              }`}>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{branch.name}</h2>
            <div className="flex items-center gap-3 mb-3">
              <MapPin size={20} className="text-[#E60076]" />
              <p className="text-sm text-gray-700">{branch.address}</p>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <Phone size={20} className="text-[#E60076]" />
              <p className="text-sm text-gray-700">{branch.phone}</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={20} className="text-[#E60076]" />
              <p className="text-sm text-gray-700">{branch.email}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Large Map */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-xl border-4 border-white"
      >
        <iframe
          src={selectedBranch.map}
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0"
        ></iframe>
      </motion.div>

      {/* Social Media Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 text-center"
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Bizni ijtimoiy tarmoqlarda kuzating
        </h3>
        <div className="flex justify-center gap-6 mt-10">
          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-pink-400 via-red-500 to-red-500 text-white shadow-lg transform hover:scale-105 transition-transform"
          >
            <FaInstagram size={28} />
            <span className="font-semibold">Instagram</span>
          </a>

          {/* Telegram */}
          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-600 text-white shadow-lg transform hover:scale-105 transition-transform"
          >
            <FaTelegram size={28} />
            <span className="font-semibold">Telegram</span>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white shadow-lg transform hover:scale-105 transition-transform"
          >
            <FaYoutube size={28} />
            <span className="font-semibold">YouTube</span>
          </a>
        </div>

      </motion.div>
    </section>
  );
}