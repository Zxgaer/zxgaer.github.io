MSG="${*:-Updated: $(date +%Y/%m/%d)}"
git add .
git commit -m "$MSG"
git push -u origin source
npm run deploy:pages
