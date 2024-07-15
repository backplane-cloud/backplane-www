---
draft: false
title: "Quick Start"
snippet: "Getting started guide to using Backplane"
image: { src: "/assets/quickstart.svg", alt: "Quick start" }
publishDate: "2024-07-15 02:39"
category: "tutorial"
author: "Lewis Sheridan"
tags: []
---

Welcome to the Backplane Quick Start guide to get you up and running with Backplane API and CLI.

## Project Status

The Backplane API is currently an MVP in BETA. The below table shows the Cloud Integration progress across the concerns of Account Provisioning, Access, Policy and Cost data retrieval.

|                                                              |                           Account                           |                           Access                            |                           Policy                            | Cost |
| :----------------------------------------------------------: | :---------------------------------------------------------: | :---------------------------------------------------------: | :---------------------------------------------------------: | :--: |
| <img src="/assets/azure.svg" class="w-10 m-0 p-0 mx-auto" /> | <img src="/assets/check.svg" class="w-8 m-0 p-0 mx-auto" /> | <img src="/assets/check.svg" class="w-8 m-0 p-0 mx-auto" /> | <img src="/assets/check.svg" class="w-8 m-0 p-0 mx-auto" /> |  -   |
|  <img src="/assets/gcp.svg" class="w-10 m-0 p-0 mx-auto" />  | <img src="/assets/check.svg" class="w-8 m-0 p-0 mx-auto" /> | <img src="/assets/check.svg" class="w-8 m-0 p-0 mx-auto" /> | <img src="/assets/check.svg" class="w-8 m-0 p-0 mx-auto" /> |  -   |
|  <img src="/assets/aws.svg" class="w-10 m-0 p-0 mx-auto" />  | <img src="/assets/check.svg" class="w-8 m-0 p-0 mx-auto" /> | <img src="/assets/check.svg" class="w-8 m-0 p-0 mx-auto" /> | <img src="/assets/check.svg" class="w-8 m-0 p-0 mx-auto" /> |  -   |
|  <img src="/assets/oci.svg" class="w-10 m-0 p-0 mx-auto" />  | <img src="/assets/check.svg" class="w-8 m-0 p-0 mx-auto" /> |                              -                              |                              -                              |  -   |

#### Want to get involved ?

