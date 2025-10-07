# Jai Hind Army Store - E-Commerce Website

A modern, mobile-first e-commerce website for Jai Hind Army Store operated by J & K Enterprises.

## Features

### Core Functionality
- **Product Catalog**: Browse products by categories (Army, NCC, Police uniforms, etc.)
- **WhatsApp Integration**: One-click ordering via WhatsApp with pre-filled customer details
- **Payment Integration**: PhonePe and Google Pay QR codes with UPI ID support
- **Gallery System**: Filterable image gallery showcasing store, products, and events
- **Contact System**: Contact form with email integration
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Fast Performance**: Built with Vite for lightning-fast load times

### User Experience
- Beautiful hero section with clear calls-to-action
- Product filtering by category
- Gallery preview on homepage with full gallery page
- Smooth animations and transitions
- Floating WhatsApp button for instant contact
- Interactive product cards with hover effects
- Order modal with customer detail collection
- Copy-to-clipboard UPI ID functionality

### Pages
1. **Home**: Hero section, featured products, category showcase, gallery preview
2. **Products**: Complete catalog with category filtering
3. **Gallery**: Filterable image gallery with categories (Store, Products, Events, Customers)
4. **About Us**: Company information and values
5. **Contact**: Contact form, payment details with QR codes, business details, and Google Maps integration

## Technology Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: Custom client-side routing

## Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Business Information

**Store Name**: Jai Hind Army Store
**Company**: J & K Enterprises
**Location**: Ward No. 43, Krishna Nagar, Rewa (M.P.)
**Phone**: +91 7067894770
**Email**: learnwithanukalp@gmail.com

## Product Categories

1. Army Uniforms
2. NCC Uniforms
3. Police Uniforms
4. School & College Uniforms
5. Sportswear
6. Accessories & Equipment

## WhatsApp Integration

The website features a sophisticated WhatsApp ordering system:
1. Customer clicks "Buy Now" on any product
2. Modal popup collects: Name, Mobile Number, Delivery Address
3. Customer is redirected to WhatsApp with pre-filled message
4. Store receives order inquiry instantly

## Customization

### Adding Products
Edit `src/data/products.ts` to add or modify products.

### Updating Contact Information
Update business details in:
- `src/components/Header.tsx`
- `src/components/Footer.tsx`
- `src/pages/Contact.tsx`

### Styling
Modify `tailwind.config.js` for theme customization.

## Deployment

The website can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

Simply run `npm run build` and deploy the `dist` folder.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## License

Copyright © 2025 J & K Enterprises - Jai Hind Army Store. All rights reserved.
