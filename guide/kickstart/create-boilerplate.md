---
id: create-boilerplate
title: Create Boilerplate
---

This process got _so_ much easier with facebook's cli `create-react-app` and version 2 simplyfied things for us _even more_ regarding typescript support and different styling approaches. Thank you _so much_!

So let's start by executing `create-react-app` to create the boilerplate inside a new folder named `<app-name>`.
```bash
yarn create react-app <app-name> --typescript
# after completion enter the projects root directory
cd <app-name>
```
done.

## Optional
We recommend to add some files that help with configuring the environment and editor for you and your collaborators.

### NVM
We pin the NodeJS version for [nvm](https://github.com/creationix/nvm).
```bash
node -v > .nvmrc
```
Now you can be sure you use the correct NodeJS version by running 
```bash
nvm use
``` 
inside the project directory.

### EditorConfig
Save the following conent in a `.editorconfig` file in the root of the project.
Learn how to customize it on the [official Page](https://editorconfig.org/).
```properties
# EditorConfig helps developers define and maintain consistent
# coding styles between different editors and IDEs
# editorconfig.org

[*]
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
indent_style = space
indent_size = 2
```