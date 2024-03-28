---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Quick Start

This Quick Start will guide you through downloading the Backplane CLI and logging into the Backplane API Server.

:::note Private Preview team
If you're a member of the Private Preview team, please follow the self-hosted instructions.
:::

### Install CLI

Download the Backplane CLI either from NPM or a pre-compiled binary for your OS.

<Tabs>
    
<TabItem value="Binaries" label="Binaries" default>
<Tabs>
<TabItem value="Mac OS" label="Mac OS" default>
[backplane-cli-macos.zip](/cli/backplane-cli-macos.zip)
</TabItem>

      <TabItem value="Windows" label="Windows">
            [bp.zip](/cli/bp.exe.zip)
      </TabItem>
      <TabItem value="Linux" label="Linux">
            [backplane-cli-linux.zip](/cli/backplane-cli-linux.zip)
      </TabItem>
    </Tabs>

  </TabItem>
  <TabItem value="NPM" label="NPM">
  ```
  npm i @backplane-software/backplane-cli -g
  ```
  </TabItem>
</Tabs>
:::info demo server
You can use the hosted Backplane API server at `https://api.backplane.dev/api` for Demo purposes.
:::
Use the below command to verify installation has been successful:
```js
$ bp -V

v0.3.0

```
### Install API Server

<Tabs>
  <TabItem value="host" label="Demo Server">
To set the CLI to use the demo server, use the following command:

```

bp auth setserver --server https://api.backplane.dev/api

```

</TabItem>
  <TabItem value="self-host" label="Self-Hosted">

#### Step 1 - Install Node

