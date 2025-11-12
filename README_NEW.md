# Đồi Mới — Đường Lối Phát Triển Việt Nam

A modern, responsive web application built with **React 19**, **Vite**, and **Tailwind CSS** showcasing Vietnam's reform policies and development strategy from 1986 to 2045.

## 🎯 Project Overview

This project presents comprehensive educational content about Vietnam's "Đổi Mới" (Renovation/Reform) policies, including:

- **Chapter I**: Historical Background and the Renovation Path (1986)
- **Chapter II**: 12th National Congress (2016) - Development Direction 2016-2020
- **Chapter III**: 13th National Congress (2021) - Vision to 2045
- **Chapter IV**: Role and Responsibility of Youth

## ✨ Features

- 🎨 **Modern UI/UX** with harmonious color palette (Blue #2563EB, Teal #06B6D4)
- 📱 **Fully Responsive** - Mobile, tablet, desktop optimized
- ⚡ **Smooth Animations** - Framer Motion transitions and interactions
- ♿ **Accessible** - Semantic HTML, ARIA labels, keyboard navigation
- 📖 **Clean Content Structure** - Well-organized chapters with detailed sections
- 🚀 **High Performance** - Optimized build with Vite
- 🎯 **Fast Development** - Hot module reloading (HMR)

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.6
- **Styling**: Tailwind CSS 3.4.0
- **Routing**: React Router 7.9.1
- **Animations**: Framer Motion 12.23.16
- **Icons**: Lucide React 0.544.0
- **Linting**: ESLint 9.35.0

## 📦 Installation & Setup

### Prerequisites

- **Node.js**: v16 or higher (recommend v18+)
- **npm**: v8 or higher

### Quick Start

```bash
# 1. Clone the repository
git clone <repository-url>
cd hcm-web

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

The application will be available at **http://localhost:5173**

## 📜 Available Scripts

```bash
# Start development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint to check code quality
npm run lint
```

## 🏗️ Project Structure

```
src/
├── assets/                 # Static assets
├── components/
│   ├── Header.jsx         # Navigation header
│   ├── Footer.jsx         # Footer component
│   ├── ui.jsx             # Reusable UI components
│   │   ├── Button
│   │   ├── Card
│   │   ├── Input
│   │   ├── Container
│   │   └── Section
├── data/
│   └── content.js         # Static content data from noidung2.txt
├── layouts/               # Layout wrappers
├── pages/
│   ├── HomePage.jsx       # Landing page
│   └── ChapterPage.jsx    # Chapter detail pages
├── App.jsx               # Main app with routing
├── App.css               # Global styles
└── main.jsx              # Entry point

public/                   # Public static files
index.html               # HTML template
vite.config.js          # Vite configuration
tailwind.config.js      # Tailwind configuration
package.json            # Dependencies and scripts
```

## 🎨 Design & Color Palette

### Primary Colors
- **Primary**: `#2563EB` (Blue-600) - Main actions and text
- **Accent**: `#06B6D4` (Teal-400) - Highlights and secondary actions
- **Neutral**: `#0F172A` (Slate-900) - Dark text
- **Light**: `#64748B` (Slate-500) - Muted text

### Semantic Colors
- **Success**: `#10B981` (Emerald-500)
- **Warning**: `#F59E0B` (Amber-500)
- **Danger**: `#EF4444` (Red-500)

### Typography
- **Font**: Inter, Be Vietnam Pro
- **Headings**: Bold, high contrast
- **Body**: 16px base, 1.75 line-height for readability

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All components follow mobile-first design approach.

## ♿ Accessibility

The project follows **WCAG 2.1 AA** standards:

- ✅ Semantic HTML elements
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Focus indicators (blue outline)
- ✅ Color contrast ratios > 4.5:1
- ✅ Reduced motion preferences respected
- ✅ Alt text for images (when used)

## 🚀 Performance

- **Lighthouse Targets**:
  - Performance: ≥ 85
  - Accessibility: ≥ 95
  - Best Practices: ≥ 90
  - SEO: ≥ 90

- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Lazy loading ready
- **Bundle Size**: ~117KB gzipped

## 📄 Content Data Structure

All content is stored in `/src/data/content.js` and structured as:

```javascript
{
  chapters: [
    {
      id: "chapter-1",
      number: "I",
      title: "Chapter Title",
      description: "Brief description",
      sections: [
        {
          id: "section-id",
          heading: "Section Title",
          content: "Main content text",
          keyPoints: [...],
          highlights: [...],
          // ... other structured data
        }
      ]
    }
  ]
}
```

## 🔧 Development Workflow

### Adding a New Chapter

1. Update content in `/src/data/content.js`
2. Components automatically render based on data structure
3. Navigation updates automatically via React Router

### Styling Components

- Use Tailwind utility classes for styling
- Component variants defined in `/src/components/ui.jsx`
- Global styles in `/src/App.css`
- Theme colors can be customized in `tailwind.config.js`

### Adding Animations

Use **Framer Motion** for all animations:

```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
  viewport={{ once: true }}
>
  Content here
</motion.div>
```

## 🐛 Known Issues & Limitations

- Images are currently placeholders (ready for integration)
- No backend API integration (all data is static)
- Print styles are basic

## 📚 Resources & References

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Framer Motion Documentation](https://www.framer.com/motion)
- [React Router Documentation](https://reactrouter.com)

## 📝 License

This project is created for educational purposes.

## 👥 Contributing

For bug reports or feature requests, please open an issue or submit a pull request.

### Development Guidelines

- Use semantic commits: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`
- Follow the existing code style
- Test changes across different screen sizes
- Ensure accessibility standards are met

## ✅ Checklist for Deployment

- [ ] Run `npm run build` successfully
- [ ] Run `npm run lint` without errors
- [ ] Test on mobile, tablet, desktop
- [ ] Verify all links work correctly
- [ ] Check accessibility with browser DevTools
- [ ] Test keyboard navigation
- [ ] Verify performance in Lighthouse
- [ ] Update `.env` with production values if needed

## 📞 Support

For questions or issues, please contact the development team or refer to the documentation.

---

**Last Updated**: November 2024  
**Version**: 1.0.0  
**Status**: Production Ready ✅
