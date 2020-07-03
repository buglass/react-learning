PROFILE = default
ENVIRONMENT = default
BRANCH = default
PREFIX = default

#Below two variables are for cloudfront purpose only.
S3Bucket = default
OAIUser = default
Route53HostedZone = default
ARecordName = default
AcmCertificate = default

.DEFAULT_GOAL := explain
.PHONY: explain
explain:
	#                                                                                                                                                        
		# PPPPPPPPPPPPPPPPP   IIIIIIIIIIPPPPPPPPPPPPPPPPP   EEEEEEEEEEEEEEEEEEEEEELLLLLLLLLLL             IIIIIIIIIINNNNNNNN        NNNNNNNNEEEEEEEEEEEEEEEEEEEEEE
		# P::::::::::::::::P  I::::::::IP::::::::::::::::P  E::::::::::::::::::::EL:::::::::L             I::::::::IN:::::::N       N::::::NE::::::::::::::::::::E
		# P::::::PPPPPP:::::P I::::::::IP::::::PPPPPP:::::P E::::::::::::::::::::EL:::::::::L             I::::::::IN::::::::N      N::::::NE::::::::::::::::::::E
		# PP:::::P     P:::::PII::::::IIPP:::::P     P:::::PEE::::::EEEEEEEEE::::ELL:::::::LL             II::::::IIN:::::::::N     N::::::NEE::::::EEEEEEEEE::::E
		#  P::::P     P:::::P  I::::I    P::::P     P:::::P  E:::::E       EEEEEE  L:::::L                 I::::I  N::::::::::N    N::::::N  E:::::E       EEEEEE
		#  P::::P     P:::::P  I::::I    P::::P     P:::::P  E:::::E               L:::::L                 I::::I  N:::::::::::N   N::::::N  E:::::E             
		#  P::::PPPPPP:::::P   I::::I    P::::PPPPPP:::::P   E::::::EEEEEEEEEE     L:::::L                 I::::I  N:::::::N::::N  N::::::N  E::::::EEEEEEEEEE   
		#  P:::::::::::::PP    I::::I    P:::::::::::::PP    E:::::::::::::::E     L:::::L                 I::::I  N::::::N N::::N N::::::N  E:::::::::::::::E   
		#  P::::PPPPPPPPP      I::::I    P::::PPPPPPPPP      E:::::::::::::::E     L:::::L                 I::::I  N::::::N  N::::N:::::::N  E:::::::::::::::E   
		#  P::::P              I::::I    P::::P              E::::::EEEEEEEEEE     L:::::L                 I::::I  N::::::N   N:::::::::::N  E::::::EEEEEEEEEE   
		#  P::::P              I::::I    P::::P              E:::::E               L:::::L                 I::::I  N::::::N    N::::::::::N  E:::::E             
		#  P::::P              I::::I    P::::P              E:::::E       EEEEEE  L:::::L         LLLLLL  I::::I  N::::::N     N:::::::::N  E:::::E       EEEEEE
		# PP::::::PP          II::::::IIPP::::::PP          EE::::::EEEEEEEE:::::ELL:::::::LLLLLLLLL:::::LII::::::IIN::::::N      N::::::::NEE::::::EEEEEEEE:::::E
		# P::::::::P          I::::::::IP::::::::P          E::::::::::::::::::::EL::::::::::::::::::::::LI::::::::IN::::::N       N:::::::NE::::::::::::::::::::E
		# P::::::::P          I::::::::IP::::::::P          E::::::::::::::::::::EL::::::::::::::::::::::LI::::::::IN::::::N        N::::::NE::::::::::::::::::::E
		# PPPPPPPPPP          IIIIIIIIIIPPPPPPPPPP          EEEEEEEEEEEEEEEEEEEEEELLLLLLLLLLLLLLLLLLLLLLLLIIIIIIIIIINNNNNNNN         NNNNNNNEEEEEEEEEEEEEEEEEEEEEE
	### Targets
	#
	@cat Makefile* | grep -E '^[a-zA-Z_-]+:.*?## .*$$' | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

###
# The main targets
###
	
.PHONY: store_pat_code
store_pat_code: ## Stores the PAT code for GITHUB in secure storage
	aws ssm put-parameter \
	--name "gittoken" \
	--description "Github PAT token for web-app-kit codepipeline" \
	--value $(PAT_CODE) \
	--type String \
	--overwrite \
	--profile  $(PROFILE)

.PHONY: create_pipeline
create_pipeline: ## Creates a new code pipeline cloudformation stack in AWS
	make create_update_pipeline STACK_NAME=$(PREFIX)-$(ENVIRONMENT)-webkit-codepipeline ACTION=create

.PHONY: update_pipeline 
update_pipeline: ## Updates an existing code pipeline cloudformation stack in AWS
	make create_update_pipeline STACK_NAME=$(PREFIX)-$(ENVIRONMENT)-webkit-codepipeline ACTION=update

.PHONY: create_update_pipeline
create_update_pipeline: ## Creates or updates the code pipeline cloudformation stack based on the action
	aws cloudformation $(ACTION)-stack \
	--stack-name $(STACK_NAME) \
	--template-body file://./code_pipeline_stack.yaml \
	--profile $(PROFILE) \
	--capabilities CAPABILITY_NAMED_IAM \
	--parameters \
		ParameterKey=Environment,ParameterValue=$(ENVIRONMENT) \
		ParameterKey=StackPrefix,ParameterValue=$(PREFIX) \
		ParameterKey=StackName,ParameterValue=$(STACK_NAME) \
		ParameterKey=GitHubOwner,ParameterValue=emisgroup \
  		ParameterKey=GitHubRepo,ParameterValue=web-app-kit \
  		ParameterKey=GitHubBranch,ParameterValue=$(BRANCH)	

.PHONY: install
install: ## Install all the dependencies we need
ifneq ($(CI),true)
	cp scripts/githooks/* .git/hooks
endif
	npm install

.PHONY: global-install
global-install: ## Check for outdated dependencies
	npm install -g babel eslint babel-eslint eslint-plugin-react eslint-plugin-json

.PHONY: clean-assets
clean-assets: ## Clean the build filesystem
	rm -fr build/*

.PHONY: build
build: clean-assets
	npm run build
