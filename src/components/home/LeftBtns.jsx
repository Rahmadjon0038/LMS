import React, { useState, useEffect } from 'react';
import { FaHome, FaInfoCircle, FaBook, FaUsers, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

function FloatingSemiTab() {
  const buttons = [
    { icon: <FaHome />, label: 'Home', href: '#home' },
    { icon: <FaInfoCircle />, label: 'About', href: '#about' },
    { icon: <FaBook />, label: 'Courses', href: '#courses' },
    { icon: <FaUsers />, label: 'Teams', href: '#teams' },
    { icon: <FaEnvelope />, label: 'Contact', href: '#contact' },
  ];

  const [open, setOpen] = useState(false);

  // 4 soniya keyin avtomatik yopish
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => setOpen(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50">
      {/* Semi-tab */}
      <div
        onClick={() => setOpen(!open)}
        className="w-4 h-16 bg-purple-600 rounded-r-full cursor-pointer hover:bg-purple-700 transition-colors shadow-lg flex items-center justify-center relative z-50"
      >
        {/* Optional icon */}
      </div>

      {/* Animated icons */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -60, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="absolute left-4 top-0 flex flex-col gap-4 ml-4"
          >
            {buttons.map((btn) => (
              <a
                key={btn.label}
                href={btn.href}
                className="relative flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 bg-opacity-40 text-white shadow-lg hover:bg-opacity-90 transition-all"
              >
                {btn.icon}
                <span className="absolute left-14 bg-gray-900 text-white px-3 py-1 rounded-full whitespace-nowrap text-sm">
                  {btn.label}
                </span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default FloatingSemiTab;
