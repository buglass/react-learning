PROFILE=default
ENVIRONMENT=default # eg sbx
SOURCE=default # eg 'https://github.com/emisgroup/web-app-kit.git'
REPOSITORYNAME=default # eg web-app-kit

.PHONY: explain
explain:                                                                                                                                                                                                                                                      
		## Targets
		@cat Makefile* | grep -E '^[a-zA-Z_-]+:.*?## .*$$' | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: create_pull_request_checks
create_pull_request_checks: ## Creates the pull request checks cloudformation stack in AWS for React
		make create_update_pull_request_checks STACK_NAME=$(ENVIRONMENT)-$(REPOSITORYNAME) ACTION=create

.PHONY: update_pull_request_checks
update_pull_request_checks: ## Creates the pull request checks cloudformation stack in AWS for React
		make create_update_pull_request_checks STACK_NAME=$(ENVIRONMENT)-$(REPOSITORYNAME) ACTION=update

.PHONY: create_update_pull_request_checks
create_update_pull_request_checks: ## Creates the pull request checks cloudformation stack in AWS
	aws cloudformation ${ACTION}-stack \
		--stack-name $(STACK_NAME)-PullRequestChecks \
		--template-body file://./pull_request_checks_stack.yaml \
		--profile $(PROFILE) \
		--capabilities CAPABILITY_NAMED_IAM \
		--parameters \
			ParameterKey=Environment,ParameterValue=$(ENVIRONMENT) \
			ParameterKey=SourceCodeLocation,ParameterValue=$(SOURCE) \
			ParameterKey=RepositoryName,ParameterValue=$(REPOSITORYNAME)

.PHONY: vet_stacks
vet_stacks: ## Perform cloudformation validate on all stacks
	@echo "- Validating cloudformation templates ..."
	$(foreach file, $(shell find .. -name "*stack.yaml" -type f), aws cloudformation validate-template --template-body file://$(file) || exit;)
	@echo "✔ Done"
