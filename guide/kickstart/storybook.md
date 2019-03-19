---
id: storybook
title: Storybook
---

[Storybook](https://storybook.js.org/) is a development environment for UI components. It allows you to browse a component library, view the different states of each component, and interactively develop and test components.

## Installation
This too got a lot simpler with the automated command line tool from Storybook. Just run
```bash
npx -p @storybook/cli sb init
```

## Configuration
Like tests, we put our Storybook stories beside our component's source files. See [here](../cookbook/components).

Get rid of the example stories:
```bash
rm -rf src/stories
```

Then replace the content of `.storybook/config.js` with the following:
```ts
import { configure } from '@storybook/react';

import '../src/Style/index.css';

const req = require.context('./../src', true, /story\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
```

## Usage
start Storybook with
```bash
yarn storybook
```