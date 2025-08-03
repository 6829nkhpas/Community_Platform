# Deployment Guide - ProConnect LinkedIn Clone

This guide will help you deploy your MERN stack application to production.

## Overview

- **Frontend**: Deploy to Netlify (React.js)
- **Backend**: Deploy to Render or Heroku (Node.js/Express)
- **Database**: MongoDB Atlas (Cloud Database)
- **File Storage**: Cloudinary (Image/File Uploads)

## Prerequisites

1. **GitHub Repository**: Your code should be in a GitHub repository
2. **MongoDB Atlas Account**: For cloud database
3. **Cloudinary Account**: For file uploads
4. **Netlify Account**: For frontend deployment
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
CORS_ORIGIN=https://your-frontend-url.netlify.app
SOCKET_CORS_ORIGIN=https://your-frontend-url.netlify.app
```

### 3.4 Deploy
1. Click "Create Web Service"
2. Wait for deployment to complete
3. Note down your backend URL (e.g., `https://proconnect-backend.onrender.com`)

## Step 4: Deploy Frontend to Netlify

### 4.1 Create Netlify Account
1. Go to [Netlify](https://netlify.com/)
2. Sign up with your GitHub account

### 4.2 Deploy Frontend
1. Click "New site from Git"
2. Choose GitHub and select your repository
3. Configure build settings:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
   - **Node version**: `18`

### 4.3 Set Environment Variables
In Netlify dashboard, go to "Site settings" → "Environment variables" and add:

```env
REACT_APP_API_URL=https://your-backend-url.onrender.com
REACT_APP_SOCKET_URL=https://your-backend-url.onrender.com
```

### 4.4 Deploy
1. Click "Deploy site"
2. Wait for deployment to complete
3. Note down your frontend URL (e.g., `https://your-app-name.netlify.app`)

## Step 5: Update Backend CORS Settings

After getting your Netlify URL, update the backend environment variables in Render:

```env
CORS_ORIGIN=https://your-frontend-url.netlify.app
SOCKET_CORS_ORIGIN=https://your-frontend-url.netlify.app
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
1. Visit your Netlify URL
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
heroku config:set CORS_ORIGIN=https://your-frontend-url.netlify.app
heroku config:set SOCKET_CORS_ORIGIN=https://your-frontend-url.netlify.app
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
CORS_ORIGIN=https://your-frontend-url.netlify.app
SOCKET_CORS_ORIGIN=https://your-frontend-url.netlify.app
```

### Frontend Environment Variables
```env
# Required
REACT_APP_API_URL=https://your-backend-url.onrender.com
REACT_APP_SOCKET_URL=https://your-backend-url.onrender.com
```

## Troubleshooting

### Common Issues

#### 1. CORS Errors
- Ensure `CORS_ORIGIN` is set correctly in backend
- Check that frontend URL matches exactly (including https://)

#### 2. MongoDB Connection Issues
- Verify MongoDB Atlas network access allows all IPs (0.0.0.0/0)
- Check connection string format
- Ensure database user has correct permissions

#### 3. Cloudinary Upload Failures
- Verify Cloudinary credentials are correct
- Check network connectivity to Cloudinary
- Ensure file size limits are appropriate

#### 4. Build Failures
- Check Node.js version compatibility
- Verify all dependencies are in package.json
- Check for syntax errors in code

#### 5. Environment Variables Not Loading
- Ensure variables are set in the correct service
- Check variable names match exactly
- Redeploy after changing environment variables

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
# Check browser console for errors
# Verify environment variables are loaded
console.log(process.env.REACT_APP_API_URL)

# Test API calls
curl https://your-backend-url.onrender.com/health
```

## Security Considerations

### 1. Environment Variables
- Never commit sensitive data to Git
- Use strong, unique JWT secrets
- Rotate secrets regularly

### 2. Database Security
- Use strong database passwords
- Enable MongoDB Atlas security features
- Regular backups

### 3. API Security
- Implement rate limiting
- Use HTTPS in production
- Validate all inputs

### 4. File Upload Security
- Validate file types and sizes
- Scan uploaded files for malware
- Use secure file storage

## Performance Optimization

### 1. Frontend
- Enable gzip compression
- Use CDN for static assets
- Implement lazy loading
- Optimize images

### 2. Backend
- Enable caching
- Optimize database queries
- Use connection pooling
- Implement rate limiting

### 3. Database
- Create proper indexes
- Monitor query performance
- Use read replicas if needed

## Monitoring and Maintenance

### 1. Health Checks
- Monitor backend health endpoint
- Set up uptime monitoring
- Track error rates

### 2. Logs
- Monitor application logs
- Set up error alerting
- Regular log analysis

### 3. Updates
- Keep dependencies updated
- Monitor security advisories
- Regular security audits

## Support

If you encounter issues:

1. Check the troubleshooting section above
2. Review service-specific documentation:
   - [Netlify Docs](https://docs.netlify.com/)
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
2. Configure SSL certificates
3. Set up monitoring and alerting
4. Implement CI/CD pipeline
5. Set up staging environment
6. Plan for scaling

Congratulations! Your MERN stack application is now deployed and ready for production use. 