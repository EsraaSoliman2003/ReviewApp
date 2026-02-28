"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

interface Place {
  id: number;
  name: string;
  rating: number;
  description: string;
  userCount: number;
  mainImage: string;
  images: string[];
}

interface PlaceCardProps {
  place: Place;
  index: number;
}

export default function GlassCard({ place, index }: PlaceCardProps) {
  // Helper to render stars
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className="w-4 h-4 fill-amber-400 text-amber-400" />
        ))}
        {hasHalf && (
          <Star key="half" className="w-4 h-4 fill-amber-400 text-amber-400 " fill="currentColor" style={{ clipPath: 'inset(0 50% 0 0)' }} />
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
        ))}
      </>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white backdrop-blur-md rounded-3xl hover:shadow-lg border border-white/20 transition-all duration-500 overflow-hidden flex flex-col w-full max-w-sm mx-auto p-4"
    >
      <div className="absolute inset-0 bg-white pointer-events-none" />
      <div className="relative w-24 h-24 mx-auto mb-5 z-10">

        <Link href={`/place/${place.id}`}>
          <Image
            src={place.mainImage}
            alt={place.name}
            fill
            className="object-cover rounded-full border-2 border-gray-100 group-hover:border-[#070e3b] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative z-10"
          />
        </Link>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-2">
        <Link
          href={`/place/${place.id}`}
          className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent transition-all"
        >
          {place.name}
        </Link>

        <div className="flex items-center gap-1">
          {renderStars(place.rating)}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 text-center">
          {place.description}
        </p>

        {/* Thumbnails */}
        {place.images.length > 1 && (
          <div className="flex gap-1 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300">
            {place.images.slice(1, 4).map((img, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden border-2 border-gray-100 hover:border-gray-200 transition-all"
              >
                <Image src={img} alt="" fill className="object-cover hover:scale-110 transition-transform duration-300" />
              </div>
            ))}
            {place.images.length > 4 && (
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-white/30 backdrop-blur-sm flex items-center justify-center text-sm font-medium text-gray-700 border-2 border-gray-100 hover:border-gray-200 transition-all">
                +{place.images.length - 4}
              </div>
            )}
          </div>
        )}

        {/* User Count with icon */}
        <div className="flex items-center justify-center gap-1 text-xs text-gray-500 mt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
            />
          </svg>
          <span className="">
            {place.userCount.toLocaleString()}
          </span>
        </div>
      </div>
    </motion.div>
  );
}