# React TypeScript kickstart

This gitbook serves as a guide for kickstarting a new React project with preconfigured Redux, TypeScript, Sass and Storybook.

## Prerequisites

These tools are needed to start developing.

```bash
# nvm
brew install nvm

# node (latest lts version)
nvm install --lts
# set latest stable lts as default
nvm alias default stable
# be tripple shure you use the right node version
nvm use default

# yarn
brew install yarn --without-node
```

## Editor
We recommend to use [VSCode](https://code.visualstudio.com/) as editor. 
Install the following Extensions:
* `TSLint` -> linting support directly in editor ([marketplace](https://marketplace.visualstudio.com/items?itemName=eg2.tslint))
* `Type safe React & Redux Snippets in TypeScript` -> Snippets for boilerplate code as shown in Cookbook ([marketplace](https://marketplace.visualstudio.com/items?itemName=Sandstorm.vscode-awesome-ts-react-redux-snippets))

## Cookbook
In the cookbook you will find skeletons for important modules. These skeletons are also available for VSCode as snippets [here](https://marketplace.visualstudio.com/items?itemName=Sandstorm.vscode-awesome-ts-react-redux-snippets).

### *.tsx
* `component` - [Sandstorm] Type safe PureComponent.
* `container` - [Sandstorm] Type safe container component.
* `story` - [Sandstorm] Type safe story for Storybook.
* `test` - [Sandstorm] Type safe component test.

### *.ts
* `store` - [Sandstorm] Type safe Redux store.
