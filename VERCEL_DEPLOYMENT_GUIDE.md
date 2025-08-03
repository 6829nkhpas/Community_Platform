# Vercel Deployment Guide - ProConnect LinkedIn Clone

This guide will help you deploy your MERN stack application using Vercel for the frontend and Render/Heroku for the backend.

## Overview

- **Frontend**: Deploy to Vercel (React.js)
- **Backend**: Deploy to Render or Heroku (Node.js/Express)
- **Database**: MongoDB Atlas (Cloud Database)
- **File Storage**: Cloudinary (Image/File Uploads)

## Prerequisites

1. **GitHub Repository**: Your code should be in a GitHub repository
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
3. **MongoDB Atlas Account**: For cloud database
4. **Cloudinary Account**: For file uploads
5. **Render/Heroku Account**: For backend deployment

## Step 1: Set Up MongoDB Atlas

### 1.1 Create MongoDB Atlas Account
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Sign up for a free account
3. Create a new cluster (M0 Free tier)
4. Set up database access (username/password)
5. Set up network access (IP whitelist: 0.0.0.0/0 for all IPs)

### 1.2 Get Connection String
1. Click "Connect" on your cluster
2. Choose "Connect your application"
3. Copy the connection string
4. Replace `<password>` with your database password
5. Replace `<dbname>` with `proconnect`

**Example:**
```
mongodb+srv://username:password@cluster.mongodb.net/proconnect?retryWrites=true&w=majority
```

## Step 2: Set Up Cloudinary

