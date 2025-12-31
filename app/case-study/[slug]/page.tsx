'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { BeforeAfter } from '@/components/BeforeAfter'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface CaseStudyData {
  [key: string]: {
    title: { en: string; am: string }
    overview: { en: string; am: string }
    challenge: { en: string; am: string }
    solution: { en: string; am: string }
    results: { en: string; am: string }
    beforeImage: string
    afterImage: string
  }
}

const caseStudies: CaseStudyData = {
  'ecommerce-redesign': {
    title: { en: 'E-Commerce Platform Redesign', am: 'የኢ-ኮሜርስ መድረክ እንደገና ዲዛይን' },
    overview: {
      en: 'A complete redesign of an e-commerce platform focusing on improving user experience, increasing conversions, and modernizing the visual identity.',
      am: 'የኢ-ኮሜርስ መድረክ ሙሉ እንደገና ዲዛይን የተጠቃሚ ልምድን ማሻሻል፣ የመለወጥ መጠንን ማሳደግ እና የቪዥዋል ማንነትን ዘመናዊነት ላይ ትኩረት በማድረግ።',
    },
    challenge: {
      en: 'The existing platform had a high bounce rate, low conversion rate, and outdated design that didn\'t reflect the brand\'s modern values. Users found it difficult to navigate and complete purchases.',
      am: 'የነበረው መድረክ ከፍተኛ የመዘዋወር መጠን፣ ዝቅተኛ የመለወጥ መጠን እና የንግዱ ዘመናዊ እሴቶችን የማያንጸባርቅ የቆየ ዲዛይን ነበረው። ተጠቃሚዎች መዘዋወር እና ግዢዎችን ማጠናቀቅ አስቸጋሪ ነበር።',
    },
    solution: {
      en: 'We redesigned the entire user interface with a focus on clarity, simplicity, and visual hierarchy. Implemented a modern design system, improved navigation, streamlined checkout process, and added interactive elements to enhance engagement.',
      am: 'ጠቅላላውን የተጠቃሚ በይነገጽ በግልጽነት፣ ቀላልነት እና የቪዥዋል ደረጃ ላይ ትኩረት በማድረግ እንደገና አዲስ አድርገናል። ዘመናዊ ዲዛይን ስርዓት አተገባብረናል፣ አሰሳን ማሻሻል፣ የግዢ ሂደቱን ማቃለል እና ተሳትፎን ለማሻሻል ኢንተራክቲቭ አካላትን ጨመርን።',
    },
    results: {
      en: 'Conversion rate increased by 45%, bounce rate decreased by 30%, and user satisfaction scores improved significantly. The new design received positive feedback from both users and stakeholders.',
      am: 'የመለወጥ መጠን በ45% ጨምሯል፣ የመዘዋወር መጠን በ30% ቀንሷል፣ እና የተጠቃሚ እርካታ ነጥቦች በእጅጉ ተሻሽለዋል። አዲሱ ዲዛይን ከተጠቃሚዎች እና ከገንዘብ አበርካቾች የአዎንታዊ ግብረመልስ ተቀብሏል።',
    },
    beforeImage: 'https://via.placeholder.com/1200x800/d1d5db/6b7280?text=Before',
    afterImage: 'https://via.placeholder.com/1200x800/0ea5e9/ffffff?text=After',
  },
  'mobile-banking': {
    title: { en: 'Mobile Banking App', am: 'የሞባይል ባንክ መተግበሪያ' },
    overview: {
      en: 'Design and development of a modern mobile banking application with focus on security, usability, and user trust.',
      am: 'የዘመናዊ ሞባይል ባንክ መተግበሪያ ዲዛይን እና ልማት በደህንነት፣ በመጠቀም እና በተጠቃሚ እምነት ላይ ትኩረት በማድረግ።',
    },
    challenge: {
      en: 'Creating a banking app that balances security requirements with ease of use, ensuring users feel confident while managing their finances.',
      am: 'ደህንነት መስፈርቶችን ከመጠቀም ቀላልነት ጋር የሚያመሳስል ባንክ መተግበሪያ መፍጠር፣ ተጠቃሚዎች ገንዘቦቻቸውን ሲያስተዳድሩ እርግጠኛ እንዲሆኑ ማረጋገጥ።',
    },
    solution: {
      en: 'Designed an intuitive interface with clear visual hierarchy, implemented biometric authentication, and created a seamless user flow for common banking tasks.',
      am: 'ግልጽ የቪዥዋል ደረጃ ያለው ምትረዳ በይነገጽ አዲስ አድርገናል፣ ባዮሜትሪክ ማረጋገጫ አተገባብረናል፣ እና ለጋራ የባንክ ተግባራት ለምትረዳ የተጠቃሚ ፍሰት ፈጥረናል።',
    },
    results: {
      en: 'User adoption increased by 60%, transaction completion rate improved by 50%, and the app received high ratings for security and usability.',
      am: 'የተጠቃሚ አቀባበል በ60% ጨምሯል፣ የግብይት ማጠናቀቅ መጠን በ50% ተሻሽሏል፣ እና መተግበሪያው ለደህንነት እና ለመጠቀም ከፍተኛ ነጥቦችን ተቀብሏል።',
    },
    beforeImage: 'https://via.placeholder.com/1200x800/d1d5db/6b7280?text=Before',
    afterImage: 'https://via.placeholder.com/1200x800/0ea5e9/ffffff?text=After',
  },
  'brand-identity': {
    title: { en: 'Brand Identity System', am: 'የምልክት ማንነት ስርዓት' },
    overview: {
      en: 'Comprehensive brand identity design including logo, color palette, typography, and visual guidelines for a tech startup.',
      am: 'ለቴክ ስታርታፕ ሎጎ፣ የቀለም ፔሌት፣ የፊደል አይነት እና የቪዥዋል መመሪያዎችን ጨምሮ ሙሉ የምልክት ማንነት ዲዛይን።',
    },
    challenge: {
      en: 'Creating a cohesive brand identity that reflects innovation, trustworthiness, and modernity while standing out in a competitive market.',
      am: 'አዲስነት፣ እምነት እና ዘመናዊነትን የሚያንጸባርቅ እና በውድድር ገበያ ውስጥ የሚለይ ወጥነት ያለው የምልክት ማንነት መፍጠር።',
    },
    solution: {
      en: 'Developed a unique visual language with custom typography, a distinctive color palette, and flexible logo system that works across all touchpoints.',
      am: 'በሁሉም የመንካት ነጥቦች ውስጥ የሚሰራ ልዩ የቪዥዋል ቋንቋ፣ ልዩ የፊደል አይነት፣ ልዩ የቀለም ፔሌት እና ተለዋዋጭ ሎጎ ስርዓት አዘጋጅተናል።',
    },
    results: {
      en: 'Brand recognition increased significantly, and the identity system provided a strong foundation for all marketing materials and digital presence.',
      am: 'የምልክት ማወቅ በእጅጉ ጨምሯል፣ እና የማንነት ስርዓቱ ለሁሉም የግብይት ቁሳቁሶች እና ዲጂታል መኖር ጠንካራ መሠረት አቅርቧል።',
    },
    beforeImage: 'https://via.placeholder.com/1200x800/d1d5db/6b7280?text=Before',
    afterImage: 'https://via.placeholder.com/1200x800/0ea5e9/ffffff?text=After',
  },
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const { t, language } = useLanguage()
  const caseStudy = caseStudies[slug]

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <Link href="/" className="text-primary-600 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:gap-4 transition-all mb-8"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {t('case.backToWork')}
              </Link>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6">
                {caseStudy.title[language as 'en' | 'am']}
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Before/After Comparison */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <BeforeAfter
                beforeImage={caseStudy.beforeImage}
                afterImage={caseStudy.afterImage}
              />
            </motion.div>
          </div>
        </section>

        {/* Case Study Content */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
                {t('case.overview')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {caseStudy.overview[language as 'en' | 'am']}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
                {t('case.challenge')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {caseStudy.challenge[language as 'en' | 'am']}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
                {t('case.solution')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {caseStudy.solution[language as 'en' | 'am']}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-primary-50 dark:bg-primary-900/20 p-8 rounded-2xl"
            >
              <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
                {t('case.results')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {caseStudy.results[language as 'en' | 'am']}
              </p>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}

