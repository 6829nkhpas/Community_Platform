# ProConnect - LinkedIn Clone

A full-featured professional networking platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js). ProConnect provides a comprehensive LinkedIn-like experience with advanced features for professional networking, job searching, messaging, and content sharing.

## 🚀 Features

### Core Features

- **User Authentication & Authorization** - Secure JWT-based authentication
- **Professional Profiles** - Comprehensive user profiles with experience, education, skills
- **Posts & Content Sharing** - Create, edit, like, comment, and share professional content
- **Real-time Messaging** - Socket.io powered instant messaging with typing indicators
- **Job Portal** - Post jobs, search positions, and apply with professional applications
- **Company Pages** - Company profiles with job listings and company information
- **Groups** - Create and join professional groups for networking
- **Network Management** - Connect with professionals, manage connections
- **Search & Discovery** - Advanced search across users, companies, jobs, and posts
- **Notifications** - Real-time notifications for interactions and updates
- **Analytics Dashboard** - User engagement and post performance analytics
- **Admin Panel** - Comprehensive admin dashboard for platform management

### Advanced Features

- **File Upload** - Cloudinary integration for image and document uploads
- **Real-time Updates** - Live notifications and activity feeds
- **Responsive Design** - Mobile-first design with Tailwind CSS
- **Security** - Rate limiting, input validation, and security headers
- **Performance** - Optimized queries, compression, and caching

## 📁 Project Structure

```
comm-app/
├── frontend/                          # React.js Frontend Application
│   ├── public/                        # Static assets
│   ├── src/
│   │   ├── components/                # Reusable UI components
│   │   │   ├── CreatePostModal.js     # Post creation modal
│   │   │   ├── EditProfileModal.js    # Profile editing modal
│   │   │   ├── Header.js              # Main navigation header
│   │   │   ├── NotificationDropdown.js # Notification component
│   │   │   ├── PrivateRoute.js        # Protected route wrapper
│   │   │   ├── ProfileDropdown.js     # User profile dropdown
│   │   │   └── SearchModal.js         # Search functionality
│   │   ├── context/                   # React context providers
│   │   ├── hooks/                     # Custom React hooks
│   │   ├── pages/                     # Page components
│   │   │   ├── AdminDashboard.js      # Admin panel
│   │   │   ├── AnalyticsPage.js       # Analytics dashboard
│   │   │   ├── CompaniesPage.js       # Company listings
│   │   │   ├── GroupsPage.js          # Group management
│   │   │   ├── HelpSupportPage.js     # Help and support
│   │   │   ├── HomePage.js            # Main feed
│   │   │   ├── JobsPage.js            # Job portal
│   │   │   ├── LoginPage.js           # User login
│   │   │   ├── MessagesPage.js        # Messaging interface
│   │   │   ├── NetworkPage.js         # Network management
│   │   │   ├── NotificationsPage.js   # Notifications center
│   │   │   ├── ProfilePage.js         # User profiles
│   │   │   ├── RegisterPage.js        # User registration
│   │   │   ├── SavedPostsPage.js      # Saved content
│   │   │   ├── SearchPage.js          # Search results
│   │   │   └── SettingsPage.js        # User settings
│   │   ├── services/                  # API and external services
│   │   ├── utils/                     # Utility functions
│   │   ├── App.js                     # Main application component
│   │   ├── App.css                    # Application styles
│   │   ├── index.js                   # Application entry point
│   │   └── index.css                  # Global styles
│   ├── package.json                   # Frontend dependencies
│   ├── tailwind.config.js             # Tailwind CSS configuration
│   └── postcss.config.js              # PostCSS configuration
│
├── backend/                           # Node.js/Express.js Backend API
│   ├── config/                        # Configuration files
│   │   └── cloudinary.js              # Cloudinary configuration
│   ├── middleware/                    # Express middleware
│   │   └── authMiddleware.js          # JWT authentication middleware
│   ├── models/                        # MongoDB/Mongoose models
│   │   ├── Company.js                 # Company data model
│   │   ├── Group.js                   # Group data model
│   │   ├── Job.js                     # Job posting model
│   │   ├── Message.js                 # Message model
│   │   ├── Notification.js            # Notification model
│   │   ├── Post.js                    # Post content model
│   │   └── User.js                    # User data model
│   ├── routes/                        # API route handlers
│   │   ├── adminRoutes.js             # Admin API endpoints
│   │   ├── analyticsRoutes.js         # Analytics API endpoints
│   │   ├── companyRoutes.js           # Company API endpoints
│   │   ├── enhancedPostRoutes.js      # Enhanced post functionality
│   │   ├── enhancedUserRoutes.js      # Enhanced user functionality
│   │   ├── groupRoutes.js             # Group API endpoints
│   │   ├── jobRoutes.js               # Job API endpoints
│   │   ├── messageRoutes.js           # Messaging API endpoints
│   │   ├── notificationRoutes.js      # Notification API endpoints
│   │   ├── postRoutes.js              # Post API endpoints
│   │   ├── searchRoutes.js            # Search API endpoints
│   │   └── userRoutes.js              # User API endpoints
│   ├── server.js                      # Main server file
│   └── package.json                   # Backend dependencies
│
└── README.md                          # Project documentation
```

