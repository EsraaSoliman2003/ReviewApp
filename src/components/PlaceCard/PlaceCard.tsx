"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Place {
  id: number;
  name: string;
  rating: number;
  description: string;
  userCount: number;
  duration: string;
  mainImage: string;
  images: string[];
}

interface PlaceCardProps {
  place: Place;
  index: number;
}

export default function HorizontalCard({ place, index }: PlaceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col sm:flex-row w-full max-w-3xl mx-auto"
    >
      {/* Image Section */}
      <div className="relative w-full sm:w-2/5 h-48 sm:h-auto overflow-hidden">
        <Link href={`/place/${place.id}`}>
          <Image
            src={place.mainImage}
            alt={place.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>
        {/* Duration Badge */}
        <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
          {place.duration}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 p-4 flex flex-col">
        {/* Header: Name + Rating */}
        <div className="flex items-start justify-between mb-2">
          <Link href={`/place/${place.id}`} className="text-lg font-bold text-gray-800 line-clamp-1 pr-2">
            {place.name}
          </Link>
          <span className="flex items-center gap-1 text-sm font-semibold text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full">
            ★ {place.rating}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-2 mb-3">
          {place.description}
        </p>

        {/* User Count */}
        <div className="flex items-center gap-1 text-xs text-gray-500 mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
            />
          </svg>
          <span>
            {place.userCount.toLocaleString()} {place.userCount > 1 ? "Reviews" : "Review"}
          </span>
        </div>

        {/* Thumbnail Strip */}
        {place.images.length > 1 && (
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-gray-300">
            {place.images.slice(1, 5).map((img, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border border-gray-200"
              >
                <Image src={img} alt="" fill className="object-cover" />
              </div>
            ))}
            {place.images.length > 5 && (
              <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center text-sm font-medium text-gray-600 border border-gray-200">
                +{place.images.length - 5}
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}