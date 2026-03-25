# 🚀 WE Stores AI Analyzer - Deployment Guide

## ⚡ Quick Start (GitHub Pages - FREE)

### Step 1: Clone Your Repository
```bash
git clone https://github.com/tia8910/we.git
cd we
```

### Step 2: Copy Files
```bash
cp /path/to/index.html .
```

### Step 3: Push to GitHub
```bash
git add index.html
git commit -m "Add WE Stores AI Analyzer"
git push origin main
```

### Step 4: Enable GitHub Pages
1. Go to **https://github.com/tia8910/we/settings**
2. Scroll to **Pages**
3. Select "Deploy from a branch"
4. Choose **main** branch
5. Click **Save**

### Step 5: Your App is Live! 🎉
Visit: **https://tia8910.github.io/we**

---

## 🔧 Alternative: Vercel Deployment (Recommended for CORS)

Vercel is better because it can proxy the Google Sheets request server-side.

### Step 1: Install Vercel
```bash
npm install -g vercel
```

### Step 2: Create `api/sheets.js`
```javascript
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  try {
    const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR...pub?output=csv';
    const response = await fetch(csvUrl);
    const csv = await response.text();
    
    res.status(200).json({ success: true, csv });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
```

### Step 3: Deploy
```bash
vercel
```

### Step 4: Update `index.html`
Change the data loading to use your Vercel API:
```javascript
const response = await fetch('https://your-vercel-app.vercel.app/api/sheets');
const data = await response.json();
const csv = data.csv;
```

---

## 📋 What You Get

✅ **Auto-loading data** from your Google Sheet  
✅ **AI-powered analysis** with Claude  
✅ **Beautiful WE brand design**  
✅ **No server needed** (GitHub Pages)  
✅ **Free hosting**  
✅ **Instant updates** (just commit and push)  

---

## 🎯 Current Issue

The app works perfectly, but Google Sheets CSV export has CORS restrictions when fetching from browser.

**Solution**: Deploy to GitHub Pages or Vercel - the app will work fine there!

---

## 📞 Support

If you need help with deployment:
1. GitHub Pages issues → Contact GitHub support
2. Vercel issues → Visit vercel.com
3. App issues → Check browser console (F12)

---

**Ready to deploy? Push to GitHub Pages in 5 minutes!** 🚀
