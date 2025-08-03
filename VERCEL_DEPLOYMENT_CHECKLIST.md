# Vercel Deployment Checklist

## Pre-Deployment Checklist

### ✅ Files to Remove (Already Done)

- [x] Removed `netlify.toml` from root
- [x] Removed root `vercel.json`
- [x] Removed `frontend/public/_redirects`

### ✅ Files to Keep

- [x] `frontend/vercel.json` - Vercel configuration
- [x] `frontend/public/robots.txt` - SEO file
- [x] `frontend/package.json` - Dependencies and scripts

### ✅ Configuration Files

- [x] Vercel configuration optimized
- [x] Node.js version specified (>=16.0.0)
- [x] Build script configured
- [x] Routes configured for React Router

## Deployment Steps

### 1. Install Vercel CLI

```bash
npm install -g vercel
```

### 2. Login to Vercel

```bash
vercel login
```

### 3. Deploy from Frontend Directory

```bash
cd frontend
vercel
```

### 4. Set Environment Variables

In Vercel dashboard, set:

```
REACT_APP_API_URL=https://your-backend-url.onrender.com
REACT_APP_SOCKET_URL=https://your-backend-url.onrender.com
```

### 5. Deploy to Production

```bash
vercel --prod
```

## Common Issues and Solutions

### Issue: Build Fails

**Solution**:

- Check Node.js version (>=16.0.0)
- Ensure all dependencies are in package.json
- Check for syntax errors in code

### Issue: Routing Not Working

**Solution**:

- Verify vercel.json routes configuration
- Ensure all routes redirect to index.html

### Issue: Environment Variables Not Loading

**Solution**:

- Check variable names start with REACT*APP*
- Redeploy after setting variables
- Verify variables are set for Production environment

### Issue: CORS Errors

**Solution**:

- Update backend CORS_ORIGIN with Vercel URL
- Ensure backend is deployed and accessible

## Quick Deploy Command

```bash
npm run deploy-vercel
```

## Manual Deploy Steps

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Set Root Directory to `frontend`
4. Set Build Command to `npm run build`
5. Set Output Directory to `build`
6. Add environment variables
7. Deploy

## Post-Deployment

1. Test all routes work
2. Test API connections
3. Test file uploads
4. Test real-time features
5. Update backend CORS settings
