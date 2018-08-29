# Setup Sass

```bash
# add dependencies
yarn add node-sass-chokidar npm-run-all
```

```diff
# open `package.json` in an editor edit "scripts"
+ "build-css": "node-sass-chokidar ./src/index.scss ./src/index.css",
+ "watch-css": "npm run build-css && node-sass-chokidar ./src/index.scss ./src/index.css --watch --recursive",
- "start": "react-scripts start",
- "build": "react-scripts build",
+ "start-js": "react-scripts start",
+ "start": "npm-run-all -p watch-css start-js",
+ "build-js": "react-scripts build",
+ "build": "npm-run-all build-css build-js",
- "storybook": "start-storybook -p 9001 -c .storybook",
+ "start-storybook": "start-storybook -p 9001 -c .storybook",
+ "storybook": "npm run all -p watch-css start-storybook",
```
