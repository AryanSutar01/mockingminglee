# 🔧 Fix 404 Error - Environment Variable Issue

## Problem
The request is going to `https://mockingminglee.onrender.com/auth/signup` instead of `https://mockingminglee.onrender.com/api/auth/signup`.

This means the `VITE_API_URL` environment variable is either:
1. Not set in Vercel
2. Set incorrectly
3. The build hasn't picked up the new code

## Solution

### Step 1: Set Environment Variable in Vercel

1. **Go to Vercel Dashboard**: https://vercel.com
2. **Select your project** (mockingminglee)
3. **Go to Settings** → **Environment Variables**
4. **Add/Edit Variable**:
   - **Name**: `VITE_API_URL`
   - **Value**: `https://mockingminglee.onrender.com/api`
   - **Environment**: Production, Preview, Development (select all)
5. **Save**

### Step 2: Redeploy

After setting the environment variable:

1. **Go to Deployments tab**
2. **Click the three dots** (⋯) on the latest deployment
3. **Click "Redeploy"**
4. **Or push a new commit** to trigger rebuild

### Step 3: Verify

After redeploy, check:
- The build logs should show the environment variable is available
- The app should now call `/api/auth/signup` correctly

## Alternative: Check Current Environment Variable

If the variable is already set:
1. Check if it ends with `/api` - it should be `https://mockingminglee.onrender.com/api`
2. If it's just `https://mockingminglee.onrender.com`, the code will auto-add `/api`
3. Make sure it's set for **Production** environment

## Quick Test

After redeploy, open browser console and check:
```javascript
console.log(import.meta.env.VITE_API_URL)
```

It should show: `https://mockingminglee.onrender.com/api`

