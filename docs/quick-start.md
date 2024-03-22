---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Quick Start

Backplane comprises of an API, CLI

## Start Using Backplane

### Install CLI

Download the Backplane CLI either from NPM or a pre-compiled binary for your OS.

<Tabs>
    <TabItem value="NPM" label="NPM" default>
  `npm i @backplane-software/backplane-cli`
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
You can use the hosted Backplane API server at `api.backplane.dev` for Demo purposes. Or, you can use the self-hosted approach. For the latter, you'll need to setup your MongoDB instance, Mailsender and Logtail account separately.

### Install API Server

<Tabs>
  
  <TabItem value="self-host" label="Self-Hosted" default>

#### Step 1 - Install Node

Install Node.JS on your system and then from a terminal window, initialise an NPM project.

```
mkdir backplane-api
cd backplane-api
npm init -y
npm i express dotenv @backplane-software/backplane-api
```

#### Step 2 - Setup Environment Variables

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

#### Step 3 - Create Index.js

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

#### Step 4 - Update Package.json

Add `"type": "module"` so the script can load ES modules.

Add `"server": "node index.js"` to the scripts section. Be sure to separate with a `,`.

#### Step 5 - Launch Server

`npm run server` to start the server on localhost port 5001.

Use `curl http://localhost:8000` to confirm server is running. If successful you should see: `Backplane REST API Server is ready`.
</TabItem>
<TabItem value="host" label="Hosted">
</TabItem>
</Tabs>

### Configure Organisation

#### Register your first User and Organisation

```js
bp user register -e myname@backplane.cloud -p **** -orgname 'My Organisation Name'
```

#### Login

```js
bp auth login -e myname@backplane.cloud -p ****
```

### Add Cloud Credentials

<Tabs>
    <TabItem value="Azure" label="Azure" default>
  ```js
bp org update --id <orgID>
--provider azure
--tenantid <tenant ID>
--clientid <client ID>
--clientsecret <Your Client Secret>
```

:::tip Creating a Service Principal in Azure

To create credentials you'll need to create an App registration in Entra ID.

1. Go to Microsoft Entra ID, and under Manage in the left side menu, select App registrations.

2. Click on New Registration and gives it a name and click Register.

3. Take note of the Tenant ID and Client ID.

4. Create a new Client Secret, click on Add a certificate or secret, New client secret, type a description, set expiry and click Add. Make a note of the Secret Value.

5. Assign the Service Principal you created with Contributor permission at the Subscription scope.
   :::
   </TabItem>
   <TabItem value="GCP" label="GCP">
   Coming Soon
   </TabItem>
   <TabItem value="AWS" label="AWS">
   Coming Soon
   </TabItem>
   </Tabs>

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
