import Layout from "@theme/Layout";
import styles from "./index.module.css";
import Link from "@docusaurus/Link";
import ThemedImage from "@theme/ThemedImage";

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import Feature from "@site/src/components/Feature";
// import clsx from "clsx";
// import Heading from "@theme/Heading";

const mainPage = () => {
  const FeatureList = [
    {
      title: "Software Catalog",
      Svg: require("@site/static/img/catalog.svg").default,
      description: (
        <>
          Full directory of Cloud workloads organised by Platform and
          Capability.
        </>
      ),
    },
    {
      title: "Provisioning",
      Svg: require("@site/static/img/provisioning.svg").default,
      description: <>Provisioning environments in Azure, GCP or AWS.</>,
    },
    {
      title: "Governance",
      Svg: require("@site/static/img/governance.svg").default,
      description: (
        <>Full Cost, Access and Policy visibility across your Organisation.</>
      ),
    },
    {
      title: "Workflow Engine",
      Svg: require("@site/static/img/workflow.svg").default,
      description: <>Create Budget and Access requests for approval.</>,
    },

    {
      title: "Integrate Services",
      Svg: require("@site/static/img/service.svg").default,
      description: (
        <>Auto-provision third-party services as part of App creation.</>
      ),
    },
    {
      title: "CLI",
      Svg: require("@site/static/img/cli.svg").default,
      description: (
        <>
          Fully featured CLI to enable full automation and orchestration of
          tasks.
        </>
      ),
    },

    {
      title: "Modules",
      Svg: require("@site/static/img/marketplace.svg").default,
      description: (
        <>Extend Backplane's functionality by building your own modules.</>
      ),
    },
    {
      title: "App Templates",
      Svg: require("@site/static/img/template.svg").default,
      description: (
        <>Create Apps with preset environments and services onboarded.</>
      ),
    },
    {
      title: "Budgeting",
      Svg: require("@site/static/img/budget.svg").default,
      description: <>Set Org, Platform and Product budgets and approval.</>,
    },
  ];

  return (
    <Layout>
      <div className={styles.container}>
        <ThemedImage
          alt="Backplane themed image"
          sources={{
            light: "/img/backplane-logo-blue.svg",
            dark: "/img/backplane-logo-white.svg",
          }}
          className="logo"
        />
        <h1>An open source cloud engineering platform</h1>
        <p>
          Simplifying cloud adoption, enablement and governance to form the
          foundation of your cloud transformation and developer experience
        </p>{" "}
        <ThemedImage
          alt="Backplane themed image"
          sources={{
            light: "/img/terminal.gif",
            dark: "/img/terminal.gif",
          }}
          className="terminal"
        />
        <div className={styles.cta}>
          <div>
            <Link
              className={`button button--secondary button--lg ${styles.gray}`}
              to="/docs/quick-start"
            >
              Get Started
            </Link>
          </div>
          {/* <div>
            <Link
              className={`button button--secondary button--lg ${styles.darkgray}`}
              to="/docs/cli"
            >
              Download CLI
            </Link>
          </div> */}
          <div>
            <Link
              className={`button button--secondary button--lg ${styles.blue}`}
              to="https://api.backplane.dev/"
            >
              Demo{" "}
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <h2>Introduction</h2>
        <p>
          Powered by Backplane's Cloud Abstraction API, Backplane offers a
          modular and extensible platform to help guide cloud adoption, speed-up
          enablement and simplify multi-cloud governance at enterprise-scale.
        </p>
        <p>
          Enabling and governing multicloud environments can be complex. From
          ensuring strong cost management, to access posture management to
          architectural and security alignment. Backplane has governance in its
          DNA, developed by engineers focused on cloud governance for one of the
          largest companies in the world.
        </p>
      </div>

      <div className={styles.container}>
        <h2>Motivations</h2>
        <p style={{ textAlign: "left" }}>
          <ul>
            <li style={{ marginTop: "15px" }}>
              Cloud should be simple, but Multi cloud governance is complex.
              What if we can consume Cloud Platforms in an abstracted manner ?
              For example, whether you're using a Subscription in Azure, a
              Project in GCP or an Account in AWS, from an abstracted point of
              view, you just need 'Cloud Space' to deploy your App. Similarly,
              governance concerns of Access, Cost and Policies can follow a
              consistent datashape, so that when viewed via abstraction, its
              simpler to reason about and govern multiple cloud platforms.
            </li>
            <li style={{ marginTop: "15px" }}>
              Value-over-Cost - Whilst organisations care about Cloud Cost, they
              really care about Cloud Value, and having a platform that
              articulates value through a Value Score metric is more meaningful
              that blindly trying to reduce cost.
            </li>
            <li style={{ marginTop: "15px" }}>
              By having good cloud governance, you can accelerate development
              with confidence.
            </li>
            <li style={{ marginTop: "15px" }}>
              Cloud Transformations are complicated.
            </li>

            <li style={{ marginTop: "15px" }}>
              Platform Engineering and FinOps practices are still maturing.
            </li>
          </ul>
        </p>
      </div>

      <div className={styles.container}>
        <h2>Quick Start</h2>
        <p>
          Get up and running quickly with Backplane API. The Backplane API can
          be used as a JSON-based API with a CLI, or a Hypermedia-based API with
          a UI. By hosting Backplane API your integrations can out-source cloud
          environment provisioning and consumption of cloud governance data
          across your enterprise's cloud platforms.
          <br />
          <br />
          <div>
            <Link
              className={`button button--secondary button--lg ${styles.gray}`}
              to="/docs/quick-start"
            >
              Get Started
            </Link>
          </div>
        </p>

        {/* <ThemedImage
          alt="Backplane themed image"
          sources={{
            light: "/img/projectbackplane-light.png",
            dark: "/img/projectbackplane-dark.png",
          }}
          // className="logo"
          className={styles.image}
        /> */}
      </div>

      <div className={styles.container}>
        <h2>Community </h2>
        <p>
          We are a team of cloud engineers passionate about cloud adoption,
          enablement and governance. Feel free to get involved; whether
          collaborating on code, bug-fixes, new ideas or implementing new
          features. Backplane's Cloud Abstraction API is Open Source, built by
          engineers, for engineers!
        </p>

        <a href="https://github.com/backplane-cloud/" target="_blank">
          <ThemedImage
            alt="Github"
            sources={{
              light: "/img/github-light.png",
              dark: "/img/github-dark.png",
            }}
            // className="logo"
            style={{ width: "50px", margin: "20px" }}
          />
        </a>
        <a href="https://backplaneworkspace.slack.com/" target="_blank">
          <ThemedImage
            alt="Slack"
            sources={{
              light: "/img/slack.png",
              dark: "/img/slack.png",
            }}
            // className="logo"
            style={{ width: "50px", margin: "20px" }}
          />
        </a>
        <a
          href="https://www.npmjs.com/settings/backplane-software/packages"
          target="_blank"
        >
          <ThemedImage
            alt="NPM"
            sources={{
              light: "/img/npm.png",
              dark: "/img/npm.png",
            }}
            // className="logo"
            style={{ width: "100px", margin: "20px" }}
          />
        </a>
      </div>
    </Layout>
  );
};

export default mainPage;
