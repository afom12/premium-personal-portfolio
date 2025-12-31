'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/providers/LanguageProvider'

const stats = [
  { label: 'about.experience', value: '5+' },
  { label: 'about.projects', value: '50+' },
  { label: 'about.clients', value: '30+' },
]

const skills = [
  { name: 'Design', icon: '🎨' },
  { name: 'Development', icon: '💻' },
  { name: 'Strategy', icon: '📊' },
  { name: 'Branding', icon: '✨' },
  { name: 'UI/UX', icon: '🎯' },
  { name: 'Animation', icon: '🎬' },
]

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-8" />
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            {t('about.description')}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {t('about.bio')}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md text-center"
            >
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {t(stat.label)}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md text-center cursor-default"
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white">
                {skill.name}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


