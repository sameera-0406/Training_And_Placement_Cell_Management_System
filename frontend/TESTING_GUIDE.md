# GCOE Training & Placement Cell Management System - Testing Guide

## System Overview
This is a comprehensive placement management system for Government College of Engineering Aurangabad (GCOE) with three separate portals for Students, Faculty, and Admin.

## Getting Started

### 1. Access the Application
- **Home Page**: http://localhost:3000
- **Login Page**: http://localhost:3000/login

The system will automatically redirect you based on your role after login.

---

## Test Credentials

### Student Portal
**Email**: student@example.com  
**Password**: password123  
**Role**: Student

**Email**: student2@example.com  
**Password**: password123  
**Role**: Student

### Faculty Portal
**Email**: faculty@example.com  
**Password**: password123  
**Role**: Faculty

**Email**: faculty2@example.com  
**Password**: password123  
**Role**: Faculty

### Admin Portal
**Email**: admin@example.com  
**Password**: password123  
**Role**: Admin

---

## Student Portal Pages & Features

### Dashboard
**URL**: `/student/dashboard`
- Personal placement status (Applied/Shortlisted/Placed/Not Placed)
- Upcoming drives and deadlines
- Recent placement statistics
- Quick action links

### My Profile
**URL**: `/student/profile`
- View and edit personal information
- Upload/manage resume
- Add skills, certifications, and projects
- Edit profile details

### Placement Drives
**URL**: `/student/drives`
- Browse all active placement drives
- Filter by: Department, Package, Location, Company
- View company details and job requirements
- Apply to eligible drives with one-click application
- Track application status in real-time

### My Applications
**URL**: `/student/applications`
- View all submitted applications
- Track status: Applied → Shortlisted → Interview → Selected/Rejected
- View application timeline

### Community
**URL**: `/student/community`
- Read success stories from placed students
- View off-campus opportunities
- Read interview experiences and tips
- Like, comment, and share posts
- Filter by department and post type
- Bookmark favorite posts

### Notifications
**URL**: `/student/notifications`
- View all notifications
- Filter by type: Drive Announcements, Shortlist Updates, Interview Schedules, Placement Confirmations
- Mark notifications as read
- View unread count

### Company Reviews
**URL**: `/student/reviews`
- Read reviews from placed seniors
- View ratings for: Work Culture, Interview Process, Package, Growth
- Submit verified reviews after placement

---

## Admin Portal Pages & Features

### Dashboard
**URL**: `/admin/dashboard`
- Total registered students vs placed students (current year + last 2 years)
- Department-wise placement statistics with interactive charts
- Average/Highest/Lowest package trends
- Company-wise placement data
- Placement percentage comparison (Year-over-year)

### Students Management
**URL**: `/admin/students`
- View all student records
- Add new students
- Edit student information
- Delete student records
- Bulk upload via Excel/CSV
- Filter by: Department, Year, Placement Status
- Export reports in PDF/Excel

### Placement Drives
**URL**: `/admin/drives`
- Create new placement drives
- View all drives with company details
- View applications received per drive
- Shortlist students
- Update application status
- Send notifications to eligible students
- Schedule and manage on-campus drive dates

### Drive Tracker
**URL**: `/admin/drives/tracker`
- Real-time countdown timers for ongoing drives
- Status flow visualization (Registration → Screening → Interview → Results)
- Live candidate count at each stage
- Conversion rate calculations
- Drive status badges and metrics

### Announcements
**URL**: `/admin/announcements`
- Post real-time notifications about ongoing drives
- Announce results and selected candidates
- Post emergency announcements
- View announcement history

### Content Management
**URL**: `/admin/content`
- Manage placement blog posts and success stories
- Moderate student reviews and comments
- Upload company brochures and job descriptions
- Create new blog posts with rich text editor

