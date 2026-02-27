"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Utensils, Coffee, ShoppingBag, ShoppingCart,
  HeartPulse, GraduationCap, Film, Car,
  Home, Wallet, Scissors, MoreHorizontal,
  ChevronLeft, ChevronRight
} from 'lucide-react';
import { Navigation } from "swiper/modules";
import Link from "next/link";
import { useTranslations } from "next-intl";
import ReviewCard from "@/components/ReviewCard/ReviewCard";

const categories = [
  { id: 1, name: 'مطاعم', icon: Utensils },
  { id: 2, name: 'كافيهات', icon: Coffee },
  { id: 3, name: 'محلات تسوق', icon: ShoppingBag },
  { id: 4, name: 'متاجر الكترونية', icon: ShoppingCart },
  { id: 5, name: 'صحة', icon: HeartPulse },
  { id: 6, name: 'تعليم', icon: GraduationCap },
  { id: 7, name: 'ترفيه', icon: Film },
  { id: 8, name: 'سيارات', icon: Car },
  { id: 9, name: 'خدمات منزلية', icon: Home },
  { id: 10, name: 'خدمات مالية', icon: Wallet },
  { id: 11, name: 'صالونات', icon: Scissors },
  { id: 12, name: 'المزيد', icon: MoreHorizontal },
];

export default function CategoriesSection() {
  const t = useTranslations();
  const [activeId, setActiveId] = useState(categories[0].id);

  const handleChangeCategory = (id: number) => {
    setActiveId(id);
    // Add your custom logic here (e.g., filter products, navigate)
  };

  // Ensure activeId is set when categories load (runs only once)
  useEffect(() => {
    if (categories.length > 0 && activeId !== categories[0].id) {
      setActiveId(categories[0].id);
    }
  }, []); // Empty dependency array – runs only on mount

  return (
    <section className="container mx-auto py-12 px-4" dir={t("dir") === "rtl" ? "rtl" : "ltr"}>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          {t("categories")}
        </h2>

        <div className="flex items-center gap-4">
          <Link
            href="/categories"
            className="text-sm font-medium text-[#070e3b] hover:text-[#070e3b]/80 transition-colors px-3 py-1.5 rounded-md border border-[#070e3b]/20 hover:border-[#070e3b]"
          >
            {t("viewAll")}
          </Link>

          {/* Custom Navigation Arrows */}
          <div className="flex gap-2">
            <button
              className="categories-prev w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 disabled:opacity-40 disabled:cursor-not-allowed transition"
              aria-label="Previous"
            >
              {t("dir") === "rtl" ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
            </button>
            <button
              className="categories-next w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 disabled:opacity-40 disabled:cursor-not-allowed transition"
              aria-label="Next"
            >
              {t("dir") === "rtl" ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".categories-next",
          prevEl: ".categories-prev",
          disabledClass: "disabled",
        }}
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        className="categories-swiper"
      >
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeId === cat.id;

          return (
            <SwiperSlide key={cat.id}>
              <div
                onClick={() => handleChangeCategory(cat.id)}
                className={`
                  group relative h-40 flex flex-col items-center justify-center gap-3
                  rounded-xl border-2 cursor-pointer transition-all duration-200
                  ${isActive
                    ? 'border-[#070e3b] bg-[#070e3b] text-white shadow-lg'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-[#070e3b] hover:shadow-md'
                  }
                `}
              >
                {/* Icon with dynamic color */}
                <Icon
                  size={32}
                  className={`
                    transition-colors duration-200
                    ${isActive ? 'text-white' : 'text-[#070e3b] group-hover:text-[#070e3b]'}
                  `}
                  strokeWidth={1.5}
                />
                <span className="font-medium text-sm sm:text-base">{cat.name}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Optional pagination could be added here */}
      <div className="
        py-20 justify-items-center grid grid-cols-1 md:grid-cols-2 
        lg:grid-cols-3 gap-y-20 lg:gap-x-20 md:gap-x-0 xl:gap-0
      "
      >
        {
          [1, 2, 3].map((num) => (
            <div key={num}>
              <ReviewCard
                name="Sarah Mitchell"
                rate={5}
                review="This service completely transformed our workflow. The team was professional and exceeded our expectations."
                image="/girl.jpg"
              />
            </div>
          ))
        }
        <div className="lg:hidden">
          <ReviewCard
            name="Sarah Mitchell"
            rate={5}
            review="This service completely transformed our workflow. The team was professional and exceeded our expectations."
            image="/girl.jpg"
          />
        </div>
      </div>
    </section>
  );
}