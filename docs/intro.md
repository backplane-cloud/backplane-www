---
sidebar_position: 1
---

# Introduction

Let's discover **Backplane in less than 5 minutes**.

## Why Backplane ?

### Context

As organisations adopt cloud at scale, the burden to govern becomes evermore critical. Not only are organisations adopting a single cloud, but invariably their cloud-first strategies and transformations have ventured into the realm of multi-cloud, through various business activities like acquisitions etc.

Organisations are also wrestling with a paradigm shift from mode 1 centralised Ops to mode 2, DevOps and Platform engineering approaches. And the most recent developments is towards the development of Internal Developer Portals to further streamline the Developer experience.

> With Backplane, we wanted to create a single cloud API to help drive cloud-native transformation, with a particularly strong emphasis on cost, access and policy.
>
> **Lewis Sheridan** - _Maintainer@Backplane_

### Problem

- Inefficient use of developers time

  Subject Matter Expertise in a Cloud Platform from a governance perspective is provided by a Cloud Engineer for integration, or Cloud Architect. Developers are then tasked with consuming the Cloud Provider's API to implment environment provisioning and extraction of governance data to feed to downstream systems. This approach is costly both in terms of time and effort to 'plug-in' to each Cloud Provider in a multicloud scenario.

- Irregular data shape

  The Access, Cost and Policy datashape is different depending on whether you're pulling this data from Azure, GCP or AWS. The Abstraction API essential does an in-flight ETL to present the data in a standardised 'abstracted' view. This makes reasoning about data across the cloud landscape much simpler.

- DevOps vs. Platform Engineering

  Backplane is unopinionated in this regard, it essentially operates a bring-your-own-process, and recognises that approval workflows are necessary, particularly when approving budgets. Backplane has you covered with its inbuilt workflow approval engine.

### Solution

Backplane simplifies the Cloud landscape by providing a single abstraction API for the purposes of environment provisioning and extraction of governance data, from cost, access and policies. With a more generalised, abstracted form of the data, building IDPs and CMPs becomes a more trivial activity.

So whether you're building a custom internal development platform or cloud management platform, or have a need to consume cloud governance data as a service, the Backplane API can help.

![Backplane Diagram](backplane-intro.png)

## Features

### Environment Provisioning :cloud:

Whether you're creating Resource Groups in Azure, or Folders in GCP or Accounts in AWS, what you care about is some cloud 'space'. Provisioning Cloud Space (aka Environments) is abstracted away, so the only decision you need to decide upon is which underlying Cloud Platform you wish to host your Cloud workload.

### Software Catalog :earth_americas:

In addition, having a single-source-of-truth in the software catalog, allows enterprise architectecture to map capabilities and catalog workloads. As well as being a reference for managing cloud-native transformation activities.

### FinOps :moneybag:

Having cost visibility at a Product and Platform and Org level is crucial to tracking budgeted spend. All Apps which consume cost can only be linked to a parent Product that has a budget approved. This accountability at the workload level ensures there are no cost overruns are Product value can be more easily articulated at a Platform and Product level.

### Access :lock:

Understanding **Who has access to what** is key to ensuring a good access posture across multiple cloud platforms.

### Policy :shield:

Guardrails are put in place to ensure that resources adhere to security and architectural references. Having these enforced consistently across cloud platforms and having visibility of these is critical to operating cloud platforms at scale.

Are you ready to [Get Started](/docs/getting-started) ?

## Project Goals

### Open Source

- Contribute Backplane to the Open Source and Platform Engineering community, to help with Cloud Native transformations. Submit Backplane to the Cloud Native Compute Foundation.

### Extensions Marketplace

- (eXtensions) marketplace to extend Backplane Core's functionality with new features to build-out a platform and eco-system that helps every organisation with their Cloud journey.

### Accelerate Cloud Native Transformations

- By having a single, community develoed API that is vendor agnostic and enables organisations to quickly and easily adopt multicloud strategies on their terms.

<!-- Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes. -->
