# Modern Portfolio & Case Study Hub

A premium personal portfolio website that feels like a design studio —not a basic resume page. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

### Core Features
- **Interactive Case Study Pages** - Detailed project showcases with before/after comparisons
- **Before/After Design Comparisons** - Interactive slider component for visual comparisons
- **Smooth Scrolling** - Custom smooth scroll implementation with micro-animations
- **Dark/Light Theme** - Seamless theme switching with persistent preferences
- **Multi-language Support** - English and Amharic (አማርኛ) language toggle
- **Responsive Design** - Mobile-first approach with perfect layouts on all devices

### Design Excellence
- **Typography Mastery** - Beautiful font pairing (Inter + Playfair Display)
- **Spacing System** - Consistent, harmonious spacing throughout
- **Animation Discipline** - Subtle, purposeful micro-animations
- **Modern UI** - Clean, professional design studio aesthetic

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd modern_portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
modern_portfolio/
├── app/
│   ├── case-study/
│   │   └── [slug]/
│   │       └── page.tsx      # Dynamic case study pages
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Homepage
├── components/
│   ├── providers/
│   │   ├── LanguageProvider.tsx  # Language context
│   │   └── ThemeProvider.tsx     # Theme context
│   ├── AboutSection.tsx      # About section component
│   ├── BeforeAfter.tsx       # Before/after comparison slider
│   ├── ContactSection.tsx    # Contact form section
│   ├── Footer.tsx            # Footer component
│   ├── Hero.tsx              # Hero section
│   ├── LanguageToggle.tsx    # Language switcher
│   ├── Navigation.tsx         # Main navigation
│   ├── SmoothScroll.tsx      # Smooth scroll handler
│   ├── ThemeToggle.tsx       # Theme switcher
│   └── WorkSection.tsx       # Work/projects section
└── package.json
```

## 🎨 Customization

### Adding New Case Studies

Edit `app/case-study/[slug]/page.tsx` and add your case study data to the `caseStudies` object:

```typescript
const caseStudies: CaseStudyData = {
  'your-slug': {
    title: { en: 'Your Title', am: 'የእርስዎ ርዕስ' },
    overview: { en: '...', am: '...' },
    // ... other fields
  }
}
```

### Customizing Colors

Edit `tailwind.config.js` to modify the color palette:

```javascript
primary: {
  500: '#your-color',
  // ... other shades
}
```

### Adding Translations

Edit `components/providers/LanguageProvider.tsx` and add new translation keys:

```typescript
const translations: Translations = {
  'your.key': { en: 'English', am: 'አማርኛ' },
}
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Theme**: next-themes
- **Fonts**: Inter, Playfair Display (Google Fonts)

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Design inspiration from modern design studios
- Built with love for beautiful, functional web experiences


