---
sidebar_position: 1
---

# Data Model

Understand the Data Model behind Backplane.

## Data Model explained

Understanding the Backplane data model is key to leveraging Backplane.

Below is the entity relationship, where -> denotes 'has many':

`Orgs -> Platforms -> Products -> Apps`

### Organisations

- Organisations represent the highest level in the data model hierarchy. Organisations provide the context and logical container for Platforms, Products and Apps.

- Cloud Credentials are specified at the Organisation level.

- All Users belong to a single Organisation.

- This is where an Organisation Budget is set.

### Platforms

- Platforms contain many Products.

- Platforms provide a governance boundary for Cost, Access and Policy data.

- Platforms will request and receive a budget allocation from the Organisation by raising a **Budget Request**.

:::tip
To add a new platform, first [Login](/login) e.g. `bp auth login -e user@backplane.cloud -p *****`

```js
bp platform add --displayname 'My new Platform'
```

:::

### Products

- Products contain many Apps.

:::tip
To add a new Product

```js
bp product add --displayname 'My new Product'
```

:::

### Apps

- Apps are synonymous with environments, they represent the Cloud workload.

- For example: A product may contain an App based in GCP and an App based in Azure. Collectively, these Apps underpin the Product. This allows for multi cloud Products.

- Apps can have many environments.

:::tip
To add an App to an existing Product

```js
bp app add --displayname 'My new App' --cloud azure --template default
```

:::

:::info
Multi Organisation and Specifying Platform and Product-level Cloud Credentials is on the [Roadmap](/roadmap)
:::