## 🛠️ Technology Stack

### Frontend

- **React.js 18.2.0** - UI library
- **React Router DOM 6.15.0** - Client-side routing
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Axios 1.5.0** - HTTP client
- **Socket.io Client 4.7.2** - Real-time communication
- **React Hook Form 7.45.4** - Form handling
- **Framer Motion 10.16.4** - Animation library
- **React Hot Toast 2.4.1** - Toast notifications
- **JWT Decode 3.1.2** - JWT token handling
- **Date-fns 2.30.0** - Date manipulation
- **React Dropzone 14.2.3** - File upload handling

### Backend

- **Node.js** - JavaScript runtime
- **Express.js 4.18.2** - Web framework
- **MongoDB/Mongoose 7.5.0** - Database and ODM
- **Socket.io 4.8.1** - Real-time communication
- **JWT 9.0.2** - Authentication
- **Bcryptjs 2.4.3** - Password hashing
- **Cloudinary 1.40.0** - Cloud file storage
- **Multer 1.4.5** - File upload handling
- **Nodemailer 6.10.1** - Email functionality
- **Express Validator 7.2.1** - Input validation
- **Helmet 7.2.0** - Security headers
- **CORS 2.8.5** - Cross-origin resource sharing
- **Compression 1.8.1** - Response compression
- **Express Rate Limit 6.11.2** - Rate limiting

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16.0.0 or higher)
- **npm** (v8.0.0 or higher)
- **MongoDB** (local installation or MongoDB Atlas)
- **Cloudinary Account** (for file uploads)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd comm-app
   ```

2. **Install all dependencies**

   ```bash
   # Install all dependencies (frontend + backend)
   npm run install:all
   
   # Or install separately
   cd backend && npm install
   cd ../frontend && npm install
   ```

3. **Set up environment variables**

   ```bash
   # Run the deployment setup script
   npm run setup-deployment
   
   # Or manually create backend/.env file with your credentials
   ```

### Environment Configuration

1. **Backend Environment Variables**

   Create a `.env` file in the `backend/` directory:

   ```env
   # Server Configuration
   PORT=5000
   NODE_ENV=development

   # Database
   MONGO_URI=mongodb://localhost:27017/proconnect
   # or for MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/proconnect

   # JWT Configuration
   JWT_SECRET=your_jwt_secret_key_here

   # Frontend URL (for CORS)
   FRONTEND_URL=http://localhost:3000

   # Cloudinary Configuration
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret

   # Email Configuration (optional)
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_password
   ```

2. **Frontend Environment Variables**

   Create a `.env` file in the `frontend/` directory:

   ```env
   # API Configuration
   REACT_APP_API_URL=http://localhost:5000/api
   REACT_APP_SOCKET_URL=http://localhost:5000
   ```

### Running the Application

1. **Start the Backend Server**

   ```bash
   cd backend
   npm run dev
   ```

   The backend will start on `http://localhost:5000`

2. **Start the Frontend Application**

   ```bash
   cd frontend
   npm start
   ```

   The frontend will start on `http://localhost:3000`

3. **Access the Application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000/api

### Production Deployment

For detailed deployment instructions, see [VERCEL_DEPLOYMENT_GUIDE.md](./VERCEL_DEPLOYMENT_GUIDE.md)

**Quick Deployment Steps:**

1. **Deploy Backend to Render/Heroku**
   - Use the `render.yaml` file for Render deployment
   - Set environment variables in your hosting platform

