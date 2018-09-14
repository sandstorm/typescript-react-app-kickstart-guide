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
* `TSLint` -> linting support directly in editor
* `Project Snippets` -> enables you to use the code snippets located in `.vscode/snippets`.

To use a snippet just type `store` and select the `[Sandstorm] Create a new Redux store.` snippet.

## Cookbook
In the cookbook you will find skeletons for important modules. These skeletons are also available for VSCode as snippets users when the `Project Snippets` extension is installed (see above).

### *.tsx
* `component` - [Sandstorm] Type safe PureComponent.
* `container` - [Sandstorm] Type safe container component.
* `story` - [Sandstorm] Type safe story for Storybook.
* `test` - [Sandstorm] Type safe component test.

### *.ts
* `store` - [Sandstorm] Type safe Redux store.
* `epic` - [Sandstorm] Type safe Redux Epic.

## How to Read

```bash
# install gitbook
npm install -g gitbook-cli

git clone <repo>
cd repo

gitbook serve
```