# Clean old build
rm -rf build/

# Transpile ES6
babel -d build/lib ./lib

# Generate bundle
mkdir -p dist
webpack --devtool source-map --config webpack.bower.js
eval "MINIFY=1 ./node_modules/.bin/webpack --devtool source-map --config webpack.bower.js"


