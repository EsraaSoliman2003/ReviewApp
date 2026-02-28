"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Content() {
  // Animation variants for each element
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Typing animation state
  const [searchQuery, setSearchQuery] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // List of placeholder texts to cycle through
  const placeholders = [
    "ابحث في آراء العملاء...",
    "اكتب اسم العميل...",
    "اكتب للبحث...",
    "استكشف التجارب...",
  ];

  // Ref to store timeout
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Typing effect logic
  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % placeholders.length;
      const fullText = placeholders[i];

      setPlaceholder((prev) => {
        if (isDeleting) {
          // Deleting: remove last character
          return fullText.substring(0, prev.length - 1);
        } else {
          // Typing: add next character
          return fullText.substring(0, prev.length + 1);
        }
      });

      // Adjust speed and handle transitions
      let nextSpeed = isDeleting ? 100 : 150;

      if (!isDeleting && placeholder === fullText) {
        // Finished typing, pause then start deleting
        nextSpeed = 2000; // wait 2 seconds
        setIsDeleting(true);
      } else if (isDeleting && placeholder === "") {
        // Finished deleting, move to next phrase
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        nextSpeed = 500; // slight pause before typing next
      }

      timeoutRef.current = setTimeout(handleTyping, nextSpeed);
    };

    timeoutRef.current = setTimeout(handleTyping, typingSpeed);

    // Cleanup timeout on unmount or when dependencies change
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [placeholder, isDeleting, loopNum, placeholders, typingSpeed]);

  return (
    <div
      className="
      flex flex-col justify-center items-center md:items-start 
      py-12 md:py-35 text-white h-screen lg:h-auto text-center md:text-start
    "
    >
      <div className="flex flex-col gap-8">
        {/* Animated heading */}
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-[2.7rem] lg:text-6xl font-bold leading-tight"
        >
          آراء عملائنا
        </motion.h2>

        {/* Animated paragraph */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-300 text-lg md:text-lg max-w-xl lg:px-3 leading-relaxed w-full md:w-1/2 lg:w-1/2 xl:w-2/3"
        >
          اكتشف أفضل الأماكن من خلال تجارب وآراء حقيقية.
          نساعدك في اختيار وجهتك القادمة بكل سهولة وثقة.
        </motion.p>

        {/* Animated search bar with typing placeholder */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full max-w-md md:hidden m-auto"
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={placeholder}
            className="w-full px-4 py-3 rounded-full bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </motion.div>

        {/* Animated button */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <button className="bg-white text-black py-2 px-10 rounded-3xl text-xl font-semibold">
            اكتشف المزيد
          </button>
        </motion.div>
      </div>
    </div>
  );
}