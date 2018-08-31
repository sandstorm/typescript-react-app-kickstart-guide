# Create Boilerplate

```bash
# install initial `create-react-app` project with `react-scripts-ts` for TypeScript support
create-react-app <APP_NAME> --scripts-version=react-scripts-ts
cd <APP_NAME>

# pin node version
node -v > .nvmrc

# install additional dependencies (you can just copy this part and paste it into the console)
    # easy typed actions and creators
    yarn add @martin_hotell/rex-tils

    # redux
    yarn add react-redux redux redux-devtools-extension reselect

    # epics
    yarn add redux-observable rxjs

    # lint for immutability
    yarn add tslint-immutable

    # react test renderer for snapshot testing
    yarn add react-test-renderer @types/react-test-renderer

    # storybook
    yarn add @storybook/react @types/storybook__react @storybook/addon-info react-docgen-typescript-webpack-plugin
    # add typings as needed
    yarn add @types/storybook__addon-actions

    # sass
    yarn add node-sass-chokidar npm-run-all

    # only for the prototype app
    # remove this when you start developing with `yarn remove react-data-grid faker bootstrap`
    yarn add react-data-grid faker bootstrap

# note: install typings if necessary and available on `Definitely Typed`
# yarn add @types/<LIB_NAME>
yarn add @types/react-data-grid @types/react-redux @types/faker
```
Copy over boilerplate code
```bash
# save service worker stuff
mv -v src/registerServiceWorker.ts .

# remove `create-react-app`'s src directory
rm -rfv src

# insert path to this repo betwenn <> brackets!
cp -rv <path/to/this/repo>/code/* .
# don't forget files and directories starting with .
cp -rv <path/to/this/repo>/code/.* .

# ignore VSCode workspace settings
echo '\r# VSCode workspace settings\r.vscode/' >> .gitignore

# move service worker stuff back into src
mv -v registerServiceWorker.ts src/
```

```diff
# update the "scripts" in `package.json`
"scripts": {
-   "start": "react-scripts-ts start",
-   "build": "react-scripts-ts build",
    "test": "react-scripts-ts test --env=jsdom",
    "eject": "react-scripts-ts eject",
+   "lint": "tslint -t codeFrame -p ./tsconfig.json -c tslint.json"
+   "build-css": "node-sass-chokidar ./src/index.scss ./src/index.css",
+   "watch-css": "npm run build-css && node-sass-chokidar ./src/index.scss ./src/index.css --watch --recursive",
+   "start-js": "react-scripts-ts start",
+   "start": "npm-run-all -p watch-css start-js",
+   "build-js": "react-scripts-ts build",
+   "build": "npm-run-all build-css build-js",
+   "run-storybook": "start-storybook -p 9001 -c .storybook",
+   "storybook": "npm-run-all -p watch-css run-storybook"
},
```

Your `package.json` should look like this now:
> versions may differ!

```JSON
{
  "name": "<app-name>",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@martin_hotell/rex-tils": "^0.9.0",
    "@storybook/addon-info": "^3.4.10",
    "@storybook/react": "^3.4.10",
    "@types/faker": "^4.1.3",
    "@types/react-data-grid": "^2.0.13",
    "@types/react-redux": "^6.0.6",
    "@types/react-test-renderer": "^16.0.2",
    "@types/storybook__addon-actions": "^3.4.1",
    "@types/storybook__react": "^3.0.9",
    "bootstrap": "^4.1.3",
    "faker": "^4.1.0",
    "node-sass-chokidar": "^1.3.3",
    "npm-run-all": "^4.1.3",
    "react": "^16.4.2",
    "react-data-grid": "^4.0.8",
    "react-docgen-typescript-webpack-plugin": "^1.1.0",
    "react-dom": "^16.4.2",
    "react-redux": "^5.0.7",
    "react-scripts-ts": "2.17.0",
    "react-test-renderer": "^16.4.2",
    "redux": "^4.0.0",
    "redux-devtools-extension": "^2.13.5",
    "redux-observable": "^1.0.0",
    "reselect": "^3.0.1",
    "rxjs": "^6.2.2",
    "tslint-immutable": "^4.7.0"
  },
  "scripts": {
    "test": "react-scripts-ts test --env=jsdom",
    "eject": "react-scripts-ts eject",
    "lint": "tslint -t codeFrame -p ./tsconfig.json -c tslint.json",
    "build-css": "node-sass-chokidar ./src/index.scss ./src/index.css",
    "watch-css": "npm run build-css && node-sass-chokidar ./src/index.scss ./src/index.css --watch --recursive",
    "start-js": "react-scripts-ts start",
    "start": "npm-run-all -p watch-css start-js",
    "build-js": "react-scripts-ts build",
    "build": "npm-run-all build-css build-js",
    "run-storybook": "start-storybook -p 9001 -c .storybook",
    "storybook": "npm-run-all -p watch-css run-storybook"
  },
  "devDependencies": {
    "@types/jest": "^23.3.1",
    "@types/node": "^10.9.3",
    "@types/react": "^16.4.13",
    "@types/react-dom": "^16.0.7",
    "typescript": "^3.0.3"
  }
}


```

```bash
# try lint command
yarn lint
# if it shows errors in the service worker related file(s), fix or disable it for them
# `// tslint:disable` at the top of the file

# test if everything works
yarn start
```

Congratulations!

You now have a working React App with TypeScript and Redux.

Happy coding!
