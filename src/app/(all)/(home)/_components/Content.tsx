"use client"
import React from 'react';
import { motion } from 'framer-motion';

export default function Content() {
  // Animation variants for each element
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col justify-between py-12 md:py-35 text-white">
      <div className='flex flex-col gap-8'>
        {/* Animated heading */}
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
        >
          Clients
          Testimonial
        </motion.h2>

        {/* Animated paragraph */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed w-full lg:w-2/3"
        >
          We help businesses grow with powerful digital solutions tailored to
          their goals. Our team focuses on strategy, design, and performance
          to deliver measurable impact.
        </motion.p>
      </div>

      {/* Animated button */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-12"
      >
        <button className="bg-white text-black py-2 px-10 rounded-3xl text-xl font-semibold">
          Read More
        </button>
      </motion.div>
    </div>
  );
}