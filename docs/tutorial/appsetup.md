# Create an App

An App represents the Cloud Workload, and an App has a one-to-one relationship with a cloud platform. For example, App A can be in Azure, App B in AWS and App C in GCP.

### Creating an App with the CLI

```js
bp app create --displayname 'My First App' --cloud azure --template sandbox

```

:::info App Templates
By default, Apps will provisioning 4 environments:

- prod
- nonprod
- test
- dev

If you use the switch `--template sandbox` you can have only a single environment provisioned.

The App Template resides at the Organisation level, and you can configure your own custom App templates to suit your scenarios.

## Service Integration

App templates can also have Services associated, for example, you can create a Service called Github and link that service to the default template, so that a Repo is created at the same time as the App is created. See [Create a Service](./create-service)
:::

:::info Environments

Apps are essentially a collection of Environments.

- In Azure, the Environments will be Resource Groups.
- in GCP, the Environments will be Projects.
- in AWS the Environments will be Accounts.

:::
