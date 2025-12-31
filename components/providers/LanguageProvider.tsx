'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'am'

interface Translations {
  [key: string]: {
    en: string
    am: string
  }
}

const translations: Translations = {
  // Navigation
  'nav.home': { en: 'Home', am: 'መነሻ' },
  'nav.work': { en: 'Work', am: 'ስራ' },
  'nav.about': { en: 'About', am: 'ስለ' },
  'nav.contact': { en: 'Contact', am: 'ያግኙን' },
  
  // Hero Section
  'hero.greeting': { en: 'Hello, I\'m', am: 'ሰላም፣ እኔ' },
  'hero.title': { en: 'Designer & Developer', am: 'ዲዛይነር እና ገንቢ' },
  'hero.subtitle': { en: 'Crafting digital experiences that blend aesthetics with functionality', am: 'ዲጂታል ልምዶችን የሚፈጥሩ ዲዛይኖች እና ተግባራዊነት' },
  'hero.viewWork': { en: 'View My Work', am: 'ስራዬን ይመልከቱ' },
  'hero.getInTouch': { en: 'Get In Touch', am: 'ያግኙን' },
  
  // About Section
  'about.title': { en: 'About Me', am: 'ስለእኔ' },
  'about.description': { en: 'I create beautiful, functional digital experiences that tell stories and solve problems.', am: 'እኔ ታሪኮችን የሚያስተላልፉ እና ችግሮችን የሚፈቱ ውብ እና ተግባራዊ ዲጂታል ልምዶችን እፈጥራለሁ።' },
  'about.bio': { en: 'With over 5 years of experience in design and development, I specialize in creating user-centered digital solutions that combine aesthetic appeal with functional excellence. My approach is rooted in understanding user needs and translating them into intuitive, accessible, and impactful designs.', am: 'ከ5 ዓመት በላይ የዲዛይን እና የልማት ልምድ ያለኝ፣ የተጠቃሚ-ተኮር ዲጂታል መፍትሄዎችን በመፍጠር ላይ እየተለያየሁ ነው። የእኔ አቀራረብ የተጠቃሚ ፍላጎቶችን መረዳት እና ወደ ምትረዳ፣ ተደራሽ እና ተጽዕኖ ያለው ዲዛይን መቀየር ላይ የተመሠረተ ነው።' },
  'about.experience': { en: 'Years of Experience', am: 'የልምድ ዓመታት' },
  'about.projects': { en: 'Projects Completed', am: 'የተጠናቀቁ ፕሮጀክቶች' },
  'about.clients': { en: 'Happy Clients', am: 'ደስተኛ ደንበኞች' },
  
  // Work Section
  'work.title': { en: 'Featured Work', am: 'የተመረጡ ስራዎች' },
  'work.viewCaseStudy': { en: 'View Case Study', am: 'ጉዳዩን ይመልከቱ' },
  'work.viewProject': { en: 'View Project', am: 'ፕሮጀክቱን ይመልከቱ' },
  
  // Case Study
  'case.overview': { en: 'Overview', am: 'አጠቃላይ እይታ' },
  'case.challenge': { en: 'Challenge', am: 'ፈተና' },
  'case.solution': { en: 'Solution', am: 'መፍትሔ' },
  'case.results': { en: 'Results', am: 'ውጤቶች' },
  'case.before': { en: 'Before', am: 'ከዚህ በፊት' },
  'case.after': { en: 'After', am: 'ከዚህ በኋላ' },
  'case.backToWork': { en: 'Back to Work', am: 'ወደ ስራ ተመለስ' },
  
  // Contact
  'contact.title': { en: 'Let\'s Work Together', am: 'አብረን እንስራ' },
  'contact.description': { en: 'Have a project in mind? I\'d love to hear about it.', am: 'አንድ ፕሮጀክት አለዎት? ስለእሱ ማዳመጥ እመክራለሁ።' },
  'contact.email': { en: 'Email', am: 'ኢሜይል' },
  'contact.send': { en: 'Send Message', am: 'መልእክት ላክ' },
  
  // Footer
  'footer.rights': { en: 'All rights reserved', am: 'ሁሉም መብቶች የተጠበቁ ናቸው' },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    // Only access localStorage on client side
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('language') as Language
        if (saved && (saved === 'en' || saved === 'am')) {
          setLanguage(saved)
        }
      } catch (error) {
        // Handle localStorage errors (e.g., in private browsing mode)
        console.warn('Failed to access localStorage:', error)
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('language', language)
        document.documentElement.lang = language
      } catch (error) {
        // Handle localStorage errors
        console.warn('Failed to save language preference:', error)
        // Still update the document language even if localStorage fails
        document.documentElement.lang = language
      }
    }
  }, [language])

  const t = (key: string): string => {
    const translation = translations[key]
    if (!translation) return key
    return translation[language as 'en' | 'am'] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}

