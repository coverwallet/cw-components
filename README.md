# cw-components

CoverWallet components

## Package usage

### To start local server
1.  ```yarn start```
2.  Open http://localhost:8002/ in your browser

### To build lib
2.  ```yarn build```

##  To make cw-components local changes instantly work on your project:

1. ```cd path-to-local/cw-components```
2. ```yarn link```
3. ```yarn build-watch```
4. ```cd path-to-other-project/project-name```
5. ```yarn link cw-components```

#### To use actual package.json cw-components lib version instead of npm link just do:

1. ```cd path-to-other-project/project-name```
2. ```yarn unlink cw-components```

### Next time, for example after pc reboot you will need only to:

1. ```cd path-to-local/cw-components```
2. ```yarn build-watch```


## To push your changes to Github pages
This still have some bug with fonts on coverwallet.github.io

1. Run ```yarn gh-pages```
2. Open https://coverwallet.github.io/cw-components/index.html

## To publish new version to npm

1. Create a user at www.npmjs.com, if you haven't yet
2. Make ```npm login```
3. Ask to add you to collaborators for https://www.npmjs.com/package/cw-components
4. Create a release version at github
5. Run ```npm publish```

