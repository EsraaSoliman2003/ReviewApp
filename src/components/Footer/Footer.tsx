import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function Footer() {
  const t = useTranslations(); // assuming you have a Footer namespace in your translations
  const dir = t('dir') === 'rtl' ? 'rtl' : 'ltr';

  const quickLinks = [
    { href: '/about', label: t('about') },
    { href: '/contact', label: t('contact') },
    { href: '/privacy', label: t('privacy') },
    { href: '/terms', label: t('terms') },
    { href: '/faq', label: t('faq') },
  ];

  const categories = [
    { href: '/categories/restaurants', label: t('restaurants') },
    { href: '/categories/cafes', label: t('cafes') },
    { href: '/categories/shopping', label: t('shopping') },
    { href: '/categories/health', label: t('health') },
    { href: '/categories/education', label: t('education') },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Newsletter */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">
              {t('brandName') || 'موقعك'}
            </h3>
            <p className="text-sm mb-4">
              {t('footerDescription') || 'أفضل منصة لاكتشاف الأعمال والخدمات في منطقتك.'}
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder={t('emailPlaceholder') || 'بريدك الإلكتروني'}
                className="flex-1 bg-gray-800 text-white rounded-r-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#070e3b]"
              />
              <button className="bg-[#070e3b] hover:bg-[#070e3b]/80 text-white px-4 py-2 rounded-l-lg text-sm font-medium transition">
                {t('subscribe') || 'اشترك'}
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">{t('quickLinks') || 'روابط سريعة'}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition flex items-center gap-1">
                    {dir === 'rtl' ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">{t('categories') || 'التصنيفات'}</h3>
            <ul className="space-y-2">
              {categories.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition flex items-center gap-1">
                    {dir === 'rtl' ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">{t('contact') || 'اتصل بنا'}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <MapPin size={18} className="text-[#070e3b]" />
                <span className="text-sm">{t('address') || 'شارع المثال، مدينة، بلد'}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-[#070e3b]" />
                <span className="text-sm" dir="ltr">+966 123 456 789</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-[#070e3b]" />
                <a href="mailto:info@example.com" className="text-sm hover:text-white">info@example.com</a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-2 rounded-full hover:bg-[#070e3b] transition"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} {t('brandName') || 'موقعك'}. {t('rights') || 'جميع الحقوق محفوظة.'}</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white">{t('privacy') || 'سياسة الخصوصية'}</Link>
            <Link href="/terms" className="hover:text-white">{t('terms') || 'شروط الاستخدام'}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}