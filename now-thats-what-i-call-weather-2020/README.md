# EMIS React-Typescript Boilerplate

Just install and run your next react-typescript project in seconds

## Prerequisites

- [Node](https://nodejs.org/en/) (version 10.10.0 or above)
- [npm](https://www.npmjs.com)
- [make](http://gnuwin32.sourceforge.net/packages/make.htm) if you are working on Windows

**Authenticate to GitHub package registry with @emisgroup scope.**

You need to create a token with read/write privileges and login to GitHub through the Command prompt with the token. If you have previously installed a package from the @emisgroup registry such as the UI-kit, then this step is complete. Refer to the ["Configure registry"](https://ui-kit.emisgroup.uk/get-started) section to authenticate.

## Installation

You can install the package globally, and then deploy via the command line.

```shell
npm i -g @emisgroup/web-app-kit
emis-react-boilerplate {project-name} --typescript
cd {project-name}
make install
make serve
```

This will clone the repo, install all the dependencies, run the tests, and then run the webpack dev server so you can actually see the application. All output that would be distributed is in the `build` folder.

## Documentation

- [Commands](docs/general/commands.md)
- [Single SPA](docs/development/single-spa.md)
- [Guidelines to component's file structure](docs/development/component-file-structure.md)

Please [click](docs/README.md) here to know more about this repo.
