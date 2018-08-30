# React TypeScript kickstart

This gitbook serves as a guide for kickstarting a new React project with preconfigured Redux, TypeScript, Sass and Storybook.

It also includes a cookbook for common modules. They can be copy-pasted into your Editor of choice or turned into VSCode snippets.
The `${1:XXX}` Syntax is used by VSCode snippets to simultaniously edit specific parts of the snippet for fast and easy boilerplate creation.

## Prerequisites

These tools are needed to start developing.

```bash
# nvm
brew install nvm

# node (latest lts version)
nvm install --lts
# set latest stable lts as default
nvm alias default stable

# yarn
brew install yarn --without-node

# install gitbook
npm install -g gitbook-cli

# install boilerplate creator globally
npm install -g create-react-app react-scripts-ts
```

Furthermore I recommend to use [VSCode](https://code.visualstudio.com/) as editor. Be shure to install the `TSLint` extension.

> Note: Optional! You can install my personal extensions, settings, snippets etc with the `Settings Sync` extension. My public Gist ID is `89543bfc77af937a37916040a0dfad3c`.

## How to Read

```bash
git clone <repo>
cd repo

gitbook serve
```

## TODO
* Maybe move to Github and host there with gh-pages
