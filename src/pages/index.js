import Layout from "@theme/Layout";
import styles from "./index.module.css";
import Link from "@docusaurus/Link";
import ThemedImage from "@theme/ThemedImage";
import diagram from "@site/docs/backplane-intro.png";

// import clsx from "clsx";
// import Heading from "@theme/Heading";

// Component for Feature Tiles

const Feature = ({ title, description, id, Svg }) => {
  return (
    <>
      <div key={id} className={styles.featureCard}>
        <div>
          <Svg
            className={styles.featureSvg}
            style={{
              width: "35px",
              height: "35px",
              padding: "0px",
              // background: "blue",
              // color: "#2a7fff",
            }}
          />
        </div>

        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </>
  );
};

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
        <h2>Cloud Abstraction API project</h2>
        <h5>Simplifying IDP creation for Platform Engineers</h5>
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
              to="/docs/quick-start"
            >
              Download CLI
            </Link>
          </div>
        </div>
        <hr />
      </div>

      {/* End Hero */}

      <div className={styles.container}>
        <h2>How it works </h2>
        <h5>A single API to govern and manage many clouds.</h5>
        <p>
          Are you building an Internal Developer Platform and your Developers
          are spending time writing integration code to provision environments ?
          Backplane’s Open Cloud Abstraction API does the hard work for you, all
          you have to do is integrate with Backplane's single API, saving
          precious developer time.
        </p>
        <p>
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
        </div>
        <div style={{ marginTop: "50px", textAlign: "left" }}>
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
        </div>
        <div style={{ marginTop: "50px", textAlign: "left" }}>
          <h4>Work your way</h4>

          <p>
            Simply add your <code>Cloud Provider</code> to your Organisation to
            enable self-service Cloud 'Space' provisioning. By{" "}
            <strong>default</strong> Backplane allows self-service instant,
            however, you can configure this to be subject to approval controls
            with the Backplane <strong>Workflow Engine</strong> product
            creation.
          </p>
        </div>
        <div style={{ marginTop: "50px", textAlign: "left" }}>
          {/* <h4>Govern multiple clouds at ease!</h4>
           */}
          <h4>Track Cloud Native Transformation</h4>
          <p>
            Developer concerns are not in isolation of Cloud Economics, Security
            by way of Access Posture and Resource Controls by way of Platform
            Policies. Being able to surface governance data empowers both
            Product Owners and Developers alike.
          </p>
        </div>
        <div>
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
              style={styles.featureCard}
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