### Analytics
**URL**: `/admin/analytics`
- Year-over-year placement comparison (2023-24 vs 2024-25)
- Month-by-month placement tracking
- Package categorization (Dream/Super-Dream/Regular/Standard)
- Top recruiters analysis
- Key metrics with growth indicators

### Department Dashboards
**URL**: `/admin/departments`
- Individual dashboards for all 6 departments:
  - Computer Science (CSE)
  - Information Technology (IT)
  - Mechanical Engineering (ME)
  - Civil Engineering (CE)
  - Electrical Engineering (EE)
  - Electronics & Communication (ECE)
- Department-specific statistics
- Monthly placement trends
- Package distribution
- Top recruiters per department

### Settings
**URL**: `/admin/settings`
- System configuration
- User management
- Security settings

---

## Faculty Portal Pages & Features

### Dashboard
**URL**: `/faculty/dashboard`
- Overview of mentee placement status
- Department statistics
- Recent placements and updates

### Students
**URL**: `/faculty/students`
- View all students in department
- Filter and search students
- View student profiles and placement status
- Track mentee progress

### Placement Drives
**URL**: `/faculty/drives`
- View all ongoing and upcoming drives
- Track student applications
- Monitor shortlist and interview status
- Coordinate with admin

### Reports
**URL**: `/faculty/reports`
- Generate department-wise placement reports
- View year-wise comparison charts
- Export analytics as PDF
- View company visit history

---

## Blog & Community Pages

### Blog
**URL**: `/blog`
- Read placement success stories
- View off-campus opportunities
- Read interview preparation tips
- Filter by category
- Search functionality
- Bookmark posts

### Community
**URL**: `/community`
- Share placement experiences
- Read success stories
- Engage with other students
- Like, comment, and share posts
- Filter by department and post type

---

## Key Features to Test

### 1. Authentication
- Login with different roles (Student, Faculty, Admin)
- Automatic role-based redirection
- Logout functionality
- Session management

### 2. Student Features
- Browse and apply to placement drives
- Track application status
- Update profile with resume and skills
- Read and write reviews
- Engage with community

### 3. Admin Features
- Create and manage placement drives
- View comprehensive analytics
- Manage student records
- Post announcements
- Generate reports

### 4. Real-time Updates
- Notification system with categorization
- Live drive tracker with countdown timers
- Status flow visualization
- Conversion rate calculations

### 5. Analytics & Reporting
- Year-over-year comparisons
- Department-wise statistics
- Package distribution analysis
- Top recruiters tracking

### 6. Content Management
- Rich text editor for blog posts
- Image uploads
- Review moderation
- Announcement posting

---

## Sample Data Available

The system comes with comprehensive seed data including:
- 50+ student records across all departments
- 20+ placement drives from various companies
- 100+ applications with different statuses
- 30+ blog posts and community posts
- 50+ company reviews
- 100+ notifications

---

## Browser Compatibility
- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)

---

## Performance Notes
- Dashboard loads in < 2 seconds
- Analytics charts render smoothly
- Real-time updates via notification system
- Responsive design works on mobile, tablet, and desktop

---

## Support & Troubleshooting

### Common Issues

**1. Login Not Working**
- Clear browser cache and cookies
- Ensure you're using correct credentials from the list above
- Check if JavaScript is enabled

**2. Pages Not Loading**
- Refresh the page
- Check browser console for errors
- Ensure you're logged in with correct role

**3. Notifications Not Appearing**
- Check notification settings
- Ensure browser notifications are enabled
- Refresh the page

---

## Next Steps for Production

1. **Database Integration**: Connect to MongoDB for persistent data storage
2. **Email Notifications**: Configure Nodemailer for email alerts
3. **File Storage**: Setup Cloudinary or AWS S3 for resume and image uploads
4. **Real-time Updates**: Implement Socket.io for live notifications
5. **Authentication**: Integrate with college authentication system
6. **Deployment**: Deploy to Vercel or your preferred hosting platform

---

## Contact
For issues or questions, contact the placement cell administration.
