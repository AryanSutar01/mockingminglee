# 🚀 Production Deployment Guide

## Quick Deploy (No MongoDB Needed!)

Since you're using in-memory storage, deployment is super simple:

### Option 1: Frontend on Vercel + Backend on Railway ⭐ (Recommended)

**Time: ~10 minutes**

---

## Step 1: Commit and Push Code

```bash
# Add all changes
git add .

# Commit
git commit -m "Remove MongoDB, add in-memory storage, prepare for production"

# Push to GitHub
git push origin main
```

---

## Step 2: Deploy Backend to Railway

1. **Go to Railway**: https://railway.app
2. **Sign up** with GitHub
3. **New Project** → **Deploy from GitHub repo**
4. **Select your repository**
5. **Configure**:
   - **Root Directory**: `server`
   - **Start Command**: `node server.js` (or leave auto-detected)
6. **Deploy** - Railway will auto-detect Node.js
7. **Copy the URL** (e.g., `https://your-app.railway.app`)

**No environment variables needed!** (No MongoDB)

---

## Step 3: Deploy Frontend to Vercel

1. **Go to Vercel**: https://vercel.com
2. **Sign up** with GitHub
3. **Add New Project** → **Import your repository**
4. **Configure**:
   - **Framework Preset**: Vite (auto-detected)
   - **Root Directory**: `client`
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)
5. **Environment Variables**:
   - **Name**: `VITE_API_URL`
   - **Value**: `https://your-app.railway.app/api` (your Railway backend URL)
6. **Deploy**

---

## Step 4: Update CORS (If Needed)

If you get CORS errors, update `server/server.js`:

```javascript
app.use(cors({
  origin: ['https://your-frontend.vercel.app', 'http://localhost:5173'],
  credentials: true
}));
```

Then redeploy backend.

---

## Step 5: Test Production

1. Visit your Vercel URL
2. Test signup/login
3. Call `/api/seed` to populate sample data:
   ```
   POST https://your-backend.railway.app/api/seed
   ```

---

## Alternative: Deploy Backend to Render

1. **Go to Render**: https://render.com
2. **New** → **Web Service**
3. **Connect GitHub** → Select repo
4. **Configure**:
   - **Name**: mockminglee-backend
   - **Root Directory**: `server`
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
5. **Create Web Service**
6. **Copy URL** and use in Vercel `VITE_API_URL`

---

## Important Notes

⚠️ **Data Persistence**: 
- Data resets when backend restarts (in-memory storage)
- Perfect for demos and development
- For production with persistent data, consider adding file-based storage or a database later

✅ **No Database Setup**: 
- No MongoDB connection strings needed
- No database configuration required
- Super simple deployment!

---

## Troubleshooting

### CORS Errors
- Update CORS in `server/server.js` with your Vercel frontend URL
- Redeploy backend

### API Not Found
- Check `VITE_API_URL` includes `/api` at the end
- Verify backend URL is accessible

### Build Fails
- Check Vercel build logs
- Ensure all dependencies are in `package.json`

---

## Your URLs

After deployment, you'll have:
- **Frontend**: `https://your-app.vercel.app`
- **Backend**: `https://your-app.railway.app`

🎉 **You're live!**

