// app/components/Contact.jsx
import { useState } from 'react';
import { MapPin, Phone, Mail, Instagram, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion'; // Animatsiyalar uchun

export default function Contact() {
  const branches = [
    {
      id: 1,
      name: 'Bosh Filial',
      address: 'Namangan, Davlatabot Otchapar bekati yonida',
      phone: '+998 90 123 45 67',
      email: 'info@namangan-it.uz',
      map: 'https://www.google.com/maps/embed?pb=...BoshFilialMap...',
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
      map: 'https://www.google.com/maps/embed?pb=...Filial3Map...',
    },
  ];

  const [selectedBranch, setSelectedBranch] = useState(branches[0]);

  return (
    <section
      id="contact"
      className="min-h-screen px-4 py-16 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100"
    >
      <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight"
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
            className={`relative cursor-pointer p-6 rounded-2xl shadow-lg transition-all duration-300 bg-white ${
              selectedBranch.id === branch.id
                ? 'border-2 border-purple-500 bg-gradient-to-r from-purple-50 to-indigo-50'
                : 'hover:bg-gray-50'
            }`}
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{branch.name}</h2>
            <div className="flex items-center gap-3 mb-3">
              <MapPin size={20} className="text-purple-500" />
              <p className="text-sm text-gray-700">{branch.address}</p>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <Phone size={20} className="text-purple-500" />
              <p className="text-sm text-gray-700">{branch.phone}</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={20} className="text-purple-500" />
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
        className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
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
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Bizni ijtimoiy tarmoqlarda kuzating
        </h3>
        <div className="flex justify-center gap-6">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram size={28} className="text-gray-600 hover:text-purple-600 transition-colors" />
          </a>
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
            <MessageCircle size={28} className="text-gray-600 hover:text-purple-600 transition-colors" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}