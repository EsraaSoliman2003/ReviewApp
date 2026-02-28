import React from 'react';
import Link from 'next/link';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ChevronLeft
} from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const quickLinks = [
    { href: '/about', label: 'عن الموقع' },
    { href: '/contact', label: 'اتصل بنا' },
    { href: '/privacy', label: 'سياسة الخصوصية' },
    { href: '/terms', label: 'شروط الاستخدام' },
    { href: '/faq', label: 'الأسئلة الشائعة' },
  ];

  const categories = [
    { href: '/categories/restaurants', label: 'مطاعم' },
    { href: '/categories/cafes', label: 'مقاهي' },
    { href: '/categories/shopping', label: 'تسوق' },
    { href: '/categories/health', label: 'صحة' },
    { href: '/categories/education', label: 'تعليم' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'فيسبوك' },
    { icon: Twitter, href: 'https://twitter.com', label: 'تويتر' },
    { icon: Instagram, href: 'https://instagram.com', label: 'انستغرام' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'لينكد إن' },
    { icon: Youtube, href: 'https://youtube.com', label: 'يوتيوب' },
  ];

  return (
    <footer className="bg-[#070e3b] text-gray-300" dir="rtl">
      <div className="container mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & description */}
          <div className=''>
            <Link href="/" className="relative w-25 h-20 block m-auto md:m-0">
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>
            <p className="text-sm max-w-xs md:w-50 mt-3 m-auto md:m-0 md:mt-3">
              أفضل منصة لاكتشاف الأعمال والخدمات في منطقتك.
            </p>
          </div>

          {/* روابط سريعة */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition flex items-center gap-1"
                  >
                    <ChevronLeft size={16} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* التصنيفات */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">التصنيفات</h3>
            <ul className="space-y-2">
              {categories.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition flex items-center gap-1"
                  >
                    <ChevronLeft size={16} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* معلومات الاتصال */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">اتصل بنا</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <MapPin size={18} className="text-[#858585]" />
                <span className="text-sm">شارع المثال، مدينة، بلد</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-[#858585]" />
                <span className="text-sm" dir="ltr">+966 123 456 789</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-[#858585]" />
                <a
                  href="mailto:info@example.com"
                  className="text-sm hover:text-white"
                >
                  info@example.com
                </a>
              </li>
            </ul>

            {/* أيقونات التواصل */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-2 rounded-full hover:bg-[#858585] transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* الشريط السفلي */}
        <div className="border-t border-[#858585]/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} موقعك. جميع الحقوق محفوظة.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white">سياسة الخصوصية</Link>
            <Link href="/terms" className="hover:text-white">شروط الاستخدام</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}