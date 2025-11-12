# Training & Placement Cell Management System

A comprehensive full-stack application for managing placement activities at Government College of Engineering, Aurangabad (GECA).

## Features

### Student Portal
- Dashboard with placement statistics
- Browse and apply to placement drives
- Track applications by status
- View company reviews and ratings
- Community engagement and networking
- Personal profile management with resume upload
- Notification center with real-time updates

### Admin Dashboard
- System overview with key metrics
- Student management with bulk upload and export
- Placement drive creation and management
- Advanced analytics with year-over-year comparison
- Department-wise dashboards
- Live placement drive tracker
- Announcements and content management
- Interview scheduling and shortlisting

### Faculty Portal
- Dashboard with mentee statistics
- Student monitoring and tracking
- Drive coordination
- Report generation and download

### Analytics & Reporting
- Year-over-year placement comparison
- Month-by-month placement tracking
- Package categorization (Dream/Super-Dream/Regular/Standard)
- Department-specific statistics
- Top recruiters analysis
- Salary distribution charts

### Community & Blog
- Rich text editor for blog posts
- Multiple post categories
- Bookmarking functionality
- Advanced filtering and search
- Like, comment, and share features

### Notifications
- Real-time notification center
- Multiple notification types (Drive, Shortlist, Interview, Placement)
- Mark as read functionality
- Category-based filtering

## Tech Stack

### Frontend
- React.js with Next.js App Router
- Tailwind CSS for styling
- Recharts for data visualization
- TypeScript for type safety

### Backend
- Node.js with Express.js
- RESTful API architecture
- JWT authentication
- Input validation and sanitization

### Database
- MongoDB (recommended)
- Mongoose ODM
- Indexed collections for performance

### Additional Tools
- Vercel for deployment
- Error logging and monitoring
- Rate limiting and CORS protection

## Project Structure

\`\`\`
├── app/
│   ├── admin/              # Admin portal pages
│   ├── student/            # Student portal pages
│   ├── faculty/            # Faculty portal pages
│   ├── api/                # API routes
│   ├── blog/               # Blog pages
│   ├── community/          # Community pages
│   └── layout.tsx          # Root layout
├── components/
│   ├── ui/                 # UI components
│   ├── admin/              # Admin components
│   ├── student/            # Student components
│   └── notifications/      # Notification components
├── hooks/                  # Custom React hooks
├── lib/
│   ├── seed-data.ts        # Seed data for testing
│   ├── error-handler.ts    # Error handling utilities
│   ├── constants.ts        # Application constants
│   ├── validators.ts       # Input validation
│   └── logger.ts           # Logging utility
└── public/                 # Static assets
\`\`\`

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables in `.env.local`
4. Run development server: `npm run dev`
5. Open http://localhost:3000

### Environment Variables

\`\`\`
NEXT_PUBLIC_API_URL=http://localhost:3000
DATABASE_URL=mongodb://localhost:27017/placement-system
JWT_SECRET=your-secret-key
\`\`\`

## Test Credentials

- **Student**: student@example.com / password123
- **Faculty**: faculty@example.com / password123
- **Admin**: admin@example.com / password123

## Security Features

- Input sanitization and validation
- Role-based access control (RBAC)
- JWT authentication
- CORS protection
- Rate limiting
- XSS and CSRF prevention
- Secure password hashing with bcrypt

## API Documentation

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### Students
- `GET /api/students` - List all students
- `GET /api/students/:id` - Get student details
- `PUT /api/students/:id` - Update student profile

### Drives
- `GET /api/drives` - List all drives
- `POST /api/drives` - Create new drive
- `GET /api/drives/:id` - Get drive details
- `PUT /api/drives/:id` - Update drive

### Applications
- `GET /api/applications` - List applications
- `POST /api/applications` - Submit application
- `GET /api/applications/:id` - Get application details

### Notifications
- `GET /api/notifications` - Get user notifications
- `POST /api/notifications` - Create notification
- `PATCH /api/notifications/:id` - Mark as read

## Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables
4. Deploy

### Production Checklist

- [ ] Set up database backups
- [ ] Configure error logging
- [ ] Enable rate limiting
- [ ] Set up monitoring and alerts
- [ ] Configure CORS properly
- [ ] Enable HTTPS
- [ ] Set up CDN for static assets
- [ ] Configure email notifications
- [ ] Set up SMS alerts (optional)

## Performance Optimization

- Lazy loading of components
- Image optimization
- Database query optimization
- Caching strategies
- Code splitting
- Minification and compression

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, contact the placement cell or open an issue in the repository.
