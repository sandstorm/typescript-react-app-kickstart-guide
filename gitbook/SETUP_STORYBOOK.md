# Storybook

## Setup Storybook

```bash
# add dependencies
yarn add @storybook/react @types/storybook__react @storybook/addon-info react-docgen-typescript-webpack-plugin

# add typings as needed
yarn add @types/storybook__addon-actions

# copy over the storybook config directory
cp -rv <path/to/this/dir>/.storybook .
```

```diff
# open `package.json` editor add this line to "scripts"
+ "storybook": "start-storybook -p 9001 -c .storybook"
```

```bash
# start storybook
yarn storybook
```

Now you can add [Stories](CREATE_STORIES.md) to your [presentational components](COMPONENTS.md).
