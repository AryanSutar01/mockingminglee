# Vercel Deployment Guide for Mockminglee

## Project Overview
Your project consists of:
- **Frontend**: React + Vite app (`client/` folder)
- **Backend**: Express.js server (`server/` folder)
- **Database**: MongoDB (currently localhost)

## Deployment Strategy

Vercel is excellent for frontend deployment, but for a full-stack app with Express backend, you have two options:

### Option 1: Deploy Frontend on Vercel + Backend on Vercel Serverless Functions (Recommended)
This keeps everything in one place and is cost-effective.

### Option 2: Deploy Frontend on Vercel + Backend on Separate Platform
Deploy backend on Railway, Render, or Heroku.

---

## Prerequisites

1. **MongoDB Atlas Account** (Free tier available)
   - Sign up at https://www.mongodb.com/cloud/atlas
   - Create a cluster
   - Get your connection string
   - Whitelist IP addresses (0.0.0.0/0 for development)

2. **Vercel Account**
   - Sign up at https://vercel.com
   - Install Vercel CLI: `npm i -g vercel`

---

## Option 1: Full Vercel Deployment (Recommended)

### Step 1: Set up MongoDB Atlas

1. Create a MongoDB Atlas account
2. Create a new cluster (free tier)
3. Click "Connect" → "Connect your application"
4. Copy the connection string (e.g., `mongodb+srv://username:password@cluster.mongodb.net/mockmingle`)
5. Replace `<password>` with your database password

### Step 2: Convert Backend to Vercel Serverless Functions

The backend needs to be restructured as Vercel serverless functions. I'll create the necessary structure.

### Step 3: Configure Environment Variables

In Vercel dashboard:
- Go to your project → Settings → Environment Variables
- Add:
  - `MONGODB_URI`: Your MongoDB Atlas connection string
  - `NODE_ENV`: `production`

### Step 4: Deploy

1. Push your code to GitHub
2. Import project in Vercel
3. Set root directory to project root
4. Vercel will auto-detect and deploy

---

## Option 2: Frontend on Vercel + Backend Elsewhere

### Frontend Deployment (Vercel)

1. **Update API Configuration**
   - The `client/src/api.js` file needs to use environment variables
   - Update to use `import.meta.env.VITE_API_URL`

2. **Create `vercel.json` in project root**
   - Configure build settings

3. **Deploy**
   - Connect GitHub repo to Vercel
   - Set root directory to `client`
   - Add environment variable: `VITE_API_URL` (your backend URL)

### Backend Deployment (Railway/Render)

**For Railway:**
1. Sign up at railway.app
2. New Project → Deploy from GitHub
3. Select your repo, set root directory to `server`
4. Add environment variable: `MONGODB_URI`
5. Railway will provide a URL like `https://your-app.railway.app`

**For Render:**
1. Sign up at render.com
2. New Web Service → Connect GitHub
3. Set:
   - Build Command: `cd server && npm install`
   - Start Command: `cd server && node server.js`
   - Environment: `Node`
4. Add environment variable: `MONGODB_URI`
5. Render will provide a URL

---

## Required Code Changes

### 1. Update MongoDB Connection (server/server.js)
Change from localhost to environment variable:
```javascript
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/mockmingle");
```

### 2. Update API Base URL (client/src/api.js)
Use environment variable:
```javascript
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});
```

### 3. Update Server Port (server/server.js)
Use PORT environment variable:
```javascript
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
```

---

## Quick Start (Option 1 - Full Vercel)

After I create the necessary files:

1. **Set up MongoDB Atlas** (get connection string)

2. **Update environment variables in code** (I'll do this)

3. **Deploy to Vercel:**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Login
   vercel login
   
   # Deploy
   vercel
   ```

4. **Add environment variables in Vercel Dashboard:**
   - `MONGODB_URI`: Your MongoDB Atlas connection string

5. **Redeploy:**
   ```bash
   vercel --prod
   ```

---

## Important Notes

1. **CORS**: Your backend already has CORS enabled, which is good for production
2. **Environment Variables**: Never commit `.env` files with secrets
3. **Database**: MongoDB Atlas free tier is perfect for development
4. **Serverless Functions**: Vercel functions have execution time limits (10s on free tier, 60s on Pro)
5. **Build Output**: Vercel will automatically build your Vite app

---

## Troubleshooting

- **CORS Errors**: Ensure backend URL is in CORS whitelist
- **Database Connection**: Check MongoDB Atlas IP whitelist (0.0.0.0/0 for all)
- **Environment Variables**: Make sure they're set in Vercel dashboard
- **Build Failures**: Check Vercel build logs for errors

