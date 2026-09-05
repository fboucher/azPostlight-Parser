# Find the Dockerfile at the following URL:
# Node 20: https://github.com/Azure/azure-functions-docker/blob/dev/host/4/bullseye/amd64/node/node20/node20-core-tools.Dockerfile
# Node 22: https://github.com/Azure/azure-functions-docker/blob/dev/host/4/bullseye/amd64/node/node22/node22-core-tools.Dockerfile
ARG VARIANT=22
FROM mcr.microsoft.com/azure-functions/node:4-node22-core-tools

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment if you want to run your Function locally with 
# local.settings.json using `"AzureWebJobsStorage": "UseDevelopmentStorage=true"`
# RUN sudo -u node npm install -g azurite

# [Optional] Uncomment if you want to install more global node packages
# RUN sudo -u node npm install -g <your-package-list-here>
