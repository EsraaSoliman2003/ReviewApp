"use client"; // Required for Framer Motion to work with client-side animations

import ReviewCard from "@/components/ReviewCard/ReviewCard";
import { motion, Variants } from "framer-motion"; import React from "react";

export default function Reviews() {
  const thirdCardVariants: Variants = {
    hidden: { opacity: 0, y: -40 },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },

    float: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };
  return (
    <section className="py-20 px-6 flex-1 h-full hidden md:block">
      <div className="max-w-6xl mx-auto">
        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 justify-items-center">
          {/* First card */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="absolute top-45 lg:top-35 left-[60%] lg:left-[58%]"
          >
            <ReviewCard
              name="Sarah Mitchell"
              rate={5}
              review="This service completely transformed our workflow. The team was professional and exceeded our expectations."
              image="/girl.jpg"
            />
          </motion.div>

          {/* Second card */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute top-110 lg:top-95 xl:top-95 left-[50%] lg:left-[34%] xl:left-[40%]"
          >
            <ReviewCard
              name="Sarah Mitchell"
              rate={5}
              review="This service completely transformed our workflow. The team was professional and exceeded our expectations."
              image="/girl.jpg"
            />
          </motion.div>

          {/* Third card */}
          <motion.div
            variants={thirdCardVariants}
            initial="hidden"
            animate={["visible", "float"]}
            className="absolute top-115 -right-3 xl:-right-5 hidden lg:block"
          >
            <ReviewCard
              name="Sarah Mitchell"
              rate={5}
              review="This service completely transformed our workflow. The team was professional and exceeded our expectations."
              image="/girl.jpg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}