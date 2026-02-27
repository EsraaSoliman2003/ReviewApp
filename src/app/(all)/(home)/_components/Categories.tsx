"use client"
import { motion } from 'framer-motion';
import {
  Utensils, Coffee, ShoppingBag, ShoppingCart,
  HeartPulse, GraduationCap, Film, Car,
  Home, Wallet, Scissors, MoreHorizontal,
} from 'lucide-react';

const categories = [
  { name: 'مطاعم', icon: Utensils },
  { name: 'كافيهات', icon: Coffee },
  { name: 'محلات تسوق', icon: ShoppingBag },
  { name: 'متاجر الكترونية', icon: ShoppingCart },
  { name: 'صحة', icon: HeartPulse },
  { name: 'تعليم', icon: GraduationCap },
  { name: 'ترفيه', icon: Film },
  { name: 'سيارات', icon: Car },
  { name: 'خدمات منزلية', icon: Home },
  { name: 'خدمات مالية', icon: Wallet },
  { name: 'صالونات', icon: Scissors },
  { name: 'المزيد', icon: MoreHorizontal },
];

export default function CategoriesHoverInvert() {
  return (
    <section className="py-24 px-4 bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            تصفح التصنيفات
          </h2>
          <div className="w-20 h-1 bg-[#070e3b] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            أكثر من ١٠٠٠ نشاط تجاري في كل فئة – hover لاكتشاف المزيد
          </p>
        </motion.div>

        {/* Invert-on-hover Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {categories.map((cat, index) => {
            const IconComponent = cat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.03, duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
                className="group bg-white rounded-xl border border-[#070e3b]/20 shadow-sm hover:shadow-xl p-6 flex flex-col items-center cursor-pointer transition-all duration-300 hover:bg-[#070e3b] hover:border-[#070e3b]"
              >
                <IconComponent 
                  size={36} 
                  className="text-[#070e3b] group-hover:text-white transition-colors duration-300 mb-3" 
                  strokeWidth={1.5} 
                />
                <span className="text-gray-700 group-hover:text-white font-medium text-center transition-colors duration-300">
                  {cat.name}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="text-center text-gray-400 mt-12 text-sm">
          جميع التصنيفات محدثة باستمرار
        </p>
      </div>
    </section>
  );
}