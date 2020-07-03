.DEFAULT_GOAL := explain
.PHONY: explain
explain:
	### Welcome
	#
	# The official EMIS Group React-Typescript boilerplate
	
	### Installation
	#
	# $$ make install
	#
	### Targets
	#
	@cat Makefile* | grep -E '^[a-zA-Z_-]+:.*?## .*$$' | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

###
# The main targets
###

.PHONY: clean
clean: ## Clean the local filesystem for all the automated items
	rm -fr node_modules
	rm -fr build/

.PHONY: install
install: ## Install all the dependencies we need
	npm install

.PHONY: check-deps
check-deps: ## Check if we have any outdated dependencies
	npm outdated

.PHONY: vet
vet :## Lint the TypeScript & SCSS files
	@echo "- Linting TypeScript & SCSS files..."
	npm run vet

.PHONY: test
test: ## Test the application
	npm run test

.PHONY: test-cov
test-cov: ## Test the application and produce the coverage
	npm run test-cov

.PHONY: serve
serve: test ## Serve the application
	npm run serve

.PHONY: build
build: test ## Build the application in development environment
	npm run build

.PHONY: build-single-spa
build-single-spa: ## ## Build the single-spa application in production environment
	npm run build-single-spa

.PHONY: build-prod
build-prod: ## Build the application in production environment
	npm run build-prod

.PHONY: serve-single-spa
serve-single-spa: test ## Build the single-spa application into public folder and serve the application
	npm run serve-single-spa
