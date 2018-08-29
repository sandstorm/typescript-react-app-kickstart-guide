# Create Boilerplate

```bash
# install initial `create-react-app` project with `react-scripts-ts` for TypeScript support
create-react-app <APP_NAME> --scripts-version=react-scripts-ts
cd <APP_NAME>

# pin node version
node -v > .nvmrc

# install additional dependencies
    # easy typed actions and creators
    yarn add @martin_hotell/rex-tils

    # redux
    yarn add react-redux redux redux-devtools-extension reselect

    # epics
    yarn add redux-observable rxjs

    # lint for immutability
    yarn add tslint-immutable

    # only for the prototype app
    # remove this when you start developing
    yarn add react-data-grid faker bootstrap

# note: install typings if necessary and available on `Definitely Typed`
# yarn add @types/<LIB_NAME>
yarn add @types/react-data-grid @types/react-redux @types/faker

# copy over config files
cp -v <path/to/this/dir>/{.editorconfig,tsconfig.json,tslint.json} .
```

```diff
# add lint script to package.json
# open `package.json` in an editor add this line to "scripts"
+ "lint": "./node_modules/.bin/tslint -t codeFrame -p ./tsconfig.json -c tslint.json"
```

```bash
# try lint command
yarn lint
# if it shows errors in the service worker related file(s), fix or disable it for them
# `// tslint:disable` at the top of the file

# replace src directory
    # first save service worker related code (only `registerServiceWorker.ts` at the time of writing)
    # double check
    # ignore you don't need service workers
    cp -v src/registerServiceWorker.ts .
    # remove src directory
    rm -rfv src
    # copy over our src directory
    cp -rv <path/to/this/dir>/src .
    # put service worker related code back where it belongs
    mv -v registerServiceWorker.ts src/

# test if everything works
yarn start
```

## Start Developing

Congratulations!

You now have a working React App with TypeScript and Redux.

Happy coding!
