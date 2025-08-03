#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const crypto = require('crypto');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🚀 ProConnect Deployment Setup');
console.log('==============================\n');

console.log('This script will help you set up your environment variables for deployment.\n');

// Generate a random JWT secret
const generateJWTSecret = () => {
  return crypto.randomBytes(64).toString('hex');
};

const questions = [
  {
    name: 'mongodb_uri',
    message: 'Enter your MongoDB Atlas connection string:',
    required: true,
    placeholder: 'mongodb+srv://username:password@cluster.mongodb.net/proconnect?retryWrites=true&w=majority'
  },
  {
    name: 'cloudinary_cloud_name',
    message: 'Enter your Cloudinary Cloud Name:',
    required: true,
    placeholder: 'your_cloud_name'
  },
  {
    name: 'cloudinary_api_key',
    message: 'Enter your Cloudinary API Key:',
    required: true,
    placeholder: '123456789012345'
  },
  {
    name: 'cloudinary_api_secret',
    message: 'Enter your Cloudinary API Secret:',
    required: true,
    placeholder: 'your_api_secret_here'
  },
  {
    name: 'email_user',
    message: 'Enter your email address (for password reset):',
    required: false,
    placeholder: 'your_email@gmail.com'
  },
  {
    name: 'email_pass',
    message: 'Enter your email app password:',
    required: false,
    placeholder: 'your_email_app_password'
  },
  {
    name: 'frontend_url',
    message: 'Enter your Netlify frontend URL (leave empty for now, update later):',
    required: false,
    placeholder: 'https://your-app-name.netlify.app'
  },
  {
    name: 'backend_url',
    message: 'Enter your Render/Heroku backend URL (leave empty for now, update later):',
    required: false,
    placeholder: 'https://your-backend-url.onrender.com'
  }
];

const answers = {};

const askQuestion = (index) => {
  if (index >= questions.length) {
    generateFiles();
    return;
  }

  const question = questions[index];
  const placeholder = question.placeholder ? ` (${question.placeholder})` : '';
  
  rl.question(`${question.message}${placeholder}: `, (answer) => {
    if (question.required && !answer.trim()) {
      console.log('❌ This field is required. Please provide a value.\n');
      askQuestion(index);
      return;
    }
    
    answers[question.name] = answer.trim();
    askQuestion(index + 1);
  });
};

const generateFiles = () => {
  console.log('\n📝 Generating configuration files...\n');

  // Generate JWT secret
  const jwtSecret = generateJWTSecret();

  // Backend environment variables
  const backendEnv = `# Backend Environment Variables for Production
# Copy these to your Render/Heroku environment variables

NODE_ENV=production
PORT=10000
MONGODB_URI=${answers.mongodb_uri}
JWT_SECRET=${jwtSecret}
JWT_EXPIRE=7d
CLOUDINARY_CLOUD_NAME=${answers.cloudinary_cloud_name}
CLOUDINARY_API_KEY=${answers.cloudinary_api_key}
CLOUDINARY_API_SECRET=${answers.cloudinary_api_secret}
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=${answers.email_user || 'your_email@gmail.com'}
EMAIL_PASS=${answers.email_pass || 'your_email_app_password'}
EMAIL_FROM=noreply@proconnect.com
CORS_ORIGIN=${answers.frontend_url || 'https://your-frontend-url.netlify.app'}
SOCKET_CORS_ORIGIN=${answers.frontend_url || 'https://your-frontend-url.netlify.app'}
`;

  // Frontend environment variables
  const frontendEnv = `# Frontend Environment Variables for Production
# Copy these to your Netlify environment variables

REACT_APP_API_URL=${answers.backend_url || 'https://your-backend-url.onrender.com'}
REACT_APP_SOCKET_URL=${answers.backend_url || 'https://your-backend-url.onrender.com'}
`;

  // Local development environment variables
  const localEnv = `# Local Development Environment Variables
# Copy this to backend/.env

NODE_ENV=development
PORT=5000
MONGODB_URI=${answers.mongodb_uri}
JWT_SECRET=${jwtSecret}
JWT_EXPIRE=7d
CLOUDINARY_CLOUD_NAME=${answers.cloudinary_cloud_name}
CLOUDINARY_API_KEY=${answers.cloudinary_api_key}
CLOUDINARY_API_SECRET=${answers.cloudinary_api_secret}
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=${answers.email_user || 'your_email@gmail.com'}
EMAIL_PASS=${answers.email_pass || 'your_email_app_password'}
EMAIL_FROM=noreply@proconnect.com
CORS_ORIGIN=http://localhost:3000
SOCKET_CORS_ORIGIN=http://localhost:3000
`;

  // Write files
  try {
    fs.writeFileSync('backend-env-production.txt', backendEnv);
    fs.writeFileSync('frontend-env-production.txt', frontendEnv);
    fs.writeFileSync('local-env.txt', localEnv);
    
    console.log('✅ Configuration files generated successfully!\n');
    
    console.log('📁 Generated files:');
    console.log('   - backend-env-production.txt (for Render/Heroku)');
    console.log('   - frontend-env-production.txt (for Netlify)');
    console.log('   - local-env.txt (for local development)\n');
    
    console.log('📋 Next steps:');
    console.log('1. Set up MongoDB Atlas:');
    console.log('   - Go to https://www.mongodb.com/atlas');
    console.log('   - Create a free cluster');
    console.log('   - Get your connection string\n');
    
    console.log('2. Set up Cloudinary:');
    console.log('   - Go to https://cloudinary.com/');
    console.log('   - Create a free account');
    console.log('   - Get your credentials\n');
    
    console.log('3. Deploy Backend to Render:');
    console.log('   - Go to https://render.com/');
    console.log('   - Create a new Web Service');
    console.log('   - Copy variables from backend-env-production.txt\n');
    
    console.log('4. Deploy Frontend to Netlify:');
    console.log('   - Go to https://netlify.com/');
    console.log('   - Connect your GitHub repository');
    console.log('   - Copy variables from frontend-env-production.txt\n');
    
    console.log('5. Update URLs:');
    console.log('   - After deployment, update the URLs in your environment variables');
    console.log('   - Redeploy both services\n');
    
    console.log('📖 For detailed instructions, see DEPLOYMENT_GUIDE.md');
    
  } catch (error) {
    console.error('❌ Error generating files:', error.message);
  }
  
  rl.close();
};

// Start the questionnaire
askQuestion(0); 