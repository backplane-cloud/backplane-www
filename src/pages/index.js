import Layout from "@theme/Layout";
import styles from "./index.module.css";
import Link from "@docusaurus/Link";
import ThemedImage from "@theme/ThemedImage";
import diagram from "@site/docs/backplane-intro.png";
import multicloud_diagram from "@site/docs/multicloud-diagram.png";
import irregular from "@site/docs/irregular.png";
import regular from "@site/docs/regular.png";
import Feature from "@site/src/components/Feature";

// import clsx from "clsx";
// import Heading from "@theme/Heading";

// Component for Feature Tiles

const mainPage = () => {
  // const EnterpriseFeatureList = [
  //   {
  //     title: "Transformation Manager",
  //     Svg: require("@site/static/img/catalog.svg").default,
  //     description: (
  //       <>
  //         Cloud Native Transformation requires audit, assessment, business case
  //         and plan.
  //       </>
  //     ),
  //   },
  //   {
  //     title: "Policy Exemption Manager",
  //     Svg: require("@site/static/img/catalog.svg").default,
  //     description: (
  //       <>
  //         Trusted downstream tools can modify access to enhance permission
  //         posture.
  //       </>
  //     ),
  //   },

  //   {
  //     title: "Optimisation Insights",
  //     Svg: require("@site/static/img/catalog.svg").default,
  //     description: (
  //       <>
  //         A full of cloud workloads, their capabilities and services. Assess
  //         architectural alignment and governance posture across the
  //         organisation.
  //       </>
  //     ),
  //   },
  //   {
  //     title: "Software License Manager",
  //     Svg: require("@site/static/img/catalog.svg").default,
  //     description: (
  //       <>
  //         A full of cloud workloads, their capabilities and services. Assess
  //         architectural alignment and governance posture across the
  //         organisation.
  //       </>
  //     ),
  //   },
  //   {
  //     title: "Cloud Graph",
  //     Svg: require("@site/static/img/catalog.svg").default,
  //     description: (
  //       <>
  //         A full of cloud workloads, their capabilities and services. Assess
  //         architectural alignment and governance posture across the
  //         organisation.
  //       </>
  //     ),
  //   },
  //   {
  //     title: "RBAC Proxy",
  //     Svg: require("@site/static/img/catalog.svg").default,
  //     description: (
  //       <>
  //         A full of cloud workloads, their capabilities and services. Assess
  //         architectural alignment and governance posture across the
  //         organisation.
  //       </>
  //     ),
  //   },
  //   {
  //     title: "Backlog Manager",
  //     Svg: require("@site/static/img/catalog.svg").default,
  //     description: (
  //       <>
  //         A full of cloud workloads, their capabilities and services. Assess
  //         architectural alignment and governance posture across the
  //         organisation.
  //       </>
  //     ),
  //   },
  // ];

  const FeatureList = [
    {
      title: "Software Catalog",
      Svg: require("@site/static/img/catalog.svg").default,
      description: (
        <>
          Enabling discovery by providing your organisation a central source of
          truth for all cloud workloads and services.
        </>
      ),
    },
    {
      title: "Environment Provisioning",
      Svg: require("@site/static/img/provisioning.svg").default,
      description: (
        <>
          Backplane API enables the creation of Cloud Environments in any
          regsitered Cloud Service Provider.
        </>
      ),
    },
    {
      title: "Governance",
      Svg: require("@site/static/img/governance.svg").default,
      description: (
        <>
          Having Cost, Access and Policy visibility across your Organisation,
          Platform and Products is critical for scaling Cloud Transformations.
        </>
      ),
    },
    {
      title: "Workflow Engine",
      Svg: require("@site/static/img/workflow.svg").default,
      description: (
        <>
          Create Requests for budget approval, access to Products and other
          scenarios with the Backplane Workflow Engine to customise processes
          that require approval.
        </>
      ),
    },

    {
      title: "Integrate Services",
      Svg: require("@site/static/img/service.svg").default,
      description: (
        <>
          Plug in your favourite services from Github to any custom API with a{" "}
          Service.
        </>
      ),
    },
    {
      title: "CLI",
      Svg: require("@site/static/img/cli.svg").default,
      description: (
        <>
          The Backplane Abstraction API comes with a fully featured Command Line
          Interface to enable full automation and orchestration of tasks.
        </>
      ),
    },

    {
      title: "Extensions Marketplace",
      Svg: require("@site/static/img/marketplace.svg").default,
      description: (
        <>
          Extend Backplane's functionality by building your own custom
          Extensions and publish them in the Backplane Marketplace.
        </>
      ),
    },
    {
      title: "App Templates",
      Svg: require("@site/static/img/template.svg").default,
      description: (
        <>
          Create Apps with preset environments and services onboarded. Examples
          are Sandbox, Production etc.
        </>
      ),
    },
    {
      title: "Budgeting",
      Svg: require("@site/static/img/budget.svg").default,
      description: (
        <>
          Create an Organisation-level budget with budget request workflow for
          Platform and Products.
        </>
      ),
    },
  ];

  return (
    <Layout>
      {/* Hero  */}

      <div className={styles.container}>
        <ThemedImage
          alt="Backplane themed image"
          sources={{
            light: "/img/backplane-logo-blue.svg",
            dark: "/img/backplane-logo-blue.svg",
          }}
          className="logo"
        />
        <br />
        <h1>Backplane</h1>
        <h2>Multi Cloud Abstraction API</h2>

        <p>
          Simplifying governance of multi-cloud environments, with the concerns
          of cloud Cost, Access, Resource controls and Environment creation all
          available through a single API.
          {/* creation. Enabling Enterprise Architects, DevOps and Platform
          Engineers to govern multi-cloud platforms at enterprise-scale. */}
        </p>
        <div className={styles.cta}>
          <div>
            <Link
              className={`button button--secondary button--lg ${styles.gray}`}
              to="/docs/quick-start"
            >
              Get Started
            </Link>
          </div>
          <div>
            <Link
              className={`button button--secondary button--lg ${styles.blue}`}
              to="/docs/cli"
            >
              Download CLI
            </Link>
          </div>
        </div>
        <hr />
      </div>

      {/* End Hero */}

      <div className={styles.container}>
        <h2>Multi-cloud governance is challenging</h2>
        <p>
          Enterprises are increasingly finding themselves within a multi-cloud
          landscape, typically the result of the following scenarios:
        </p>
        {/* <img
          src={multicloud_diagram}
          style={{ padding: "20px", width: "600px" }}
        /> */}
        <p>
          <ol style={{ textAlign: "left" }}>
            <li>
              <b>Feature Availability</b>
              <br />
              An organisation may wish to use a certain Cloud Platform for their
              differentiating features from their current Cloud Platform. For
              example, Oracle may provide more attractive licensing for database
              workloads running on IaaS.
            </li>
            <br />
            <li>
              <b>Avoid Vendor Lock-in</b>
              <br />
              The need to de-risk dependency upon a single Cloud Platform and
              avoid vendor lock-in. Vendor lock-in can adversely affect
              contractual and commercial negotiations upon renewal as well as
              constraining technical capabilities and services.
            </li>
            <br />
            <li>
              <b>Mergers & Acquisitions</b>
              <br />
              Through business activities of mergers and acquisitions - an
              acquired business may have workloads in Ali Baba or Oracle. This
              presents significant challenges to Enterprise Architects and Cloud
              Governance teams, since each cloud platform will have its own
              governance implementation pertaining to cost, access, resource
              controls and environment creation. This leads to complexity
              scaling governance and also reasoning about governance concerns
              across multiple cloud platforms.
            </li>
          </ol>
          A multi-cloud landscape adds complexity with each cloud platform
          having their own specific way of handling Cost, Access, Resource
          controls and Environment provisioning. Consuming tools and/or systems
          will need to integrate with each Cloud Platform's API and process the
          data to transform it into a suitable format.
        </p>
        <p>
          <br />
          <h4>Multi-Cloud Governance today</h4>
          <img src={irregular} style={{ padding: "20px", width: "400px" }} />
          <h2>Problems</h2>
          <ul style={{ textAlign: "left" }}>
            <li>
              <b>Complexity</b> - Irregular data-shape which pushes data
              transformation processing logic to consumers
            </li>
            <li>
              <b>Tight Coupling</b> - making integration with cloud providers’
              API’s more brittle.
            </li>
            <li>
              <b>Increased Effort</b> - Multi integration points adds complexity
              and effort.
            </li>
          </ul>
          <br />
          <h2>Introducing the Cloud Abstraction API</h2>
          With a single Cloud Abstraction API, querying cloud Cost, Access,
          Resource controls and Environment data becomes simpler through
          abstraction, presenting a more regular and consistent data-shape.
          <br />
          <br />
          <h4>Multi-Cloud Governance with Backplane</h4>
          <img src={regular} style={{ padding: "20px", width: "600px" }} />
          <h2>Benefits</h2>
          <ul style={{ textAlign: "left" }}>
            <li>
              <b>Simplicity</b> - The API transforms the data into a regular and
              consistent data-shape making consumption simpler.
            </li>
            <li>
              <b>Decoupled</b> - Loose coupling makes for a more flexible and
              scalable consumer, rather than a brittle one.
            </li>
            <li>
              <b>Less Effort</b> - Less developer effort required from an
              integration perspective. Multi-cloud governance becomes easier to
              retrieve data and simpler to reason about across the cloud
              platforms.
            </li>
          </ul>
        </p>

        <br />
        <h4>Reference Architecture</h4>
        <img src={multicloud_diagram} />

        {/* <p>
          By simply registering your Organisation, adding your Cloud Provider
          credentials and then either directly through the <code>CLI</code> or{" "}
          <code>REST API</code>, make requests to create
          <code>Cloud Environments</code>, retrieve <code>Cost</code>,{" "}
          <code>Access</code> or <code>Policy</code> data for those
          environments. Backplane follows an Organisation, Platform, Product and
          App schema hierarchy.
        </p>
        <br />
        <h5>Reference Architecture</h5>
        <img src={diagram} />
        <div style={{ marginTop: "50px", textAlign: "left" }}>
          <h2>Why Backplane ? </h2>
        </div>
        <div style={{ marginTop: "50px", textAlign: "left" }}>
          <h4>Simplify building your IDP MVP</h4>
          <p>
            Simplify and reduce integration time for each Cloud Provider. Their
            APIs require specific domain expertise particularly concerning the
            taxonomy of Subscriptions, Projects and Accounts for example. A
            single API allows developers to be productive in rapidly developing
            the IDP MVP.
          </p>
        </div> */}
        {/* <div style={{ marginTop: "50px", textAlign: "left" }}>
          <h4>Multicloud Governance</h4>
          <p>
            Whether through mergers and aquisitions or through avoiding vendor
            lock-in and adopting a multicloud strategy, governing multiple cloud
            platforms at scale is simplified through Backplane Abstraction API,
            that provides a Governance-as-a-service feed of Cost, Access and
            Policy data. This can be consumed by existing systems or by
            Backplane's CLI.{" "}
          </p>
        </div>
        <div style={{ marginTop: "50px", textAlign: "left" }}>
          <h4>
            For Enterprise Architects, Platform Engineers and FinOps teams!
          </h4>
          <p>
            The starting point for good cost governance is having visibility
            across Platforms, Products and Environments. Set Organisational
            Budgets and delegate approvals to downstream Platform teams to
            ensure that Products are operating their cloud spend in accordance
            with approved Budgets to ensure you avoid cost overruns and are able
            to measure value in your cloud workloads.{" "}
          </p>
        </div>
        <div style={{ marginTop: "50px", textAlign: "left" }}>
          <h2>Enterprise-scale</h2>
        </div> */}
        {/* <div style={{ marginTop: "50px", textAlign: "left" }}>
          <h4>Work your way</h4>

          <p>
            Simply add your <code>Cloud Provider</code> to your Organisation to
            enable self-service Cloud 'Space' provisioning. By{" "}
            <strong>default</strong> Backplane allows self-service instant,
            however, you can configure this to be subject to approval controls
            with the Backplane <strong>Workflow Engine</strong> product
            creation.
          </p>
        </div> */}
        {/* <div style={{ marginTop: "50px", textAlign: "left" }}>
      
          <h4>Track Cloud Native Transformation</h4>
          <p>
            Developer concerns are not in isolation of Cloud Economics, Security
            by way of Access Posture and Resource Controls by way of Platform
            Policies. Being able to surface governance data empowers both
            Product Owners and Developers alike.
          </p>
        </div> */}
        <div style={{ marginTop: "20px" }}>
          <Link
            className={`button button--secondary button--lg ${styles.blue}`}
            to="/docs/quick-start"
          >
            Give it a try!
          </Link>
        </div>
        <br />
        <h2>Features</h2>
        <div className={styles.featureContainer}>
          {FeatureList.map((feature, id) => (
            <Feature
              key={id}
              title={feature.title}
              description={feature.description}
              Svg={feature.Svg}
            />
          ))}
        </div>
      </div>

      <div className={styles.container}>
        <Link
          className={`button button button--lg ${styles.gray}`}
          to="/docs/category/features"
        >
          Get Started
        </Link>
      </div>

      <div className={styles.container}>
        <h2>Open Source, always & forever!</h2>

        <Link
          className={`button button button--lg ${styles.yellow}`}
          to="/docs/sponsorship"
        >
          Become a Sponsor
        </Link>
      </div>
    </Layout>
  );
};

export default mainPage;
