# Setup Sass

```bash
# add sass compiler
yarn add node-sass-chokidar

# open `package.json` in an editor add this line to "scripts"
# "build-css": "node-sass-chokidar ./src/index.scss ./src/index.css",
# "watch-css": "npm run build-css && node-sass-chokidar ./src/index.scss ./src/index.css --watch --recursive",
vim package.json
```
