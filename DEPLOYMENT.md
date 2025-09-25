# Glowing Fiesta - Deployment Guide

## Overview
Glowing Fiesta is a premium car rental service website built with Next.js 15, TypeScript, and Tailwind CSS. This guide will help you deploy the application and manage content through JSON files.

## Prerequisites
- Node.js 18+ 
- npm or yarn
- Access to the codebase
- Deployment platform (Vercel, Netlify, AWS, etc.)

## Development Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### 3. Build for Production
```bash
npm run build
```

### 4. Start Production Server
```bash
npm run start
```

## Content Management

The website content is managed through JSON files located in the `src/data/` directory. You can easily update all sections by modifying these files:

### Available JSON Files:

1. **`site-config.json`** - Global configuration
   - Meta information (title, description, keywords)
   - Contact details
   - Social media links
   - Icons and logos

2. **`pages.json`** - Homepage content
   - Hero section slides
   - About section content
   - Why Choose Us features
   - How It Works steps
   - FAQ items

3. **`services.json`** - Services data
   - All service offerings
   - Icons, descriptions, images

4. **`fleet.json`** - Vehicle categories
   - Car categories (Sedan, SUV, Luxury, etc.)
   - Features and descriptions

5. **`sightseeing.json`** - Mumbai attractions
   - Tourist destinations
   - Images and descriptions

6. **`gallery.json`** - Gallery images
   - Image gallery with captions
   - Thumbnail and full-size images

7. **`ratings.json`** - Customer testimonials
   - Customer reviews and ratings
   - Average rating calculation

8. **`partners.json`** - Client logos
   - Partner and client information
   - Logo URLs

9. **`navigation.json`** - Navigation menus
   - Main navigation items
   - Footer links

10. **`pricing.json`** - Pricing information
    - Pricing categories
    - Features included

11. **`popular-ride.json`** - Popular ride section
    - Section content and features

12. **`contact.json`** - Contact information
    - Contact section content
    - Quick action buttons

13. **`newsletter.json`** - Newsletter settings
    - Newsletter form configuration

14. **`company-info.json`** - Company details
    - Company description and designer info

### Updating Content:

1. **Text Content**: Simply edit the text values in any JSON file
2. **Images**: Update image URLs in the respective JSON files
3. **Add New Items**: Follow the existing structure to add new services, fleet items, etc.
4. **Remove Items**: Delete the corresponding object from the array

Example - Adding a new service:
```json
{
  "id": 12,
  "title": "NEW SERVICE NAME",
  "icon": "IconName",
  "description": "Service description here",
  "image": "https://example.com/image.jpg"
}
```

## Deployment

### Vercel (Recommended)

1. **Connect to GitHub**
   - Push your code to a GitHub repository
   - Connect your Vercel account to GitHub
   - Import the repository

2. **Configure Environment Variables** (if needed)
   ```bash
   # Add any required environment variables in Vercel dashboard
   ```

3. **Deploy**
   - Vercel will automatically detect Next.js and deploy
   - Each push to main branch will trigger auto-deployment

### Netlify

1. **Connect to GitHub**
   - Authorize Netlify with GitHub
   - Select the repository

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18 or higher

3. **Environment Variables**
   - Add any required environment variables

### Other Platforms

For AWS, Google Cloud, or other platforms:

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm run start
   ```

3. **Configure reverse proxy** (if needed)
   - Ensure proper routing for static files

## Database Setup

This project uses Prisma with SQLite:

1. **Push database schema**
   ```bash
   npm run db:push
   ```

2. **Generate Prisma client**
   ```bash
   npm run db:generate
   ```

## Environment Variables

Create a `.env.local` file for local development:

```env
# Database
DATABASE_URL="file:./dev.db"

# API Keys (if needed)
NEXT_PUBLIC_API_URL="https://your-api.com"
```

## Troubleshooting

### Common Issues:

1. **Build Errors**
   ```bash
   # Clear Next.js cache
   rm -rf .next
   npm run build
   ```

2. **TypeScript Errors**
   ```bash
   # Check types
   npx tsc --noEmit
   ```

3. **Linting Issues**
   ```bash
   # Run linting
   npm run lint
   ```

### Performance Optimization:

1. **Image Optimization**
   - Use Next.js Image component
   - Optimize image sizes before upload
   - Use CDN for images

2. **Code Splitting**
   - Next.js automatically handles code splitting
   - Use dynamic imports for large components

3. **Caching**
   - Implement proper caching strategies
   - Use CDN for static assets

## Security Considerations

1. **Environment Variables**
   - Never commit sensitive data to version control
   - Use platform-specific environment variable management

2. **Content Security Policy**
   - Implement CSP headers
   - Validate user inputs

3. **API Security**
   - Use rate limiting
   - Implement proper authentication

## Support

For issues and questions:
1. Check the troubleshooting section
2. Review the JSON file structure
3. Ensure all dependencies are properly installed
4. Verify environment configuration

## Live Preview

The application should be running successfully after following these steps. You can preview the website at the deployed URL provided by your hosting platform.