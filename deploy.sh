#!/use/bin/env sh

set -e

npm run docs:build

cd docs/.vitepress/dist

git init
git add -A
git commit -m "自动部署"
git push -f https://gitee.com/cheng-jingze/docs.git master:gh-pages

cd -
rm -rf docs/.vitepress/dist
