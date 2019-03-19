---
id: tslint
title: TSLint
---

We use `tslint-immutable` to catch unwanted mutations. 
`yarn add tslint tslint-immutable`

Add the following line to the npm `"scripts"` in the package.json:
```ts
"lint": "tslint -t codeFrame -p tsconfig.json -c tslint.json"
```

## Opinionated Configuration

Add a `tslint.json` in your project's root directory.
```ts
{
  "extends": ["tslint:recommended", "tslint-react", "tslint-immutable"],
  "linterOptions": {
    "exclude": [
      "config/**/*.js",
      "node_modules/**/*.ts",
      "coverage/lcov-report/*.js"
    ]
  },
  "rules": {
    "arrow-parens": true,
    "interface-name": false,
    "member-ordering": false,
    "no-console": false,
    "no-debugger": false,
    "no-delete": true,
    "no-let": true,
    "no-object-mutation": true,
    "no-parameter-reassignment": true,
    "no-var-keyword": true,
    "object-literal-sort-keys": false,
    "ordered-imports": false,
    "quotemark": [true, "single", "avoid-escape", "avoid-template", "jsx-double"],
    "readonly-array": true,
    "readonly-keyword": false,
    "semicolon": true,
    "typedef": [true, "call-signature"],
    "variable-name": true,
    "whitespace": true
  }
}
```
  