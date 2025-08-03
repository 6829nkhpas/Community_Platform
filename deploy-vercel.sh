#!/bin/bash

echo "🚀 Vercel Deployment Script for ProConnect"
echo "=========================================="

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI is not installed. Installing now..."
    npm install -g vercel
fi

# Check if user is logged in to Vercel
if ! vercel whoami &> /dev/null; then
    echo "❌ Not logged in to Vercel. Please login first:"
    vercel login
    exit 1
fi

echo "✅ Vercel CLI is ready"

# Navigate to frontend directory
cd frontend

echo "📁 Deploying from frontend directory..."

# Deploy to Vercel
echo "🚀 Starting deployment..."
vercel --prod

echo ""
echo "✅ Deployment completed!"
echo ""
echo "📋 Next steps:"
echo "1. Set environment variables in Vercel dashboard:"
echo "   - REACT_APP_API_URL=https://your-backend-url.onrender.com"
echo "   - REACT_APP_SOCKET_URL=https://your-backend-url.onrender.com"
echo ""
echo "2. Update backend CORS settings with your Vercel URL"
echo "3. Test your application"
echo ""
echo "📖 For detailed instructions, see VERCEL_DEPLOYMENT_GUIDE.md" 