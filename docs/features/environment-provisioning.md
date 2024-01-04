---
sidebar_position: 1
---

# Environment Provisioning

## Intro

Backplane takes an abstracted view of creating cloud 'space'. Whether it's a Resource Group in Azure, or a Folder in GCP or an account in AWS, Backplane API will take care of provisioning the necessary containers.

## Create an App

Environments belong to an App, so to create an App in Azure for example:

```js Create App in Azure

bp app add --displayname 'My App' --cloud azure --template default
```

:::tip App Templates
App Templates specify which environments to create. By default, a `Prod`, `Dev` and `Test` environment are created. Use `sandbox` for just a Sandbox environment.

You can create your own App Templates to define the environments created for App Provisioning. In addition, you can also hook-up Services like Github, so a Repo can be provisioned for the App.

:::

:::note Roadmap Item
Azure and GCP works today. AWS not yet implemented.
:::

:::note Roadmap Item

- Need to implement the creation of App-specific Service Principal.

- Need to implement the implementation of RBAC access for App Service Principal to the environments.

:::
