'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/providers/LanguageProvider'
import Link from 'next/link'
import Image from 'next/image'

interface Project {
  id: string
  title: { en: string; am: string }
  description: { en: string; am: string }
  category: { en: string; am: string }
  image: string
  slug: string
}

const projects: Project[] = [
  {
    id: '1',
    title: { en: 'E-Commerce Platform Redesign', am: 'የኢ-ኮሜርስ መድረክ እንደገና ዲዛይን' },
    description: { en: 'A complete redesign of an e-commerce platform focusing on user experience and conversion optimization.', am: 'የኢ-ኮሜርስ መድረክ ሙሉ እንደገና ዲዛይን የተጠቃሚ ልምድ እና የመለወጥ ማመቻቻት ላይ ትኩረት በማድረግ።' },
    category: { en: 'Web Design', am: 'የድር ዲዛይን' },
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    slug: 'ecommerce-redesign',
  },
  {
    id: '2',
    title: { en: 'Mobile Banking App', am: 'የሞባይል ባንክ መተግበሪያ' },
    description: { en: 'A modern mobile banking application with intuitive UX and robust security features.', am: 'የዘመናዊ ሞባይል ባንክ መተግበሪያ ከምትረዳ የተጠቃሚ ልምድ እና ጠንካራ የደህንነት ባህሪያት።' },
    category: { en: 'Mobile App', am: 'የሞባይል መተግበሪያ' },
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
    slug: 'mobile-banking',
  },
  {
    id: '3',
    title: { en: 'Brand Identity System', am: 'የምልክት ማንነት ስርዓት' },
    description: { en: 'Comprehensive brand identity design including logo, color palette, and visual guidelines.', am: 'ሙሉ የምልክት ማንነት ዲዛይን ሎጎ፣ የቀለም ፔሌት እና የቪዥዋል መመሪያዎችን ጨምሮ።' },
    category: { en: 'Branding', am: 'የምልክት ማንነት' },
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    slug: 'brand-identity',
  },
  {
    id: '4',
    title: { en: 'SaaS Dashboard Design', am: 'የ SaaS ዳሽቦርድ ዲዛይን' },
    description: { en: 'A comprehensive dashboard design for a SaaS platform with data visualization and analytics features.', am: 'የውሂብ ምስላዊነት እና የትንታኔ ባህሪያት ያሉት ለ SaaS መድረክ ሙሉ ዳሽቦርድ ዲዛይን።' },
    category: { en: 'UI/UX Design', am: 'የ UI/UX ዲዛይን' },
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    slug: 'saas-dashboard',
  },
  {
    id: '5',
    title: { en: 'Restaurant Website', am: 'የምግብ ቤት ድር ጣቢያ' },
    description: { en: 'A modern, responsive website for a fine dining restaurant with online reservation system.', am: 'የመስመር ላይ ምዝገባ ስርዓት ያለው ለጥራት የምግብ ቤት ዘመናዊ፣ ምላሽ የሚሰጥ ድር ጣቢያ።' },
    category: { en: 'Web Design', am: 'የድር ዲዛይን' },
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
    slug: 'restaurant-website',
  },
  {
    id: '6',
    title: { en: 'Fitness App Design', am: 'የአካል ብቃት መተግበሪያ ዲዛይን' },
    description: { en: 'A mobile fitness application with workout tracking, progress monitoring, and social features.', am: 'የአካል ብቃት መሻሻል፣ የመሻሻል ምልከታ እና ማህበራዊ ባህሪያት ያሉት የሞባይል አካል ብቃት መተግበሪያ።' },
    category: { en: 'Mobile App', am: 'የሞባይል መተግበሪያ' },
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    slug: 'fitness-app',
  },
]

export function WorkSection() {
  const { t, language } = useLanguage()

  return (
    <section id="work" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-gray-900 dark:text-white mb-4">
            {t('work.title')}
          </h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-primary-400 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Link 
                href={`/case-study/${project.slug}`}
                className="focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-2xl"
                aria-label={`View case study: ${project.title[language as 'en' | 'am']}`}
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-64 bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/50 dark:to-purple-900/50 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title[language as 'en' | 'am']}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 dark:bg-gray-900/90 rounded-full text-xs font-semibold text-gray-900 dark:text-white backdrop-blur-sm">
                      {project.category[language as 'en' | 'am']}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {project.title[language as 'en' | 'am']}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {project.description[language as 'en' | 'am']}
                    </p>
                    <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                      {t('work.viewCaseStudy')}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

