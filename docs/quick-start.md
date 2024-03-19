---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Quick Start

Backplane comprises of an API, CLI

## Instructions

### Install CLI

Download the Backplane CLI either from NPM or a pre-compiled binary for your OS.

<Tabs>
    <TabItem value="NPM" label="NPM" default>
  `npm i @backplane-software/cli`
  </TabItem>
<TabItem value="Binaries" label="Binaries">
<Tabs>
<TabItem value="Mac OS" label="Mac OS" default>
[backplane-cli-macos.zip](/cli/backplane-cli-macos.zip)
</TabItem>

      <TabItem value="Windows" label="Windows">
            [backplane-cli-win.exe.zip](/cli/backplane-cli-win.exe.zip)
      </TabItem>
      <TabItem value="Linux" label="Linux">
            [backplane-cli-linux.zip](/cli/backplane-cli-linux.zip)
      </TabItem>
    </Tabs>

  </TabItem>
  
</Tabs>

## Start Using Backplane

<Tabs>
  <TabItem value="host" label="Hosted" default>
</TabItem>
  <TabItem value="self-host" label="Self Hosted" >

### Step 1 - Install Node

Install Node.JS on your system and then from a terminal window, initialise an NPM project.

```
mkdir backplane-api
cd backplane-api
npm init -y
npm i express dotenv @backplane-software/backplane-api
```

### Step 2 - Setup Environment Variables

Create `.env` file, and provide the following:

```
NODE_ENV=development
PORT=8000
JWT_SECRET=<provide-key> // Make up your own secret, this is used as the salt to CryptB for password Hashing. e.g. MyS3cureP&!00word*
LOG_LEVEL=debug

MONGO_URI=<provide-key>

MAILSENDER_USERNAME=<your-username>
MAILSENDER_PASSWORD=<provide-key>

LOGTAIL_KEY=<provide-key>
```

### Step 3 - Create Index.js

Create `index.js` file and copy the below into it.

```
import express from "express";
import dotenv from "dotenv";
import backplane from "@backplane-software/backplane-api";

// Load Environment Configuration
dotenv.config();

// Create Express Instance
const app = express();

// Initialise Backplane Server with Instance
backplane(app);

// Start REST API Server
const port = process.env.PORT || 5001;
app.listen(port, () =>
  console.log(`Backplane REST API Server started on port ${port}`)
);
```

### Step 4 - Launch Server

You can launch the server by adding a script to your `package.json` e.g. `"server": "node index.js"`.

Then, `npm run server` to start the server on localhost port 5001. Use `curl http://localhost:5001` to confirm server is running.
</TabItem>

</Tabs>

## Register your first User and Organisation

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
