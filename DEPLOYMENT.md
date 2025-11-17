# Deployment Guide: AI VCE Web App

## Overview
- **Backend**: Flask + TensorFlow on Render
- **Frontend**: React on Vercel
- **Model Size**: 26MB (LinkNet for image segmentation)

---

## 🚀 Backend Deployment on Render

### Prerequisites
1. Create account on [Render](https://render.com)
2. Push your code to GitHub/GitLab

### Step 1: Create Web Service on Render

1. Go to Render Dashboard → **New** → **Web Service**
2. Connect your GitHub repository
3. Select the `AI_VCE_webapp` repository
4. Configure as follows:

   - **Name**: `ai-vce-backend` (or your choice)
   - **Root Directory**: `backend`
   - **Environment**: `Python 3`
   - **Region**: Choose closest to your users
   - **Branch**: `main`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn app:app`

### Step 2: Add Environment Variables

In Render dashboard, add:
- `PYTHON_VERSION`: `3.9.16`

### Step 3: Add Persistent Disk (Important!)

1. Go to your web service → **Disks**
2. Click **Add Disk**
   - **Name**: `uploads-disk`
   - **Mount Path**: `/opt/render/project/src/uploads`
   - **Size**: `1 GB` (free tier)
3. Save changes

### Step 4: Deploy

1. Click **Create Web Service**
2. Wait 5-10 minutes for initial deployment
3. Copy your backend URL: `https://your-app-name.onrender.com`

⚠️ **Note**: Free tier spins down after 15 mins of inactivity. First request after idle may take 50-60 seconds.

---

## 🌐 Frontend Deployment on Vercel

### Prerequisites
1. Create account on [Vercel](https://vercel.com)
2. Push your code to GitHub

### Step 1: Deploy to Vercel

1. Go to Vercel Dashboard → **Add New** → **Project**
2. Import your GitHub repository
3. Configure:
   - **Framework Preset**: Create React App
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`

### Step 2: Configure Environment Variables

In Vercel project settings → **Environment Variables**, add:

```
REACT_APP_API_BASE_URL = https://your-app-name.onrender.com
```

Replace `your-app-name` with your actual Render service name.

### Step 3: Deploy

1. Click **Deploy**
2. Wait 2-3 minutes
3. Your app will be live at: `https://your-project-name.vercel.app`

### Step 4: Update Production Environment File

After deployment, update `frontend/.env.production` with your actual Render URL:

```env
REACT_APP_API_BASE_URL=https://your-actual-app-name.onrender.com
```

Then redeploy or push changes to trigger auto-deployment.

---

## 🔧 Post-Deployment Configuration

### Update CORS in Backend (if needed)

The backend already has CORS enabled for all origins. For production, you may want to restrict it:

```python
# In backend/app.py
CORS(app, resources={r"/*": {"origins": "https://your-vercel-app.vercel.app"}})
```

---

## 🧪 Testing Your Deployment

1. **Test Backend**:
   ```bash
   curl https://your-app-name.onrender.com/
   ```

2. **Test Frontend**:
   - Visit your Vercel URL
   - Upload an image
   - Verify segmentation works

---

## 📊 Monitoring & Logs

### Render Logs
- Go to your service → **Logs** tab
- Monitor real-time logs and errors

### Vercel Logs
- Go to your project → **Deployments** → Select deployment → **View Function Logs**

---

## 💰 Cost Breakdown

### Render (Backend)
- **Free Tier**: 750 hours/month
- Spins down after 15 mins inactivity
- 1GB persistent disk included

### Vercel (Frontend)
- **Free Tier**: 
  - 100GB bandwidth/month
  - Unlimited deployments
  - Automatic HTTPS

**Total Cost**: $0/month for development/testing

---

## 🔄 Continuous Deployment

Both platforms support auto-deployment:

1. **Push to GitHub** → Automatic deployment on both Render & Vercel
2. **Environment variables** can be updated without redeployment
3. **Rollback** available on both platforms

---

## ⚠️ Important Notes

1. **First Load Delay**: Render free tier has cold start (50-60s). Consider paid plan ($7/month) for always-on service.

2. **File Storage**: Uploaded images are stored on Render's persistent disk. Free tier = 1GB.

3. **Model Loading**: TensorFlow model (26MB) loads on startup, taking ~20-30 seconds initially.

4. **HTTPS**: Both Render and Vercel provide automatic HTTPS.

5. **Custom Domains**: Both platforms support custom domains (free on Vercel, paid on Render).

---

## 🐛 Troubleshooting

### Backend Issues

**Issue**: Model not loading
- Check Render logs for errors
- Verify `dermai_smart_router_model.h5` is in the backend directory

**Issue**: Uploads not saving
- Ensure persistent disk is mounted correctly
- Check disk mount path: `/opt/render/project/src/uploads`

### Frontend Issues

**Issue**: API calls failing
- Verify `REACT_APP_API_BASE_URL` is set correctly
- Check browser console for CORS errors
- Ensure Render service is active (wake it up by visiting the URL)

**Issue**: Environment variables not working
- Redeploy on Vercel after changing env vars
- Clear browser cache

---

## 📞 Support

- **Render Docs**: https://render.com/docs
- **Vercel Docs**: https://vercel.com/docs

---

## ✅ Deployment Checklist

Backend (Render):
- [ ] Repository connected
- [ ] Root directory set to `backend`
- [ ] Build & start commands configured
- [ ] Persistent disk added for uploads
- [ ] Service deployed successfully
- [ ] Backend URL copied

Frontend (Vercel):
- [ ] Repository connected
- [ ] Root directory set to `frontend`
- [ ] Environment variable added (REACT_APP_API_BASE_URL)
- [ ] Deployment successful
- [ ] App tested with image upload

Post-Deployment:
- [ ] CORS configured properly
- [ ] Image upload/segmentation working
- [ ] Response times acceptable
- [ ] Error monitoring set up
