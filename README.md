# HiveMind

A blogging platform built with React, TypeScript, and Cloudflare Workers.

## Setup Instructions

This project consists of three main components:
- `common`: Shared TypeScript types and validation schemas
- `backend`: API built with Cloudflare Workers
- `frontend`: React web application

### Environment Variables

Before running the application, you need to set up environment variables:

#### Backend

1. Copy the example environment file:
   ```bash
   cp backend/env.example backend/.env
   ```

2. Edit `backend/.env` to add your actual values:
   ```bash
   DATABASE_URL="postgresql://username:password@host:port/database"
   JWT_SECRET="your-super-secret-jwt-key-here"
   ```

3. For local development with Wrangler, you can also set these variables in your `.dev.vars` file.

#### Frontend

1. Copy the example environment file:
   ```bash
   cp frontend/env.example frontend/.env
   ```

2. Edit `frontend/.env` to add your actual values:
   ```bash
   VITE_BACKEND_URL="https://your-backend-url.workers.dev"
   ```

**⚠️ Important Security Notes:**
- Never commit `.env` files to version control
- Use strong, unique JWT secrets
- Keep your database credentials secure
- The `.gitignore` files are already configured to ignore `.env` files

### Installation

Install dependencies for each package:

```bash
# Install common package dependencies
cd common
npm install

# Install backend dependencies
cd ../backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### Running the Application

#### Backend

```bash
cd backend
npm run dev
```

#### Frontend

```bash
cd frontend
npm run dev
```

## Deployment

### Backend

Deploy the backend to Cloudflare Workers:

```bash
cd backend
npx wrangler deploy
```

Make sure to set your environment variables in the Cloudflare Workers dashboard or using the Wrangler CLI:

```bash
npx wrangler secret put JWT_SECRET
npx wrangler secret put DATABASE_URL
```

### Frontend

Build the frontend:

```bash
cd frontend
npm run build
```

Then deploy the `dist` folder to your hosting provider of choice (Netlify, Vercel, etc.). 