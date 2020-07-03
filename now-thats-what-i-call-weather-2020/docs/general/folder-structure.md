# Folder structure

## Top-level directory layout

    .
    ├── build                   # Compiled files
    ├── config                  # Configuration files for jest, webpack & stylelint
    ├── docs                    # Documentation files
    ├── infrastructure          # Compiled files
    ├── public                  # Html files
    ├── scripts                 # Scripts for githooks
    ├── src                     # Source files
    ├── test                    # Test configuration files
    ├── .babelrc                # Transpiler configuration
    ├── .env                    # Environment variables
    ├── .eslintignore           # Ignore linting
    ├── .eslintrc.json          # Linting configuration (Typescript files)
    ├── .gitignore              # Ignore git operation
    ├── .npmrc                  # Private registry details
    ├── .stylelintrc.json       # Style linting configuration (SCSS files)
    ├── jest.config.js          # Unit testing configuration
    ├── Makefile                
    ├── package.json            
    └── README.md
    └── sonar-project.properties

> Use short lower case names at least for the top-level folders

### Source files

The actual react components are usually stored inside the `src` folder.

    .src
    ├── components              # Component folders & files
    ├── layout                  # Layout files of the application
    ├── reducer                 # Combined reducer's file (Redux Reducer)
    ├── routes                  # Route definitions
    ├── store                   # Application store file (Redux Store)
    ├── utilities               # Utility files (Helper methods, for example, the actionhelper for redux)
    ├── App.tsx                 # Root level component of application
    ├── Index.tsx               # Entry file for application
    ├── RootApp.tsx             # Entry file for single-spa application
    ├── SetPublicPath.ts        # Helper file to set the webpack public path (Used inside the RootApp.tsx)

> **Samples**: [Home] `components/Home`, [Documents List] `components/DocumentsList`

### Configuration files

Configuration files for jest, webpack & stylelint

    .config
    ├── jest                    # Transformation files for jest
    ├── stylelint               # Reporter configuration
    ├── webpack                 # Bundle and Minify setup, there are seprate setup for both development & production
    ├── env.js                  # Get client environment variables

> **Note**: Environment variables used inside the application should start with the prefix `APP_`

### Infrastructure files

The aws infrastructure will be setup by using the cloud formation templates, which are defined here.

    .infrastructure
    ├── application             # Build definition for the application
    ├── cloudfront              # Template for creating the cloudfront resource and map it to Route53
    ├── pipeline                # Template for creating the codepipline resource, will build the application
    ├── pull_request_check      # Template for creating the codebuild resource, to run all checks against the pull request

### Build output files

    .build
    ├── dist                    # Output files while building the application
    ├   ├── app                 # Output files while building the single-spa application
    ├── reports                  
    ├   ├──coverage             # Unit testing coverage report files
    ├   ├──jest                 # Unit testing result files
    ├   ├──lint                 # Linting reports (Both Typescript & SCSS linting)
