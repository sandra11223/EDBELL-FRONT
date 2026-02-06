# EDBELL EDUSOLUTIONS LLP Website

A comprehensive full-stack Next.js website for EDBELL EDUSOLUTIONS LLP, an educational services company providing online degree programs, career counseling, and study abroad services.

## Features

### Frontend
- **Modern Design**: Clean, professional design with blue theme matching company branding
- **Responsive Layout**: Mobile-first design that works on all devices
- **Bilingual Support**: English and Malayalam language toggle (ready for implementation)
- **Interactive Components**: Contact forms, course filters, and dynamic content
- **SEO Optimized**: Meta tags, structured data, and optimized content

### Pages
- **Home**: Hero section, featured services, course highlights, and company overview
- **About**: Company background, mission, vision, leadership, and values
- **Courses**: Comprehensive course listings with filtering and detailed information
- **Universities**: Partner university information with accreditation details
- **Services**: Detailed service offerings including career counseling and study abroad
- **Blog**: Educational content and industry insights
- **Contact**: Contact form, location information, and FAQ section

### Backend
- **API Routes**: RESTful APIs for contact form submission and data management
- **Database Integration**: MongoDB with Mongoose for data persistence
- **Form Validation**: Server-side validation for all user inputs
- **Error Handling**: Comprehensive error handling and logging

## Technology Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS with custom components
- **Icons**: Lucide React
- **Database**: MongoDB with Mongoose ODM
- **Forms**: React Hook Form with Zod validation
- **Deployment**: Vercel-ready configuration

## Getting Started

### Prerequisites
- Node.js 18+ 
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd edbell-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```
Edit `.env.local` with your configuration:
- MongoDB connection string
- SMTP settings for email notifications
- Site configuration

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
edbell-website/
├── src/
│   ├── app/                 # Next.js 14 app directory
│   │   ├── about/          # About page
│   │   ├── api/            # API routes
│   │   ├── blog/           # Blog pages
│   │   ├── contact/        # Contact page
│   │   ├── courses/        # Courses page
│   │   ├── services/       # Services page
│   │   ├── universities/   # Universities page
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/         # Reusable components
│   │   ├── Header.tsx      # Navigation header
│   │   └── Footer.tsx      # Site footer
│   ├── lib/                # Utility libraries
│   │   └── mongodb.ts      # Database connection
│   └── models/             # Database models
│       └── Contact.ts      # Contact form model
├── public/                 # Static assets
├── .env.local             # Environment variables
├── tailwind.config.js     # Tailwind configuration
└── package.json           # Dependencies and scripts
```

## Key Features Implementation

### Contact Form
- Server-side validation with Mongoose
- Email notifications (configurable)
- Admin dashboard for managing inquiries
- Spam protection ready

### Course Management
- Dynamic course filtering
- Detailed course information
- University partnership display
- Enrollment tracking ready

### SEO & Performance
- Optimized meta tags
- Structured data markup
- Image optimization
- Fast loading times

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interfaces
- Accessible design patterns

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
npm run build
npm start
```

## Environment Variables

Required environment variables:

```env
MONGODB_URI=mongodb://localhost:27017/edbell-website
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SITE_URL=http://localhost:3000
SITE_NAME=EDBELL EDUSOLUTIONS LLP
```

## Customization

### Branding
- Update colors in `tailwind.config.js` and `globals.css`
- Replace logo and images in `public/` directory
- Modify company information in components

### Content
- Update course information in `/courses/page.tsx`
- Modify university partnerships in `/universities/page.tsx`
- Add blog posts in `/blog/` directory
- Update contact information throughout the site

### Features
- Add authentication for admin panel
- Implement payment gateway for course enrollment
- Add live chat functionality
- Integrate with CRM systems

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

For support and questions:
- Email: info@edbelledusolutions.com
- Phone: +91 XXX XXX XXXX
- Address: 15/382, Calicut Tower, Kozhikode Road, Wayanad, Kerala

## License

This project is proprietary software owned by EDBELL EDUSOLUTIONS LLP.

---

Built with ❤️ for EDBELL EDUSOLUTIONS LLP