2. **Deploy Frontend to Vercel**
   - Connect your GitHub repository to Vercel
   - Configure build settings in `frontend/vercel.json`
   - Set environment variables in Vercel dashboard

3. **Set up external services**
   - MongoDB Atlas for database
   - Cloudinary for file uploads

**Available Scripts:**
```bash
# Development
npm run dev                    # Start both frontend and backend
npm run dev:frontend          # Start frontend only
npm run dev:backend           # Start backend only

# Build
npm run build                 # Build frontend for production
npm run build:frontend        # Build frontend only
npm run build:backend         # Build backend only

# Deployment
npm run setup-deployment      # Interactive setup for deployment

# Testing
npm run test                  # Run all tests
npm run test:frontend         # Run frontend tests
npm run test:backend          # Run backend tests

# Linting
npm run lint                  # Lint all code
npm run lint:fix              # Fix linting issues
```

## 📚 API Documentation

### Authentication Endpoints

- `POST /api/users/register` - User registration
- `POST /api/users/login` - User login
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

### Post Endpoints

- `GET /api/posts` - Get all posts
- `POST /api/posts` - Create new post
- `PUT /api/posts/:id` - Update post
- `DELETE /api/posts/:id` - Delete post
- `POST /api/posts/:id/like` - Like/unlike post
- `POST /api/posts/:id/comment` - Add comment

### Job Endpoints

- `GET /api/jobs` - Get all jobs
- `POST /api/jobs` - Create job posting
- `GET /api/jobs/:id` - Get specific job
- `PUT /api/jobs/:id` - Update job
- `DELETE /api/jobs/:id` - Delete job
- `POST /api/jobs/:id/apply` - Apply for job

### Messaging Endpoints

- `GET /api/messages/conversations` - Get user conversations
- `GET /api/messages/:conversationId` - Get conversation messages
- `POST /api/messages` - Send message

### Search Endpoints

- `GET /api/search/users` - Search users
- `GET /api/search/companies` - Search companies
- `GET /api/search/jobs` - Search jobs
- `GET /api/search/posts` - Search posts

## 🔧 Development Scripts

### Backend Scripts

```bash
npm start          # Start production server
npm run dev        # Start development server with nodemon
npm run server     # Start development server with nodemon
npm test           # Run tests
npm run lint       # Run ESLint
npm run lint:fix   # Fix ESLint issues
```

### Frontend Scripts

```bash
npm start          # Start development server
npm run build      # Build for production
npm test           # Run tests
npm run eject      # Eject from Create React App
```

## 🗄️ Database Schema

### User Model

- Basic info (name, email, password)
- Professional details (headline, about, location)
- Experience and education arrays
- Skills array
- Connections and pending connections
- Profile image and cover image

### Post Model

- Content and media
- Author reference
- Likes and comments arrays
- Visibility settings
- Timestamps

### Job Model

- Title, description, requirements
- Company reference
- Location and type
- Salary range
- Application deadline
- Applicants array

### Message Model

- Sender and recipient references
- Content and media
- Read status
- Timestamps

## 🔒 Security Features

- **JWT Authentication** - Secure token-based authentication
- **Password Hashing** - Bcrypt password encryption
- **Input Validation** - Express-validator for all inputs
- **Rate Limiting** - API rate limiting to prevent abuse
- **CORS Configuration** - Controlled cross-origin requests
- **Security Headers** - Helmet.js for security headers
- **File Upload Validation** - Secure file upload handling

## 🚀 Deployment

### Backend Deployment (Heroku)

1. Create a Heroku account and install Heroku CLI
2. Initialize git repository and add Heroku remote
3. Set environment variables in Heroku dashboard
4. Deploy using `git push heroku main`

### Frontend Deployment (Netlify/Vercel)

1. Build the application: `npm run build`
2. Deploy the `build` folder to your preferred platform
3. Set environment variables for production API URL

### Database Deployment (MongoDB Atlas)

1. Create MongoDB Atlas account
2. Create a new cluster
3. Get connection string and update `MONGO_URI` in environment variables

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:

- Create an issue in the repository
- Contact the development team
- Check the documentation

## 🔄 Version History

- **v2.0.0** - Current version with enhanced features
- **v1.0.0** - Initial release

---

**ProConnect** - Building Professional Networks, One Connection at a Time