Install [Node.JS](https://nodejs.org/en/download) on your system and then from a terminal window, initialise an NPM project.

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

JWT_SECRET=<provide-key> // Make up your own secret, this is used as the salt to CryptB for password Hashing. e.g. MyS3cureP&!00word\*

MONGO_URI=<provide-key>

MAILSENDER_USERNAME=<your-username>
MAILSENDER_PASSWORD=<provide-key>

LOGTAIL_KEY=<provide-key>
LOG_LEVEL=debug

```

:::tip Setting up MongoDB
Backplane API Server uses MongoDB as the backend datastore. See [Setting up MongoDB](/docs/tutorial/setupmongo).
:::

:::tip Setting up MailerSend
MailerSend is used as an SMTP mailrelay, so that User Registration e-mails can be sent as well as approval request e-mails. Create an account here: [MailerSend](https://www.mailersend.com/)
:::

:::tip Setting up LogTail

`/utils/logger.js` is used as Middleware for logging purposes. It leverages LogTail, now known as Better Stack is used as a Log Repository. It's free up to 1GB a month with 3-day retention. Create an account here: [LogTail](https://betterstack.com/logs).

:::

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

````

#### Step 4 - Update Package.json

- Add `"type": "module"` so the script can load ES modules.

- Add `"server": "node index.js"` to the scripts section. Be sure to separate with a `,`.

#### Step 5 - Launch Server

`npm run server` to start the server on localhost port 8000.

Use `curl http://localhost:8000` to confirm server is running. If successful you should see: `Backplane REST API Server is ready`.
</TabItem>

</Tabs>

### Register Organisation

```js
bp user register --displayname "<Display Name>" --email "<your e-mail address>" --password "<Password>" --orgname "<Your Organisation Name>"
````

#### Login

```js
bp auth login -e "<your e-mail address>" -p "<Password>"
```

### Adding Cloud Credentials

Now that your Organisation and User account has been setup, you're now ready toregister your cloud platforms.

<Tabs>
    <TabItem value="Azure" label="Azure" default>

    :::tip Creating a Service Principal in Azure

To create credentials you'll need to create an App registration in Entra ID.

1. Go to Microsoft Entra ID, and under Manage in the left side menu, select App registrations.

2. Click on New Registration and gives it a name and click Register.

3. Take note of the Tenant ID and Client ID.

4. Create a new Client Secret, click on Add a certificate or secret, New client secret, type a description, set expiry and click Add. Make a note of the Secret Value.

5. Assign the Service Principal you created with Contributor permission at the Subscription scope.
   :::

#### Add Azure Credentials

```js
bp cloud azure add --id "<orgID>"
--tenantid "<tenant ID>"
--clientid "<client ID>"
--clientsecret "<Your Client Secret>"
--subscriptionid "<default subscription GUID>"
```

:::note
The Subscription ID is required in the MVP since App environments are provisioned as Resource Groups as opposed to Subscriptions. Subscription environments will be in a future release.
:::

   </TabItem>

   <TabItem value="GCP" label="GCP">
   :::tip Creating a Service Principal in GCP

1.  Login to console.cloud.google.com
2.  Go to IAM and admin > Service accounts
3.  Select a Project and click on Create Service Account
4.  Enter a service account name e.g. `backplane-demo` and a description e.g. `For Backplane API environment provisioning`
5.  Click Create and Continue
6.  Click on Done.
7.  Click on IAM and switch to the Organisation level.
8.  Click on Grant Access
9.  Enter the service principal name e.g. `backplane-demo@backplane-core.iam.gserfviceaccount.com`
10. In role, find `Project Creator`, click Save.
11. Go back to your Project and click on IAM and Admin and then Service Accounts
12. Click on your Service Account and select Keys, Add Key, Create New Key. Use JSON as the Key Type. Click on Create. This will download a .json file.
13. Finally, go to APIs and Services and ensure Cloud Resource Manager API is enabled.

The downloaded JSON is now ready to be used in your Org.
:::

#### Add GCP Credentials

```js
bp cloud gcp add --id "<OrgID>" --tenantid "<Enter Google Org ID>" --gcpsecret "<path-to-JSON-file>"
```

</TabItem>
<TabItem value="AWS" label="AWS">

:::tip Creating a Service Principal in AWS

1. Login to AWS Management Console
2. Go to IAM
3. Click on Users
4. Click on Create User
5. Enter User Details e.g. backplane-aws, click next
6. Permission Options, select attach policies directly
7. Click on Create Policy and in Policy Editor select JSON. Paste in the below JSON

```js
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "organizations:CreateAccount",
                "organizations:DescribeOrganization"
            ],
            "Resource": "*"
        }
    ]
}
```

8. Click Next, give Policy Name Backplane-account-creator
9. Click Create Policy
10. Click Create User
11. Click on the new User Created, and click on Security Credentials
12. Click on Create Access Key
13. Select Third-party service use-case and tick the confirmation and click Next
14. Create access key, record Access key and Secret access key values. Click Done.

:::

#### Add AWS Credentials

```js
bp cloud aws add --id "<OrgId>" --clientid "<accessKey>" --clientsecret "<accessKeySecret>"
```

  </TabItem>
</Tabs>

### Create Platform

An Organisation will have a number of Platforms that provide a business capability, and within those platforms will exist Products. The Platform acts as a container for Products, but also a governance boundary for Cost, Access and Policies. Let's create our first platform:

```js
bp platform add --displayname 'Platform A'
```

As the creator of the Platform, you will be assigned as the Owner.

### Create Product

A Product can contain one or many Apps, and an App can belong to a single Cloud Platform. For example, Product A can contain App X (Azure), App Y (AWS) and App Z (GCP). The Apps represent the Cloud Workload and set of environments.

```js
bp product add --displayname 'Product X' --platformid '<Platform ID>'
```

### Create App

```js
bp app add --displayname "My first App" --cloud "azure | gcp | aws"
```

:::info
App templates define what environments are created and optionally onboarding of a service, for example a Github repository. The _default_ template will create prod, nonprod, test and dev. Custom App Templates can be added such as Sandbox whereby only a single environment is provisioned.
:::

<!-- :::tip
To link an App to a Product, you will need to create a Link Request. e.g.

```js
bp request add --appid app1 --requestType link --requestedForType product
```

::: -->

:::note Powershell Users
For **Powershell** users, run `pwsh` and then use the CLI commands with the `--stringify` or `-s` switch to return raw JSON, this can then be piped into Powershell with `ConvertFromJSON`.

For example:

```ps
bp product list --stringify | Convert-FromJSON
```

:::

This completes the Quick Start.
