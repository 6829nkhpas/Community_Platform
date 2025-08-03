// API Configuration for different environments
const API_CONFIG = {
  // Development environment
  development: {
    baseURL: 'http://localhost:5000',
    socketURL: 'http://localhost:5000'
  },
  // Production environment
  production: {
    baseURL: process.env.REACT_APP_API_URL || 'https://your-backend-url.onrender.com',
    socketURL: process.env.REACT_APP_SOCKET_URL || 'https://your-backend-url.onrender.com'
  }
};

// Get current environment
const environment = process.env.NODE_ENV || 'development';

// Export configuration for current environment
export const API_BASE_URL = API_CONFIG[environment].baseURL;
export const SOCKET_URL = API_CONFIG[environment].socketURL;

// API endpoints
export const API_ENDPOINTS = {
  // Auth endpoints
  AUTH: {
    REGISTER: '/api/auth/register',
    LOGIN: '/api/auth/login',
    LOGOUT: '/api/auth/logout',
    REFRESH: '/api/auth/refresh',
    FORGOT_PASSWORD: '/api/auth/forgot-password',
    RESET_PASSWORD: '/api/auth/reset-password',
    VERIFY_EMAIL: '/api/auth/verify-email'
  },
  
  // User endpoints
  USER: {
    PROFILE: '/api/users/profile',
    UPDATE_PROFILE: '/api/users/profile',
    UPLOAD_AVATAR: '/api/users/avatar',
    UPLOAD_BANNER: '/api/users/banner',
    CONNECTIONS: '/api/users/connections',
    SUGGESTIONS: '/api/users/suggestions',
    SEARCH: '/api/users/search'
  },
  
  // Post endpoints
  POST: {
    CREATE: '/api/posts',
    GET_ALL: '/api/posts',
    GET_BY_ID: (id) => `/api/posts/${id}`,
    UPDATE: (id) => `/api/posts/${id}`,
    DELETE: (id) => `/api/posts/${id}`,
    LIKE: (id) => `/api/posts/${id}/like`,
    COMMENT: (id) => `/api/posts/${id}/comments`,
    SHARE: (id) => `/api/posts/${id}/share`
  },
  
  // Job endpoints
  JOB: {
    CREATE: '/api/jobs',
    GET_ALL: '/api/jobs',
    GET_BY_ID: (id) => `/api/jobs/${id}`,
    UPDATE: (id) => `/api/jobs/${id}`,
    DELETE: (id) => `/api/jobs/${id}`,
    APPLY: (id) => `/api/jobs/${id}/apply`,
    APPLICATIONS: '/api/jobs/applications'
  },
  
  // Message endpoints
  MESSAGE: {
    CONVERSATIONS: '/api/messages/conversations',
    MESSAGES: (conversationId) => `/api/messages/${conversationId}`,
    SEND: '/api/messages/send',
    MARK_READ: (conversationId) => `/api/messages/${conversationId}/read`
  },
  
  // Group endpoints
  GROUP: {
    CREATE: '/api/groups',
    GET_ALL: '/api/groups',
    GET_BY_ID: (id) => `/api/groups/${id}`,
    UPDATE: (id) => `/api/groups/${id}`,
    DELETE: (id) => `/api/groups/${id}`,
    JOIN: (id) => `/api/groups/${id}/join`,
    LEAVE: (id) => `/api/groups/${id}/leave`,
    MEMBERS: (id) => `/api/groups/${id}/members`
  },
  
  // Company endpoints
  COMPANY: {
    CREATE: '/api/companies',
    GET_ALL: '/api/companies',
    GET_BY_ID: (id) => `/api/companies/${id}`,
    UPDATE: (id) => `/api/companies/${id}`,
    DELETE: (id) => `/api/companies/${id}`,
    FOLLOW: (id) => `/api/companies/${id}/follow`,
    UNFOLLOW: (id) => `/api/companies/${id}/unfollow`
  },
  
  // Notification endpoints
  NOTIFICATION: {
    GET_ALL: '/api/notifications',
    MARK_READ: (id) => `/api/notifications/${id}/read`,
    MARK_ALL_READ: '/api/notifications/read-all',
    DELETE: (id) => `/api/notifications/${id}`
  }
};

// Helper function to get full API URL
export const getApiUrl = (endpoint) => {
  return `${API_BASE_URL}${endpoint}`;
};

// Helper function to get full socket URL
export const getSocketUrl = () => {
  return SOCKET_URL;
};

export default API_CONFIG; 