If you want to get involved and contribute to the Project, please visit [Backplane API Github Repo](https://github.com/backplane-cloud/backplane-api)

## CLI Download & Installation

Download the Backplane CLI either from NPM or a pre-compiled binary for your OS.

### Binaries

The easiest way to get started is to download the Backplane CLI executable, available as a ZIP archive containing **bp** executable and **bp.sha256**
| OS | Download Link |
| :---------------------------------------------------------------------------: | :------------------------- |
| <img class="inline-block w-5 m-0 mr-3" src="/assets/appleicon.svg" /> Mac OSX | [ARM64](/cli/mac/bp.zip) |
| <img class="inline-block w-6 m-0 mr-3" src="/assets/windows.svg" /> Windows | [x64](/cli/windows/bp.zip) |
| <img class="inline-block w-6 m-0 mr-3" src="/assets/tux.svg" /> Linux | [x64](/cli/linux/bp.zip) |

#### Validating download integrity with SHASUM (Mac OSX & Linux)

```js
shasum -a 256 -c bp.sha256
bp: OK
```

#### Installation Instructions

<details>
    <summary class="text-blue-700">Mac OS</summary>

- **Download** [bp.zip](/cli/mac/bp.zip)
<div class="rounded-lg bg-slate-100 p-3 ml-10 text-sm">
  <img src='/assets/warning.svg' class="inline-block m-0 w-8"/>
 If the Web Browser alerts that the bp.zip file is suspicious, allow the file
</div>

- Extract **bp.zip** by double-clicking on the file

<div class="rounded-lg bg-slate-100 p-3 ml-10 text-sm">
  <img src='/assets/warning.svg' class="inline-block m-0 w-8"/> Before you can run 'bp' for the first time, 'Right-click' on the extracted 'bp' file and select Open from the context menu and Accept any security warning that appears. A terminal window will open and execute the file. Close the terminal window. 
</div>

- Open **Terminal** and from the directory **bp** has been extracted to, run the following command to move the file to your executable path:

  ```bash
  sudo mv bp /usr/local/bin/
  ```

- To verify that **bp** is successfully installed, run:
  ```bash
  bp --version
  1.0.0
  ```

</details>

<details>
    <summary class="text-blue-700">Windows</summary>
    
- **Download** [bp.zip](/cli/windows/bp.zip)
- **Extract** contents to folder
    ```ps
    expand-archive bp.zip c:\backplane
    ```

- Add **bp.exe** file system environment path

  ```ps
  $newPath = "C:\backplane"
  $currentPath = [System.Environment]::GetEnvironmentVariable("Path", "Machine")
  [System.Environment]::SetEnvironmentVariable("Path", "$currentPath;$newPath", "Machine")
  ```

- **Verify** installation - To check if **bp.exe** is successfully installed, run:

  ```ps
  bp --version
  1.0.0
  ```

</details>

<details>
    <summary class="text-blue-700">Linux</summary>

- **Download** [bp.zip](/cli/linux/bp.zip)
- **Extract** executable from ZIP file.

  ```bash
  sudo apt install unzip
  unzip bp.zip
  ```

- Move the file to your executable path

  ```bash
  sudo mv ./bp /usr/local/bin/bp
  ```

- **Verify** installation to check that **bp** is successfully installed, run:

  ```bash
  bp --version
  1.0.0
  ```

  </details>

### NPM

- Install [Node.JS](https://nodejs.org/en/download) on your system and then from a terminal window, initialise an NPM project.

  ```bash
  mkdir backplane-cli
  cd backplane-api
  npm init -y
  npm i @backplane-software/backplane-cli -g
  ```

- Once the CLI has been installed, within the directory containing the `package.json`, run the `npm link` command to make the file executable.

  ```bash
  npm link
  ```

  Use the below command to verify installation has been successful:

  ```bash
  $ bp -V
  v0.11.0
  ```

## API Server Setup

The fastest way to get started with Backplane API is to use the Demo API Server. This is a hosted instance of the API which you can use the CLI client to interact with.

### Demo API Server

- A demo server is hosted at `https://api.backplane.dev/api`

- To configure the CLI client to target the demo server, simply run the following CLI command:

  ```bash
  bp auth setserver --server https://api.backplane.dev/api
  ```

- Now you are ready to [Start Using Backplane](#start-using-backplane)

### Self-Hosted API Server

<details>
<summary class="text-blue-700">Self-Hosted</summary>

#### Step 1 - Install Node

Install [Node.JS](https://nodejs.org/en/download) on your system and then from a terminal window, initialise an NPM project.

```js
mkdir backplane-api
cd backplane-api
npm init -y
npm i express dotenv @backplane-software/backplane-api
```

#### Step 2 - Setup Environment Variables

Create `.env` file, and provide the following:

```js
NODE_ENV=development
PORT=8000

JWT_SECRET=<provide-key> // Make up your own secret, this is used as the salt to CryptB for password Hashing. e.g. MyS3cureP&!00word\*

MONGO_URI=<provide-key>

MAILSENDER_USERNAME=<your-username>
MAILSENDER_PASSWORD=<provide-key>

LOGTAIL_KEY=<provide-key>
LOG_LEVEL=debug
```

#### Step 3 - Setting up MongoDB

Backplane API Server uses MongoDB as the backend datastore. See [Setting up MongoDB](/blog/mongosetup).

#### Step 4 - Setting up MailerSend

MailerSend is used as an SMTP mailrelay, so that User Registration e-mails can be sent as well as approval request e-mails. Create an account here: [MailerSend](https://www.mailersend.com/)

#### Step 5 - Setting up LogTail

`/utils/logger.js` is used as Middleware for logging purposes. It leverages LogTail, now known as Better Stack is used as a Log Repository. It's free up to 1GB a month with 3-day retention. Create an account here: [LogTail](https://betterstack.com/logs).

#### Step 6 - Create Index.js

Create `index.js` file and copy the below into it.

```js
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

#### Step 7 - Update Package.json

- Add `"type": "module"` so the script can load ES modules.
- Add `"server": "node index.js"` to the scripts section. Be sure to separate with a `,`.

#### Step 8 - Launch API Server

`npm run server` to start the server on localhost port 8000.

Use `curl http://localhost:8000` to confirm server is running. If successful you should see: `Backplane REST API Server is ready`.

</details>
<details>
<summary class="text-blue-700">Docker</summary>

#### Clone Repo

```js
mkdir backplane
cd backplane
git clone https://github.com/backplane-cloud/backplane-api.git
npm i
```

#### Docker

```js
docker build -t backplanesoftware/backplaneapi:0.26.1 .

docker network create my-network

docker run --network my-network --name api -p 8000:8000 backplanesoftware/backplaneapi:0.26.1

docker run —network my-network —name cli -p 3000:3000 backplanesoftware/backplanecli:0.0.1
```

</details>

## Start Using Backplane

With the CLI and API Server configured, create your Organisation and first User.

#### Create Organisation and First User

```bash
bp user register --displayname "<Display Name>" --email "<your e-mail address>" --password "<Password>" --orgname "<Your Organisation Name>"
```

#### Login

```js
bp auth login -e "<your e-mail address>" -p "<Password>"
```

### Connect Cloud Service Providers

Backplane needs to connect to your Cloud Platforms by adding Cloud Service Provider credentials. A Service Principal will be required for Authentication and Authorisation, instructions are provided below:

#### Instructions to create Service Principal

<details>
<summary class="text-blue-700">Azure</summary>

#### Creating a Service Principal in Azure

To create credentials you'll need to create an App registration in Entra ID.

1. Go to Microsoft Entra ID, and under Manage in the left side menu, select App registrations.

2. Click on New Registration and provide a name (e.g. `backplane-api`) a name and click Register.

3. Take note of the Tenant ID and Client ID.

4. Create a new Client Secret, click on Add a certificate or secret, New client secret, type a description, set expiry and click Add. Make a note of the Secret Value.

5. Assign the Service Principal you created with Contributor permission at the Subscription scope.

#### Add Azure Credentials via CLI

```js
bp cloud azure add --id "<orgID>"
--tenantid "<tenant ID>"
--clientid "<client ID>"
--clientsecret "<Your Client Secret>"
--subscriptionid "<default subscription GUID>"
```

#### Note:

The Subscription ID is required in the MVP since App environments are provisioned as Resource Groups as opposed to Subscriptions. Subscription environments will be in a future release.

</details>
<details>
<summary class="text-blue-700">GCP</summary>

#### Creating a Service Principal in GCP

1.  Login to [https://console.cloud.google.com](https://console.cloud.google.com)
2.  Go to `IAM and admin > Service accounts`
3.  Select a Project and click on Create Service Account
4.  Enter a service account name e.g. `backplane-api` and a description e.g. `For Backplane API environment provisioning`
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

#### Add GCP Credentials via CLI

```js
bp cloud gcp add --id "<OrgID>" --tenantid "<Enter Google Org ID>" --gcpsecret "<path-to-JSON-file>"
```

</details>
<details>
<summary class="text-blue-700">AWS</summary>

#### Creating a Service Principal in AWS

1. Login to AWS Management Console
2. Go to IAM
3. Click on Users
4. Click on Create User
5. Enter User Details e.g. `backplane-api`, click next
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
                "organizations:DescribeOrganization",
                "iam:ListUsers",
                "organizations:ListPolicies"
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

#### Add AWS Credentials via CLI

```js
bp cloud aws add --id "<OrgId>" --clientid "<accessKey>" --clientsecret "<accessKeySecret>"
```

</details>

<details>
<summary class="text-blue-700">OCI</summary>

#### Creating a Service Principal in OCI

Creating a service principal in Oracle Cloud Infrastructure (OCI) involves setting up a dynamic group and a policy to allow a non-human entity, such as an application or script, to perform actions on your behalf. Here’s how you can set up and use a service principal for authentication:
Step 1: Create a Dynamic Group

1. Log in to the Oracle Cloud Console.
2. Navigate to Identity & Security > Dynamic Groups.
3. Create a New Dynamic Group:
   _ Click on "Create Dynamic Group".
   _ Enter a Name and Description for the dynamic group.
   _ Define the Matching Rules to include the instances or resources that you want this dynamic group to manage. For example, to include all instances in your tenancy, you might use:plaintextCopy codeALL {instance.compartment.id = '<your_compartment_ocid>'}
   _
   Step 2: Create a Policy
4. Navigate to Identity & Security > Policies.
5. Create a New Policy:
   _ Click on "Create Policy".
   _ Enter a Name, Description, and Compartment for the policy.
   _ Add the required Policy Statements. For example, to allow the dynamic group to manage all resources, you might use:plaintextCopy codeAllow dynamic-group <your_dynamic_group_name> to manage all-resources in tenancy
   _
   Step 5: Collect Information
   Collect the following information:

- User OCID
- Tenancy OCID
- Region
- API Signing Key (private key content)
- Fingerprint

Save the file as oci.json

#### Add OCI Credentials via CLI

```js
bp cloud oci add -i 66681fa21440f6afb76522e6 --ocisecret ../oci.json
```

</details>

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
bp app create --displayname "My first App" --cloud "azure | gcp | aws | oci"
```

#### App Templates:

<div class="rounded-lg bg-slate-100 p-3 ml-0 text-md">
<img src='/assets/bulb.svg' class="inline-block m-0 w-8"/>
App templates define what environments are created and which services are onboarded upon App creation. For example a service can provision a Github repository. The _default_ template will create prod, nonprod, test and dev. Custom App Templates can be added such as Sandbox whereby only a single environment is provisioned.
</div>

<!-- :::tip
To link an App to a Product, you will need to create a Link Request. e.g.

```js
bp request add --appid app1 --requestType link --requestedForType product
```

::: -->

#### PowerShell Note:

The CLI commands have a with the `--stringify` or `-s` switch to return raw JSON, this can then be piped into Powershell with `ConvertFromJSON`.

```ps
bp product list --stringify | Convert-FromJSON
```

Congraulations, this completes the Quick Start.
