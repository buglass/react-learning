# Pipeline , Cloudfront & Recordset in Route53

This section contains all of the resources required to deploy the pipelines to build the web-app-kit solution.

## Pre-Requisites for pipeline

### PAT TOKEN

A Git PAT token should be generated for the repository, that gives repo access only. Run the following command in a bash terminal with the PAT key of for example `12345` :

```bash
make store_pat_code PAT_CODE=12345
```

## Deploy Pipeline

In order to deploy the code pipeline, run the following in a bash terminal :

```bash
make create_pipeline
```

## Update Pipeline

In order to update the code pipeline run the following command in a bash terminal :

```bash
make update_pipeline
```

## Pipeline Parameters

The following parameters need to be added to either of the code pipeline make commands

* PROFILE
* ENVIRONMENT
* BRANCH

An example of a command using all of these parameters could be:

```bash
make create_pipeline PROFILE=default ENVIRONMENT=sbx BRANCH=master
make update_pipeline PROFILE=default ENVIRONMENT=sbx BRANCH=master
```

## Pre-Requisites for Cloudfront & Recordset in Route53

### Registered Domain

A hosted zone should be created for the registered domain in the aws account, that gives hosted zone only. For registered domain please contact your architect

## Create Cloudfront & Recordset stack

The following parameters need to be added to either of the code pipeline make commands

* PROFILE
* ENVIRONMENT
* PREFIX
* S3Bucket
* OAIUser

In order to create the Recordset in hosted zone and link it to the appropriate Cloudfront, run the following in a bash terminal :

```bash
make Cloudfront PROFILE=default ENVIRONMENT=sbx PREFIX=master S3Bucket=s3bucket OAIUser=oaisuser
```
