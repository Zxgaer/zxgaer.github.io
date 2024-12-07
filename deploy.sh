#!/bin/bash
npm run build
git add .
git commit -m "$1"
git push -u origin source
cp -rf src/.vuepress/dist/* ../NekoDist/
cd ../NekoDist
git add .
git commit -m "$1"
git push -u origin main