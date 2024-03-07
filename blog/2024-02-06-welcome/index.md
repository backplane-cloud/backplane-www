---
# slug: welcome
# title: Launch
# authors: [lsheridan]
# tags: [backplane]
# hide_table_of_contents: false
---

<!--
Introducing Project Backplane – Your API to seamless Cloud Management!

We're excited to present Project Backplane, an Open Source Cloud Abstraction API designed to simplify the management of multi-cloud environments. No more navigating the complexities of different cloud platforms; now, you can handle it all through one user-friendly API.

What sets Backplane apart is its ability to integrate and govern multiple cloud platforms effortlessly. Whether you're building a developer portal from scratch or incorporating governance data into your existing cloud management tools, Backplane has you covered.

Here's why we created the Backplane Open Cloud Abstraction API:

**Streamlining Development** - Backplane accelerates the creation of cloud management and development platforms by handling the nitty-gritty details of environment, access, cost, and policy implementation.

**Standardising Integration** - With a focus on consistency, Backplane establishes a standardised approach to multi-cloud environment provisioning and governance for automation and integration.

**Empowering Engineers** - Tailored for Cloud and Platform engineers, Backplane offers a reliable and consistent API to support all cloud-native transformation activities.

Powered by Node JS and featuring a user-friendly CLI, the API simplifies orchestrating environment provisioning and extracting essential Cost, Access, and Policy data.

Backplane operates on a Product and Platform model, allowing organisations to manage one or more platforms, each housing one or more Products. Products define the scope of a cloud workload and encompass various environments, also known as Apps.

Project Backplane – where simplicity meets innovation. Join us on this journey to redefine your cloud experience!

## The Birth of Backplane

Backplane was born from the idea that the future is multicloud, and to govern multiple clouds at scale efficiently required a different approach to using either the vendor portals or off-the-shelf tooling and SaaS solutions. With the Backplane API, you can build your own custom toolset and consume the environment provisioning and governance data with simple generic calls.

The shape of the data returned is normalised, so you can rely on a consistent format that provides the data required.

After working within an enteprise cloud centre of excellence, I realised, engineering community required a tool that enabled good cloud governance that can be consumed by downstream tooling. As the focus shifted towards developers by way of platform engineering, having Backplane API as the backbone to those tools will speed up integration since developers won’t necessarily have the pre-requisitte subject matter expertise in Cloud Cost, Access and Policies.

So, the Cloud API is built by engineers, for developers, so an organisation can acellerate cloud adoption and transformation.

## Getting up and running

At its core, we wanted Backplane to be simple to use.

Go to Backplane API repo to clone the Cloud API or use the Hosted API at demo.backplane.dev.

[Download Backplane CLI](https://docusaurus.io/docs/blog)

```
bp user register -e lewis@backplane.cloud -p ****** -orgname 'My First Org'

```

… then go into adding Cloud Creds, Creating Platform, Product, App, adding Repo etc.

## Community

We welcome your contributions to Backplane Core which will always remain **Open Source** and **FREE**.

You can get in contact on our [Slack Channel](https://projectbackplane.slack.com)

:::note

Backplane Core is an Open Source project from Backplane Software Ltd, a UK-based start-up focused on developing software to aid Cloud Native Transformations. It is currently undergoing seed funding to develop Backplane X (eXtentions) to add a UI to Backplane Core and deliver extension modules that extend Backplane Core.

<!--
[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).

Simply add Markdown files (or folders) to the `blog` directory.

Regular blog authors can be added to `authors.yml`.

The blog post date can be extracted from filenames, such as:

- `2019-05-30-welcome.md`
- `2019-05-30-welcome/index.md`

A blog post folder can be convenient to co-locate blog post images:

![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)

The blog supports tags as well!

**And if you don't want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config. -->
