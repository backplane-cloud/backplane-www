---
draft: false
title: "Connect to OCI"
snippet: "Create an OCI Service Principal"
publishDate: "2023-03-05 08:00"
image: { src: "/src/assets/oci.png", alt: "Oracle Cloud" }
category: "tutorial"
author: "Lewis Sheridan"
tags: []
---

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
