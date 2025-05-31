npm run docs:build
git add .
git commit -m "$1"
git push -u origin source
cp -rf src/.vuepress/dist/* ../output/
cd ../output
git add .
git commit -m "$1"
git push -u origin main