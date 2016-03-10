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

### Next time, for example after pc reboot you will need only to:

1. ```cd path-to-local/cw-components```
2. ```npm run build-watch```


## To push your changes to Github pages
This still have some bug with fonts on coverwallet.github.io

1. Make gh-pages push script executable
```chmod +x ./scripts/gh-pages.sh```
this step is required only on first time

2. Run ```npm run gh-pages```

3. Open http://coverwallet.github.io/cw-components/basic/


## To build bower compatible min js run:

1. ```npm run bower```

