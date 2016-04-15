rm -rf dist

mkdir dist

mkdir dist/unpack
babel --presets=es2015,stage-0 unpack/**/*.js unpack/*.js --out-dir dist/
babel --presets=es2015,stage-0  *.js --out-dir dist/
cp package.json dist/

if [ "$1" == "--install" ]
then
    cd dist
    npm install --production
    cd ..
fi
