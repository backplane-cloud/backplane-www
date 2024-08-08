---
draft: true
title: "Investor Deck"
snippet: "Configuring the Backplane API Server"
publishDate: "2024-08-02 08:00"
image: { src: "/assets/backplane.svg", alt: "Command Line Interface" }
category: "private"
author: "Lewis Sheridan"
tags: []
---

_Confidential & Privileged information, not for distribution_

## Contents

[Key Information](#key-information)<br/>
[Background](#background)<br/>
[The Problem](#the-problem)<br/>
[The Solution](#the-solution)<br/>
[Products](#products)<br/>
[Market Opportunity](#market-opportunity)<br/>
[Business Model](#business-model)<br/>
[Go-to-market Strategy](#go-to-market-strategy)<br/>
[Competitive Analysis](#competitive-analysis)<br/>
[Traction & Milestones](#traction-&-milestones)<br/>
[Team](#team)<br/>
[Financial Projections](#financial-projections)<br/>
[Funding Requirements](#funding-requirements)<br/>
[Call to Action](#call-to-action)<br/>

### Key Information

|                   |                                                                                                                            |
| :---------------- | :------------------------------------------------------------------------------------------------------------------------- |
| Created           | 7 Aug 2024                                                                                                                 |
| Company           | [Backplane Software Ltd.](https://find-and-update.company-information.service.gov.uk/company/15079797)                     |
| Founder           | Lewis Sheridan (lewis@backplane.dev)                                                                                       |
| Product / Type    | Backplane Metacloud / SaaS                                                                                                 |
| Mission           | Become the global entry-point to cloud by delivering a unified multi-cloud experience through a simplified cloud Backplane |
| Investment Stage  | Seed                                                                                                                       |
| Investment Target | €3 million for 15% equity                                                                                                  |

#### Company

- [Backplane Software Ltd.](https://find-and-update.company-information.service.gov.uk/company/15079797) is a UK-based software development company and start-up formed in 2023 by [Lewis Sheridan](/founder).
- Its purpose is to build software tools to simplify multi-cloud integration and adoption.
- Backplane is part of the Microsoft for Startups incubation hub.

## Background

Cloud has revolutionised how organisations consume compute, storage and networking. With virtualisation abstracting over a server resources, and Cloud abstracting over datacenters, virtualisation and abstraction have enabled better utilisation of resources providing better value to organisations.

#### Assumptions

- Cloud services will continue to become more commoditised across undifferented featuers like IaaS over the next 5 years as vendors focus more on differentiated offerings e.g. AI, Quantum Compute etc.

- Multi-Cloud will continue to be a strategic play for larger organisations to reduce vendor lock-in, leverage differentiated features and provide hosting flexibility to maximise value in Cloud

- Standardisation across common concerns of Access, Cost, Policy and Account vending will help make multi-cloud more scalable and simpler.

- Cloud Spend will continue to increase globally with estimated total spend to exceed $1 Trillion by 2030

## Problem

Large organisations are increasingly finding themselves operating in a multi-cloud landscape. This can be the result of mergers & acquisition, differentiating features and reducing vendor lock-in. Irrespective of motivation, adopting, enabling, governing and operating multi-cloud platforms is complex, giving rise to a number of issues when integration a custom cloud management platform.

<img src='/assets/lewis-lg.png' class='inline-block w-16 mb-0' />

#### Insight

> Whilst working in the Technology division of the world's largest global shipping and logistics company and undergoing a Cloud transformation, I gained unique insights and experience in adopting, enabling, and governing multiple Clouds at scale.

> Effective cloud operations and deployment rely upon a solid foundation of adoption and governance. We the frantic pace to adopt cloud platforms, control cost etc, I realise there's an opportunity to build a simpler way to onboard Cloud Platforms at scale. This motivated me to create Backplane, a unified platform that encapsulates the best practices from Cloud Adoption and Well-Architected Frameworks to make multi-cloud adoption, enablement and governance simpler through a single abstraction API.

> Backplane Metacloud functions as a Cloud Operating System, providing a unified experience across different Cloud Service Providers, with a single purpose and goal to democratise multi-cloud for organisations of all sizes, globally.

### Integration Issues

|                                 |                                                                                            |
| :------------------------------ | :----------------------------------------------------------------------------------------- |
| **Integration Complexity**      | Each Cloud Service Provider's API needs to be integrated into, increasing integration time |
| **Skill Dependency**            | High dependendancy of Subject Matter Expertise in several cloud platforms                  |
| **Lack of Consistent Controls** | managing consistency in security policies and access controls is challenging at scale      |
| **Lack of Standardisation**     | Increases cross-cloud governance complexity                                                |

With organisations focusing on Developer Experience, expending time and effort to integrate into each Cloud platform is of low-value.

## The Solution

#### A Cloud Backplane

In electronics, a Backplane is a shared interconnect of components that run in parallel. Taking this concept to Cloud, we want to use the modularity to connect Cloud Service Providers into a common Backplane, so that those Clouds can be consumed in a standardised, consistent and heterogeneous manner.

The Backplane Cloud Abstraction API is the engine for Backplane Cloud which is a Metacloud. The API deals with Cloud integration and the Metacloud provides a Cloud Operating System upon which unifies the Cloud experience.

#### Metacloud

Backplane’s Metacloud takes the next logical step and abstracts over Cloud platforms, providing a 'virtualised' Cloud platform and becoming a unified entrypoint to Cloud; with the benefits of multiple cloud platforms delivered through a single-cloud experience.

The table below shows the number of Datacenters and Regions for each major public cloud service provider. Backplane as a Metacloud has access to all the Datacenters and Regions across all Cloud Service Providers.

#### How Metacloud compares

|                 | <img src='/assets/azure.svg' class='w-12'/> | <img src='/assets/aws.svg' class='w-12'/> | <img src='/assets/gcp.svg' class='w-12'/> | <img src='/assets/backplane.svg' class='w-16'/> |
| :-------------- | :-----------------------------------------: | :---------------------------------------: | :---------------------------------------: | :---------------------------------------------: |
| **Platform**    |               Microsoft Azure               |            Amazon Web Services            |           Google Cloud Platform           |             **Backplane Metacloud**             |
| **Datacenters** |                     300                     |                    125                    |                    40                     |                     **465**                     |
| **Regions**     |                     60                      |                    31                     |                    26                     |                     **117**                     |

The Cloud Abstraction API provides a single, unified API to address the issues with multi-cloud integration:

|                                 |                                                                                                                           |
| :------------------------------ | :------------------------------------------------------------------------------------------------------------------------ |
| **Integration Complexity**      | Providing a single API as an interface to each Cloud Vendors API and Faster integration time (just a single API to learn) |
| **Skill Dependency**            | The API helps alleviates the burden of subject matter expertise for the cloud platforms                                   |
| **Lack of Consistent Controls** | Policies defined once and then transpiled into Cloud Platform's format (Domain Specific Language)                         |
| **Lack of Standardisation**     | Providing data standardisation so cost, access, policy data follows a consistent data-shape                               |

## Products

| Product               | Core Capabilities                                     | URL                       |
| :-------------------- | :---------------------------------------------------- | :------------------------ |
| Cloud Abstraction API | Account Provisioning, Cost, Access & Policy retrieval | https://backplane.dev     |
| Metacloud             | Resource Provisioning                                 | `https://backplane.cloud` |

### Cloud Abstraction API

Backplane’s Open Source Cloud Abstraction API provides a unified API to simplify:

- Cloud Account Provisioning
- Standardisation of Cost, Access & Policy data

  #### Features

  - CLI and UI
  - Software Catalog
  - Workflow Approval Engine
  - Cost Management & Budgeting
  - Custom Extensions (Services)

### Metacloud

- Backplane Metacloud is an abstraction platform that unifies cloud consumption.
- It uses Backplane’s Cloud Abstraction API and extends it with abstracted resource management and provisioning.
- This platform promotes standardisation and heterogeneity, enabling organisations to maximize the value of their cloud workloads.
- A single unified platform for resource provisioning
- Intelligent Workload Placement insights
- Single Management Portal

### How Metacloud works

<img class="inline-block  m-0 mr-3" src="/assets/metacloud.png" />

- Cloud Service Providers are registered to Backplane with Service Principal Credentials
- The Platform Operating model provides the data model for creating multi-cloud Apps
- Cost, Access and Policy can be viewed at the App, Product and Platform Scopes.

## Market Opportunity

## Business Model

## Go-to-Market Strategy

## Competitive Analysis

## Traction & Milestones

## Team

| Member         | Role    | Linked In                                                    |
| :------------- | :------ | :----------------------------------------------------------- |
| Lewis Sheridan | Founder | [/lewissheridan](https://www.linkedin.com/in/lewissheridan/) |

### Founders

With a combined experience of over 40 years in tech in lead technical and leadership roles, and with a proven track record of delivery and execution.

|                                                           | Name                       | Role            | Bio                                                                                                                                                                                                                                                                  |
| :-------------------------------------------------------- | :------------------------- | :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src='/assets/lewis.png' class='inline-block mb-0' /> | [Lewis Sheridan](/founder) | Founder and CEO | Engineer with over 20 years experience in tech, several of which have been specialising in Cloud for the largest logistics company in the world. Certified Cloud Solution architect in both Azure and GCP. He fullstack developed Backplane's Cloud Abstraction API. |
| <img src='/assets/backplane.svg' class='inline-block' />  | [TBA](/)                   | Co-Founder      | _To be announced_                                                                                                                                                                                                                                                    |

## Financial Projections

## Funding Requirements

## Call to Action

## Q&A
