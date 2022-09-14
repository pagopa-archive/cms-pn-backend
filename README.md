# cms-backend
Code base to deploy PagoPa strapi.io headless cms

## Build and publish docker image on AWS ECR

```bash

export BUILD=3.0
export AWS_REGION=eu-central-1

cd src/strapi

sudo docker build -t pagopa/strapi:${BUILD} .
sudo docker tag pagopa/strapi:${BUILD} 794703684555.dkr.ecr.eu-central-1.amazonaws.com/cms-p-strapi:${BUILD}

aws ecr get-login-password --region $AWS_REGION | sudo docker login --username AWS --password-stdin 794703684555.dkr.ecr.eu-central-1.amazonaws.com/cms-p-strapi

sudo docker push  794703684555.dkr.ecr.eu-central-1.amazonaws.com/cms-p-strapi:${BUILD}

```

 

## Referencees

* [Confluence page](https://pagopa.atlassian.net/wiki/spaces/DEVOPS/pages/467894592/AWS+Setup+new+project) 