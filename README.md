# cw-components

CoverWallet components

## Package usage

### To start local server
1.  ```npm start```
2.  Open http://localhost:8002/basic/ in your browser

### To build lib
2.  ```npm run build```

##  To make cw-components local changes instantly work on your project:

1. ```cd path-to-local/cw-components```
2. ```npm link```
3. ```npm run build-watch```
4. ```cd path-to-other-project/project-name```
5. ```npm link cw-components```

#### To use actual package.json cw-components lib version instead of npm link just do:

1. ```cd path-to-other-project/project-name```
2. ```npm unlink cw-components```

### Next time, for example after pc reboot you will need only to:

1. ```cd path-to-local/cw-components```
2. ```npm run build-watch```


## To push your changes to Github pages
This still have some bug with fonts on coverwallet.github.io

1. Run ```npm run gh-pages```
2. Open http://coverwallet.github.io/cw-components/basic/

## To publish new version to npm

1. Create a user at www.npmjs.com, if you haven't yet
2. Make ```npm login```
3. Ask to add you to collaborators for https://www.npmjs.com/package/cw-components
4. Create a release version at github
5. Run ```npm publish```

