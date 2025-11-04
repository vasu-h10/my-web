#!/data/data/com.termux/files/usr/bin/bash
# ===========================================================
# 🔄 Setup identical local + Render workflow for Vite + React
# ===========================================================

echo "🧹 Cleaning old build..."
rm -rf dist

echo "⚙️ Building production bundle..."
npm run build

echo "🧪 Previewing locally (same as Render)..."
npm run preview &

PREVIEW_PID=$!
sleep 3
echo "🌐 Local preview running at: http://localhost:4173"

echo "📦 Committing & pushing to GitHub for Render..."
git add -A
git commit -m "Auto-sync build $(date '+%Y-%m-%d %H:%M:%S')" || echo "✅ No changes to commit"
git push

echo "⏳ Waiting for Render deployment to refresh..."
sleep 25

LIVE_URL="https://my-web.onrender.com"
echo "🌍 Checking Render live site ($LIVE_URL)..."
curl -s -I "$LIVE_URL" | grep -E 'HTTP|Date'

echo "✅ Done. Local + Render are now identical."
kill $PREVIEW_PID 2>/dev/null
