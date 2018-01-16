#!/bin/bash

# make sure working directory is clean
DIRTY=$(git status | grep modified -c)
let DIRTY+=$(git status | grep Untracked -c)

if [ $DIRTY -gt 0 ] && [ "$1" != "-f" ]; then
  echo "\033[0;31m"Refusing to operate on unclean working directory"\033[0m"
  echo Use \"git status\" to see which files have been modified
  exit 1
fi

# delete gh-pages branch
BRANCH=$(git rev-parse --abbrev-ref HEAD)

if [ "$BRANCH" == "gh-pages" ]; then
  git checkout master
fi
git branch -D gh-pages
git push origin :gh-pages

# build examples
PAGES=true ./node_modules/.bin/webpack --config ./webpack.config.js -p

# move example files to root
mv examples/* ./

# create gh-pages branch
git checkout -b gh-pages
git add .
git commit -m "updating gh-pages"
git push -f origin gh-pages
git checkout $BRANCH
