---
sidebar_position: 2
---

# Quick Start

Backplane comprises of an API, CLI

## Instructions

### Download CLI

To begin, download the [Backplane CLI](/download)

### Create your first User and Organisation

```js
bp user register -e myname@backplane.cloud -p **** -orgname 'My Organisation Name'
```

### Login

```js
bp auth login -e myname@backplane.cloud -p ****
```

### Add Cloud Credentials

```js
bp org update -
```

### Create your first Platform

```js
bp platform add --displayname 'Platform A'
```

### Create your first Product

```js
bp product add --displayname 'Product X'
```

### Create your first App

```js
bp app add --displayname 'App 1' --cloud azure --template default
```

:::tip
To link an App to a Product, you will need to create a Link Request. e.g.

```js
bp request add --appid app1 --requestType link --requestedForType product
```

:::

:::note Powershell Users
For **Powershell** users, run `pwsh` and then use the CLI commands with the `--stringify` or `-s` switch to return raw JSON, this can then be piped into Powershell with `Convert-FromJSON`.

For example:

```ps
bp product list --stringify | Convert-FromJSON
```

:::
