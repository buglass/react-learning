# Command Line Commands

## Run & Build

```shell
make serve
```

This runs the application in local environment

```shell
make serve-single-spa
```

This runs the application and distribute the single-spa application from this location `(http://localhost:8080/dist/app/main.js)`

```shell
make build
```

This will generate a static site in `./build/dist`

```shell
make build-single-spa
```

This will generate the single application library in `./build/dist/app`

## Unit Test

```shell
make test
```

This will generate a test report in `./build/reports/jest/`

```shell
make test-cov
```

This will generate a code coverage report in `./build/reports/coverage/`

## Code Quality

```shell
make vet
```

This will generate the linting reports in `./build/reports/lint/`

## Codepipeline

- For Codepipeline, please visit our [infrastructure](../../infrastructure/README.md) folder.

## Maintenance

- We will need to keep on top of the output from `make check-deps` and make sure we update and test where appropriate
