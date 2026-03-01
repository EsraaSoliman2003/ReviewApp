"use client"; // Required for Framer Motion to work with client-side animations

import ReviewCard from "@/components/ReviewCard/ReviewCard";
import { motion, Variants } from "framer-motion";import { useTranslations } from "next-intl";
 import Image from "next/image";
import React from "react";

export default function Reviews() {
  const t = useTranslations();
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

  const place = {
    id: 1,
    name: "عنوان القهوة",
    image: "/cafe.jpg",
    images: [
      "/girl.jpg",
      "/girl.jpg",
      "/girl.jpg",
      "/girl.jpg",
    ]
  }

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
            className={`absolute top-45 lg:top-35 ${t("dir") === "rtl" ? "right-[60%] lg:right-[58%]" : "left-[60%] lg:left-[58%]"}`}
          >
            <ReviewCard
              id={1}
              name="أحمد على"
              rate={5}
              review="المكان كان رائع جدًا، الخدمة ممتازة والأجواء مريحة. بالتأكيد سأكرر الزيارة مرة أخرى."
              image="/man.jpg"
              place={place}
            />
          </motion.div>

          {/* Second card */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`absolute top-110 lg:top-95 xl:top-95 ${t("dir") === "rtl" ? "right-[50%] lg:right-[34%] xl:right-[40%]" : "left-[50%] lg:left-[34%] xl:left-[40%]"}`}
          >
            <ReviewCard
              id={1}
              name="أحمد على"
              rate={5}
              review="المكان كان رائع جدًا، الخدمة ممتازة والأجواء مريحة. بالتأكيد سأكرر الزيارة مرة أخرى."
              image="/man.jpg"
              place={place}
            />
          </motion.div>

          {/* Third card */}
          <motion.div
            variants={thirdCardVariants}
            initial="hidden"
            animate={["visible", "float"]}
            className={`absolute top-115 ${t("dir") === "rtl" ? "-left-3 xl:-left-5" : "-right-3 xl:-right-5"} hidden lg:block`}
          >
            <ReviewCard
              id={1}
              name="أحمد على"
              rate={5}
              review="المكان كان رائع جدًا، الخدمة ممتازة والأجواء مريحة. بالتأكيد سأكرر الزيارة مرة أخرى."
              image="/man.jpg"
              place={place}

            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}