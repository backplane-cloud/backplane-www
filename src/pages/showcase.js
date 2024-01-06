import Layout from "@theme/Layout";
import styles from "./showcase.module.css";
import Link from "@docusaurus/Link";
import diagram from "@site/docs/backplane-intro.png";
import oscaa from "@site/src/pages/oscaa-sm.png";

const ShowcaseFeature = ({ title, description, id }) => {
  return (
    <>
      <div key={id} className={styles.featureCard}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </>
  );
};
const EnterpriseFeature = ({ title, description, id }) => {
  return (
    <>
      <div key={id} className={styles.featureCardEnterprise}>
        <div className={styles.titleEnterprise}>{title}</div>
        <div className={styles.descriptionEnterprise}>{description}</div>
      </div>
    </>
  );
};

const showcase = () => {
  const EnterpriseFeatureList = [
    {
      title: "Transformation Manager",
      Svg: require("@site/static/img/catalog.svg").default,
      description: (
        <>
          Cloud Native Transformation requires audit, assessment, business case
          and plan.
        </>
      ),
    },
    {
      title: "Policy Exemption Manager",
      Svg: require("@site/static/img/catalog.svg").default,
      description: (
        <>
          Trusted downstream tools can modify access to enhance permission
          posture.
        </>
      ),
    },

    {
      title: "Optimisation Insights",
      Svg: require("@site/static/img/catalog.svg").default,
      description: (
        <>
          A full of cloud workloads, their capabilities and services. Assess
          architectural alignment and governance posture across the
          organisation.
        </>
      ),
    },
    {
      title: "Software License Manager",
      Svg: require("@site/static/img/catalog.svg").default,
      description: (
        <>
          A full of cloud workloads, their capabilities and services. Assess
          architectural alignment and governance posture across the
          organisation.
        </>
      ),
    },
    {
      title: "Cloud Graph",
      Svg: require("@site/static/img/catalog.svg").default,
      description: (
        <>
          A full of cloud workloads, their capabilities and services. Assess
          architectural alignment and governance posture across the
          organisation.
        </>
      ),
    },
    {
      title: "RBAC Proxy",
      Svg: require("@site/static/img/catalog.svg").default,
      description: (
        <>
          A full of cloud workloads, their capabilities and services. Assess
          architectural alignment and governance posture across the
          organisation.
        </>
      ),
    },
    {
      title: "Backlog Manager",
      Svg: require("@site/static/img/catalog.svg").default,
      description: (
        <>
          A full of cloud workloads, their capabilities and services. Assess
          architectural alignment and governance posture across the
          organisation.
        </>
      ),
    },
  ];
  const FeatureList = [
    {
      title: "Global Catalog",
      Svg: require("@site/static/img/catalog.svg").default,
      description: (
        <>
          A full <code>catalog</code> providing a single source of truth.
        </>
      ),
    },
    {
      title: "Cloud Provisioning",
      Svg: require("@site/static/img/env.svg").default,
      description: (
        <>
          Backplane API enables the creation of Cloud Environments in any
          regsitered Cloud Service Provider. Allowing for self-service
          orchestration use-cases i.e. IDP development!
        </>
      ),
    },
    {
      title: "Governance",
      Svg: require("@site/static/img/env.svg").default,
      description: (
        <>
          Having Cost, Access and Policy visibility across your Organisation,
          Platform and Products is critical for scaling Cloud Transformations.
        </>
      ),
    },
    {
      title: "Workflow Engine",
      Svg: require("@site/static/img/env.svg").default,
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
      Svg: require("@site/static/img/env.svg").default,
      description: (
        <>
          Plug in your favourite services from Github to any custom API with a
          <code>Service</code>.
        </>
      ),
    },
    {
      title: "CLI",
      Svg: require("@site/static/img/env.svg").default,
      description: (
        <>
          Backplane is developed by the Backplane Open Source team, and one of
          the primary mandates is automation. The REST API has full parity in
          the Backplane CLI.
        </>
      ),
    },

    {
      title: "Extensions Marketplace",
      Svg: require("@site/static/img/env.svg").default,
      description: (
        <>
          Extend Backplane's functionality by building your own custom
          Extensions and publish them in the Backplane Marketplace.
        </>
      ),
    },
    {
      title: "App Templates",
      Svg: require("@site/static/img/env.svg").default,
      description: (
        <>
          Extend Backplane's functionality by building your own custom
          Extensions and publish them in the Backplane Marketplace.
        </>
      ),
    },
  ];

  return (
    <Layout>
      {/* Hero  */}
      <div className={styles.container}>
        <h1>The Open Source </h1>
        <h1>Cloud Abstraction API</h1>
        <p>
          A simple API to aid in multi cloud enablement and transformation.
          <br />
          Whether you're building your Internal Development Portal or Cloud
          Management platform, OSCAA makes it easier!
        </p>
        {/* <img src={oscaa} style={{ width: "100px" }} /> */}
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
              Give it a try!
            </Link>
          </div>
        </div>
        <hr />
      </div>
      <div className={styles.container}>
        <h2>Building an IDP ? </h2>
        <h3>
          Power your developer experience with Backplane’s Open Cloud API.
        </h3>
        <p>
          Are you building an Internal Developer Platform and your Developers
          are spending time writing integration code to provision environments ?
          Backplane’s Open Cloud Abstraction API does the hard work for you, all
          you have to do is integrate with Backplane's single API, saving
          precious developer time.
        </p>
        <img src={oscaa} style={{ marginTop: "50px", width: "100px" }} />
        <br />
        Open Cloud Abstraction API (OSCAA)
        <img src={diagram} style={{ marginTop: "50px" }} />
        <div style={{ marginTop: "50px", textAlign: "left" }}>
          <h4>Plug into the Backplane</h4>
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
          <h4>Governance as-a-Service</h4>
          <p>
            Developer concerns are not in isolation of Cloud Economics, Security
            by way of Access Posture and Resource Controls by way of Platform
            Policies. Being able to surface governance data empowers both
            Product Owners and Developers alike.
          </p>
        </div>
        <div style={{ marginTop: "50px", textAlign: "left" }}>
          <h4>Developer Experience</h4>
          <p>
            Self-service is key to developer experience. Where the requisitte
            cloud 'space' is provisioned on-demand, with hooks to services like
            Github that will ensure a repo is provisioned for all workloads.
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
      </div>
      <div className={styles.container}>
        <h2>
          <strike>Cool</strike>, Core Features{" "}
        </h2>
      </div>
      <div>
        <div className={styles.featureContainer}>
          {FeatureList.map((feature, id) => (
            <ShowcaseFeature
              key={id}
              title={feature.title}
              description={feature.description}
              svg={feature.Svg}
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
          Find out more
        </Link>
      </div>

      <div className={styles.container}>
        <h2>Open Source, always & forever!</h2>
        <p>
          The Backplane Project promises that <strong>Backplane Core</strong>{" "}
          which comprises of the API, CLI and soon to be released UI, will
          always and forever be <strong>Open Source</strong>.
        </p>
        <p>
          The Backplane Open Source team welcome all contributions from the
          community to enhance Backplane Core. Please view the{" "}
          <a href="">Product Roadmap</a> for release timeframes, and their{" "}
          <a href="">Product Backlog</a> to vote for Feature prioritisation or
          report bugs!
        </p>

        <p>
          If you are an organisation that benefits from Backplane Open Cloud
          Abstraction API and would like to support its development and guide
          the future development of features, we have sponsorship benefits
          available for you and welcome your support!
        </p>

        <div className={styles.container}>
          <Link
            className={`button button button--lg ${styles.yellow}`}
            to="/docs/sponsorship"
          >
            Sponsor Us
          </Link>
        </div>
        {/* <h3>
          Backplane Software offers a hosted-version of Backplane called
          Backplane Cloud. This SaaS offering provides the benefits of a
          hosted-solution for a subscription. In addition, Marketplace
          Extensions for enterprise customers will be available under license.
        </h3> */}
      </div>

      {/* <div className={styles.container}>
        <h2>Extensions</h2>
        <p>
          Develop your own custom Marketplace Extensions and make them either
          freely available to the community or under license.
        </p>
      </div>

      <div>
        <div className={styles.featureContainer}>
          {EnterpriseFeatureList.map((feature, id) => (
            <EnterpriseFeature
              key={id}
              title={feature.title}
              description={feature.description}
              svg={feature.Svg}
              style={styles.featureCardRoadmap}
            />
          ))}
        </div>
      </div> */}
    </Layout>
  );
};

export default showcase;