### 2.1 Create Cloudinary Account
1. Go to [Cloudinary](https://cloudinary.com/)
2. Sign up for a free account
3. Go to Dashboard to get your credentials

### 2.2 Get Cloudinary Credentials
From your Cloudinary dashboard, note down:
- **Cloud Name**
- **API Key**
- **API Secret**

## Step 3: Deploy Backend to Render

### 3.1 Create Render Account
1. Go to [Render](https://render.com/)
2. Sign up with your GitHub account

### 3.2 Deploy Backend Service
1. Click "New +" → "Web Service"
2. Connect your GitHub repository
3. Configure the service:
   - **Name**: `proconnect-backend`
   - **Environment**: `Node`
   - **Build Command**: `cd backend && npm install`
   - **Start Command**: `cd backend && npm start`
   - **Plan**: Free

### 3.3 Set Environment Variables
In Render dashboard, go to "Environment" tab and add:

```env
NODE_ENV=production
PORT=10000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/proconnect?retryWrites=true&w=majority
JWT_SECRET=your_very_long_random_secret_key_here
JWT_EXPIRE=7d
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
EMAIL_FROM=noreply@proconnect.com
CORS_ORIGIN=https://your-frontend-url.vercel.app
SOCKET_CORS_ORIGIN=https://your-frontend-url.vercel.app
```

### 3.4 Deploy
1. Click "Create Web Service"
2. Wait for deployment to complete
3. Note down your backend URL (e.g., `https://proconnect-backend.onrender.com`)

## Step 4: Deploy Frontend to Vercel

### 4.1 Install Vercel CLI (Optional)
```bash
npm install -g vercel
```

### 4.2 Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**
   - Visit [vercel.com/dashboard](https://vercel.com/dashboard)
   - Sign in with your GitHub account

2. **Import Project**
   - Click "New Project"
   - Import your GitHub repository
   - Select the repository

3. **Configure Project**
   - **Framework Preset**: Other
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - **Install Command**: `npm install`

4. **Set Environment Variables**
   - Click "Environment Variables"
   - Add the following variables:
   ```
   REACT_APP_API_URL=https://your-backend-url.onrender.com
   REACT_APP_SOCKET_URL=https://your-backend-url.onrender.com
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Note down your Vercel URL (e.g., `https://your-app-name.vercel.app`)

### 4.3 Deploy via Vercel CLI (Alternative)

1. **Login to Vercel**
   ```bash
   vercel login
   ```

2. **Navigate to Frontend Directory**
   ```bash
   cd frontend
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Follow the prompts**
   - Set up and deploy: `Y`
   - Which scope: Select your account
   - Link to existing project: `N`
   - Project name: `proconnect-frontend`
   - Directory: `./`
   - Override settings: `N`

5. **Set Environment Variables**
   ```bash
   vercel env add REACT_APP_API_URL
   vercel env add REACT_APP_SOCKET_URL
   ```

## Step 5: Update Backend CORS Settings

After getting your Vercel URL, update the backend environment variables in Render:

```env
CORS_ORIGIN=https://your-frontend-url.vercel.app
SOCKET_CORS_ORIGIN=https://your-frontend-url.vercel.app
```

Then redeploy the backend service.

## Step 6: Test Your Deployment

### 6.1 Test Backend
```bash
# Test health endpoint
curl https://your-backend-url.onrender.com/health

# Test root endpoint
curl https://your-backend-url.onrender.com/
```

### 6.2 Test Frontend
1. Visit your Vercel URL
2. Test user registration/login
3. Test file uploads
4. Test real-time messaging

## Alternative: Deploy Backend to Heroku

If you prefer Heroku over Render:

### 1. Install Heroku CLI
```bash
# macOS
brew install heroku/brew/heroku

# Windows
# Download from https://devcenter.heroku.com/articles/heroku-cli
```

### 2. Login to Heroku
```bash
heroku login
```

### 3. Create Heroku App
```bash
cd backend
heroku create your-app-name
```

### 4. Set Environment Variables
```bash
heroku config:set NODE_ENV=production
heroku config:set MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/proconnect?retryWrites=true&w=majority
heroku config:set JWT_SECRET=your_very_long_random_secret_key_here
heroku config:set JWT_EXPIRE=7d
heroku config:set CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
heroku config:set CLOUDINARY_API_KEY=your_cloudinary_api_key
heroku config:set CLOUDINARY_API_SECRET=your_cloudinary_api_secret
heroku config:set CORS_ORIGIN=https://your-frontend-url.vercel.app
heroku config:set SOCKET_CORS_ORIGIN=https://your-frontend-url.vercel.app
```

### 5. Deploy
```bash
git add .
git commit -m "Deploy to Heroku"
git push heroku main
```

## Environment Variables Reference

### Backend Environment Variables
```env
# Required
NODE_ENV=production
PORT=10000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/proconnect?retryWrites=true&w=majority
JWT_SECRET=your_very_long_random_secret_key_here
JWT_EXPIRE=7d
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Optional
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
EMAIL_FROM=noreply@proconnect.com
CORS_ORIGIN=https://your-frontend-url.vercel.app
SOCKET_CORS_ORIGIN=https://your-frontend-url.vercel.app
```

### Frontend Environment Variables (Vercel)
```env
# Required
REACT_APP_API_URL=https://your-backend-url.onrender.com
REACT_APP_SOCKET_URL=https://your-backend-url.onrender.com
```

## Vercel-Specific Features

### 1. Automatic Deployments
- Vercel automatically deploys when you push to your main branch
- Preview deployments for pull requests
- Easy rollback to previous versions

### 2. Custom Domains
1. Go to your project in Vercel dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Configure DNS settings

### 3. Environment Variables
- Set different variables for Production, Preview, and Development
- Use Vercel CLI or dashboard to manage variables

### 4. Analytics and Monitoring
- Built-in analytics for your application
- Performance monitoring
- Error tracking

## Troubleshooting

### Common Issues

#### 1. CORS Errors
- Ensure `CORS_ORIGIN` is set correctly in backend
- Check that frontend URL matches exactly (including https://)
- Make sure to include the full Vercel URL

#### 2. Build Failures
- Check Node.js version compatibility
- Verify all dependencies are in package.json
- Check for syntax errors in code
- Ensure environment variables are set correctly

#### 3. Environment Variables Not Loading
- Ensure variables are set in Vercel dashboard
- Check variable names match exactly (REACT_APP_*)
- Redeploy after changing environment variables

#### 4. Routing Issues
- Vercel automatically handles React Router with the configuration
- Check that all routes redirect to index.html

### Debugging Tips

#### Backend Debugging
```bash
# Check logs in Render/Heroku
# Render: Go to "Logs" tab
# Heroku: heroku logs --tail

# Test endpoints locally
curl http://localhost:5000/health
```

#### Frontend Debugging
```bash
# Check Vercel deployment logs
# Go to your project → Deployments → Click on deployment → Functions

# Check browser console for errors
# Verify environment variables are loaded
console.log(process.env.REACT_APP_API_URL)

# Test API calls
curl https://your-backend-url.onrender.com/health
```

## Vercel CLI Commands

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod

# List projects
vercel ls

# View project info
vercel inspect

# Set environment variables
vercel env add REACT_APP_API_URL

# Remove environment variables
vercel env rm REACT_APP_API_URL

# List environment variables
vercel env ls
```

## Performance Optimization

### 1. Vercel Optimizations
- Automatic image optimization
- Edge caching
- CDN distribution
- Automatic compression

### 2. React Optimizations
- Code splitting with React.lazy()
- Optimize bundle size
- Use React.memo() for expensive components
- Implement proper loading states

### 3. API Optimizations
- Implement caching strategies
- Use pagination for large datasets
- Optimize database queries
- Use CDN for static assets

## Security Considerations

### 1. Environment Variables
- Never commit sensitive data to Git
- Use Vercel's environment variable management
- Rotate secrets regularly

### 2. API Security
- Implement rate limiting
- Use HTTPS in production
- Validate all inputs
- Set proper CORS headers

### 3. Frontend Security
- Sanitize user inputs
- Implement proper authentication
- Use secure HTTP headers
- Regular dependency updates

## Monitoring and Analytics

### 1. Vercel Analytics
- Built-in performance monitoring
- Real user monitoring
- Error tracking
- Core Web Vitals

### 2. Custom Monitoring
- Set up error tracking (Sentry, LogRocket)
- Monitor API performance
- Track user engagement
- Set up alerts

## Support

If you encounter issues:

1. Check the troubleshooting section above
2. Review service-specific documentation:
   - [Vercel Docs](https://vercel.com/docs)
   - [Render Docs](https://render.com/docs)
   - [Heroku Docs](https://devcenter.heroku.com/)
   - [MongoDB Atlas Docs](https://docs.atlas.mongodb.com/)
   - [Cloudinary Docs](https://cloudinary.com/documentation)

3. Check your application logs for specific error messages
4. Verify all environment variables are set correctly
5. Test endpoints individually to isolate issues

## Next Steps

After successful deployment:

1. Set up custom domain (optional)
2. Configure SSL certificates (automatic with Vercel)
3. Set up monitoring and alerting
4. Implement CI/CD pipeline
5. Set up staging environment
6. Plan for scaling

Congratulations! Your MERN stack application is now deployed on Vercel and ready for production use. 