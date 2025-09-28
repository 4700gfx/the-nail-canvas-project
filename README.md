# 💅 The Nail Canvas

> *Artistry in Every Detail* - A luxury nail salon website built with React

![The Nail Canvas](https://img.shields.io/badge/Status-Active-brightgreen)
![React](https://img.shields.io/badge/React-18.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38bdf8)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)

A stunning, modern website for The Nail Canvas luxury nail salon, featuring elegant design, smooth animations, and comprehensive service showcasing. Built with React and styled with Tailwind CSS for a premium user experience.

## ✨ Features

### 🎨 **Design Excellence**
- **Luxury Aesthetic**: Elegant pink and amber color palette with premium visual effects
- **Smooth Animations**: CSS transitions and hover effects throughout
- **Responsive Design**: Mobile-first approach ensuring perfect display on all devices
- **Modern UI Components**: Clean, contemporary design with sophisticated typography

### 🧭 **Navigation & UX**
- **Sticky Navigation**: Fixed navbar with smooth scroll-to-section functionality
- **Active Section Tracking**: Real-time highlighting of current page section
- **Mobile-Optimized Menu**: Collapsible mobile navigation with smooth transitions
- **Accessibility**: ARIA labels, keyboard navigation, and focus management

### 💼 **Business Components**
- **Service Pricing**: Interactive pricing tables with detailed service descriptions
- **Contact Forms**: Comprehensive inquiry forms with validation
- **Owner Introduction**: Professional "Meet Me" section with tabbed content
- **Social Media Integration**: Direct links to social platforms

### 🔧 **Technical Features**
- **React Hooks**: Modern functional components with state management
- **Performance Optimized**: Lazy loading, memoization, and efficient rendering
- **Form Validation**: Real-time input validation with error handling
- **Scroll Management**: Smooth scrolling and section detection
- **Component Reusability**: Modular, maintainable component architecture

## 🚀 Getting Started

### Prerequisites
- Node.js (v16.0 or higher)
- npm or yarn package manager
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/the-nail-canvas-project.git
   cd the-nail-canvas-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Build for Production

```bash
npm run build
# or
yarn build
```

This builds the app for production to the `build` folder, optimizing for best performance.

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx           # Navigation with smooth scrolling
│   ├── Pricing.jsx          # Service pricing tables
│   ├── ContactMe.jsx        # Contact inquiry form
│   ├── MeetMe.jsx           # Owner introduction section
│   └── Footer.jsx           # Site footer with links
├── assets/
│   └── images/
│       └── logo.png         # Brand logo
├── styles/
│   └── index.css           # Global styles and Tailwind imports
├── App.js                  # Main application component
└── index.js               # Application entry point
```

## 🎯 Component Overview

### `Navbar.jsx`
**Sophisticated navigation system with:**
- Fixed positioning with backdrop blur effect
- Active section highlighting
- Social media integration
- Mobile-responsive hamburger menu
- Smooth scroll-to-section functionality

### `Pricing.jsx`
**Interactive pricing showcase featuring:**
- Categorized service tabs (Manicures, Pedicures, Extensions, Nail Art)
- Detailed service descriptions with features
- Popular service highlighting
- Hover effects and animations
- Call-to-action buttons

### `ContactMe.jsx`
**Comprehensive contact form with:**
- Multi-section form layout (Personal, Service, Additional Info)
- Real-time form validation
- Service selection dropdown
- Date and time picker
- Loading states and success confirmation

### `MeetMe.jsx`
**Professional owner introduction including:**
- Tabbed content system (Story, Expertise, Values)
- Achievement statistics with hover effects
- Professional certifications display
- Core values presentation
- Sticky sidebar layout

### `Footer.jsx`
**Complete site footer containing:**
- Brand information and logo
- Quick navigation links
- Service overview
- Contact information with icons
- Newsletter signup form
- Social media links

## 🎨 Design System

### Color Palette
```css
Primary: #5C2314    /* Rich Brown */
Secondary: #F4BCCC  /* Soft Pink */
Accent: #FFC3D7     /* Light Pink */
Background: #FFF9F7 /* Warm White */
```

### Typography
- **Headers**: Serif fonts for elegance
- **Body**: Sans-serif for readability
- **Gradients**: Pink to amber transitions

### Components
- **Rounded Corners**: 12px-24px border radius
- **Shadows**: Multi-layered shadow system
- **Hover Effects**: Scale and color transitions
- **Spacing**: Consistent 8px grid system

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
REACT_APP_BUSINESS_NAME="The Nail Canvas"
REACT_APP_PHONE_NUMBER="(555) 123-NAILS"
REACT_APP_EMAIL="hello@nailcanvas.com"
REACT_APP_ADDRESS="123 Beauty Lane, Miami, FL 33180"
REACT_APP_FACEBOOK_URL="https://facebook.com/yourpage"
REACT_APP_TWITTER_URL="https://twitter.com/yourhandle"
REACT_APP_INSTAGRAM_URL="https://instagram.com/yourhandle"
```

### Customization

#### Colors
Modify the `COLORS` constant in each component:
```javascript
const COLORS = {
  primary: '#5C2314',     // Main brand color
  secondary: '#F4BCCC',   // Secondary brand color
  accent: '#FFC3D7',      // Accent highlights
  background: '#FFF9F7',  // Background color
  white: '#FFFFFF'        // Pure white
};
```

#### Services
Update the `pricingData` object in `Pricing.jsx` to reflect your actual services and prices.

#### Navigation
Modify the `NAV_TABS` array in `Navbar.jsx` to change navigation items.

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+
- **Large Desktop**: 1440px+

## 🚀 Deployment

### Netlify
1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify
3. Configure environment variables in Netlify dashboard

### Vercel
1. Connect your GitHub repository
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `build`
3. Add environment variables

### Traditional Web Hosting
1. Run `npm run build`
2. Upload the contents of the `build` folder to your web server
3. Configure your server to serve `index.html` for all routes

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Melant Edenfield** - *Owner & Lead Artist* - The creative vision behind The Nail Canvas
- **Development Team** - *Web Development* - Technical implementation and design

## 📞 Contact

- **Website**: [www.thenailcanvas.com](https://www.thenailcanvas.com)
- **Phone**: (555) 123-NAILS
- **Email**: hello@nailcanvas.com
- **Address**: 123 Beauty Lane, Miami, FL 33180

## 🙏 Acknowledgments

- **React Community** - For the amazing framework and ecosystem
- **Tailwind CSS** - For the utility-first CSS framework
- **Design Inspiration** - Modern luxury spa and salon websites
- **Icons** - Heroicons and custom SVG illustrations

---

<div align="center">

**Made with 💅 in Miami**

*Transform your nails into works of art*

</div>