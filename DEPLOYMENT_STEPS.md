# Step-by-Step Deployment Instructions

## Quick Summary

Your app has been updated for deployment. Here's what changed:
- ✅ `server/server.js` - Now uses environment variables for MongoDB and PORT
- ✅ `client/src/api.js` - Now uses environment variable for API URL
- ✅ Created `vercel.json` - Frontend deployment configuration
- ✅ Created `.vercelignore` - Excludes unnecessary files

---

## Recommended Approach: Frontend on Vercel + Backend on Railway/Render

This is the simplest approach that requires minimal changes.

### Step 1: Set up MongoDB Atlas

1. Go to https://www.mongodb.com/cloud/atlas/register
2. Create a free account
3. Create a new cluster (choose free tier)
4. Click "Connect" → "Connect your application"
5. Copy the connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/mockmingle`)
6. Replace `<password>` with your database password
7. Click "Network Access" → "Add IP Address" → "Allow Access from Anywhere" (0.0.0.0/0)

### Step 2: Deploy Backend to Railway (Easiest)

1. Go to https://railway.app and sign up with GitHub
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your Mockminglee repository
4. In project settings:
   - Set **Root Directory** to `server`
   - Add environment variable:
     - Name: `MONGODB_URI`
     - Value: Your MongoDB Atlas connection string (from Step 1)
5. Railway will automatically detect Node.js and deploy
6. Once deployed, copy your backend URL (e.g., `https://your-app.railway.app`)

**Alternative: Deploy to Render**
1. Go to https://render.com and sign up
2. Click "New" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: mockminglee-backend
   - **Root Directory**: server
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
5. Add environment variable: `MONGODB_URI` = your MongoDB connection string
6. Click "Create Web Service"
7. Copy your backend URL

### Step 3: Deploy Frontend to Vercel

1. Go to https://vercel.com and sign up with GitHub
2. Click "Add New" → "Project"
3. Import your Mockminglee repository
4. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `client`
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)
5. Add environment variable:
   - Name: `VITE_API_URL`
   - Value: Your backend URL from Step 2 (e.g., `https://your-app.railway.app/api`)
6. Click "Deploy"
7. Once deployed, Vercel will give you a URL like `https://your-app.vercel.app`

### Step 4: Update CORS (if needed)

If you get CORS errors, update `server/server.js`:

```javascript
app.use(cors({
  origin: ['https://your-app.vercel.app', 'http://localhost:5173'],
  credentials: true
}));
```

Replace `https://your-app.vercel.app` with your actual Vercel frontend URL.

---

## Alternative: Full Vercel Deployment (Advanced)

If you want everything on Vercel, you need to convert your Express backend to serverless functions. This is more complex but keeps everything in one place.

### Steps:

1. The `api/index.js` file I created is a starting point, but you'll need to:
   - Move all route files to the `api/` directory structure
   - Convert Express routes to individual serverless functions
   - Handle MongoDB connection pooling properly

2. This approach is more complex and may require significant refactoring.

**I recommend Option 1 (Frontend on Vercel + Backend on Railway) for simplicity.**

---

## Testing Your Deployment

1. **Frontend**: Visit your Vercel URL
2. **Backend**: Test API endpoints:
   - `https://your-backend-url.railway.app/api/auth/login`
   - `https://your-backend-url.railway.app/api/tests`

3. **Check Browser Console**: Look for any CORS or API connection errors

---

## Troubleshooting

### CORS Errors
- Make sure your frontend URL is added to CORS origins in `server/server.js`
- Check that `VITE_API_URL` environment variable is set correctly in Vercel

### Database Connection Errors
- Verify MongoDB Atlas IP whitelist includes 0.0.0.0/0
- Check that `MONGODB_URI` environment variable is correct
- Ensure password in connection string doesn't have special characters (URL encode if needed)

### Build Failures
- Check Vercel build logs
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### API Not Found
- Check that `VITE_API_URL` includes `/api` at the end
- Verify backend is running and accessible
- Test backend URL directly in browser/Postman

---

## Environment Variables Summary

### Vercel (Frontend)
- `VITE_API_URL`: Your backend API URL (e.g., `https://your-app.railway.app/api`)

### Railway/Render (Backend)
- `MONGODB_URI`: Your MongoDB Atlas connection string
- `PORT`: Usually auto-set by platform (optional)

---

## Next Steps After Deployment

1. ✅ Test all features (signup, login, tests, attempts)
2. ✅ Set up custom domain (optional)
3. ✅ Enable HTTPS (automatic on Vercel and Railway)
4. ✅ Monitor logs for errors
5. ✅ Set up database backups (MongoDB Atlas has automatic backups)

