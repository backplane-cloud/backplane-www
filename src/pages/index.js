import Layout from "@theme/Layout";
import styles from "./index.module.css";
import Link from "@docusaurus/Link";
import ThemedImage from "@theme/ThemedImage";

// import clsx from "clsx";
// import Heading from "@theme/Heading";

const mainPage = () => {
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
      <div className={styles.container}>
        <ThemedImage
          alt="Backplane themed image"
          sources={{
            light: "/img/backplane-logo-black.svg",
            dark: "/img/backplane-logo-white.svg",
          }}
          className="logo"
        />
        <br />
        
        <h2>Open Source Cloud Abstraction API</h2>

        <p>Simplifying multi-cloud governance and speeding up development of custom Internal Developer Portals.
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

      <div className={styles.container}>
        <h2>What is project Backplane</h2>
        <p>
          Backplane is an Open Source Cloud Abstraction API that simplifies
          multi-cloud governance (Cost, Access, Resource controls and
          Environment provisioning). Enabling platform engineering teams to be
          able to build enterprise-scale internal developer platforms faster. Saving development time, effort, and offering
          performance gains to consuming systems by offloading the Extract and
          Transform overhead.
        </p>
        <ThemedImage
          alt="Backplane themed image"
          sources={{
            light: "/img/simple-black.svg",
            dark: "/img/simple-dark.svg",
          }}
          // className="logo"
          style={{ padding: "20px", width: "400px" }}
        />
        <br />
        <br />
        <h2>What problem is it trying to solve ? </h2>
        <p>
          Enterprises that are undergoing a digital transformation and having a
          cloud strategy often find themselves with a multi-cloud landscape.
          This can be intentional through de-risking vendor lock-in, or
          leveraging differentiating value, or a by-product from commercial
          mergers and aquisitions. Governing multi-cloud environments can be
          complex, and this is especially so at enterprise scale. By providing a
          single abstraction API, the retrieval of Cost, Access and Resource
          control data is drastically simplified, allowing for faster
          integration times and being able to reason more easily about
          governance data from different cloud platforms since the data is
          presented in a uniform way. The Abstraction API takes care of Extract
          and Transform processing which further alleviates this concern from
          consuming systems.
        </p>
        <br />
        <h2>Who is it for ?</h2>
        Backplane is designed and built for enterprise-scale cloud governance.
        <br />
        <br />
        <table>
          <tr>
            <td>Enterprise Architects</td>
            <td>
              The Software Catalog provides a single-source-of-truth for all
              Cloud workloads across the cloud platforms. In addition, with full
              resource control visibility, ensuring workloads align with
              reference architecture is simplified, with exemption management
              workflows allowing for deviations where required subject to
              approval controls.
            </td>
          </tr>
          <tr>
            <td>Cloud Governance engineers</td>
            <td>
              Enabling cloud platforms at enterprise-scale requires good
              governance around cost, access, resource controls and
              environments.
            </td>
          </tr>
          <tr>
            <td style={{ width: "30%" }}>Platform Engineers</td>
            <td>
              Building the MVP IDP for your organisation will require
              integration with a Cloud Provider. If you use multiple Cloud
              Providers then this task is significantly ardeous. With
              Backplane's Single Cloud Abstraction API for environment
              provisioning, you can get your MVP IDP up and running quickly!
            </td>
          </tr>
          <tr>
            <td>FinOps Engineers</td>
            <td>
              Backplane not only provides cost visibility across cloud
              platforms, it allows that data to be viewed at the Organisation
              scope, Platform, Product and even App level granularity.
              Furthermore, Budgets can be set at each of these scopes with an
              approval workflow engine to ensure that Product teams are
              accountable for their cloud spend against their approved budget.
            </td>
          </tr>
        </table>
        <br />
        <h2>What value does it provide ?</h2>
        <p>
          Whether you're building your organisations{" "}
          <span className={styles.bluetext}>internal developer platform</span>{" "}
          or integrating existing cloud management tools to consuming{" "}
          <span className={styles.bluetext}>
            multi-cloud governance data-as-a-service
          </span>
          , Backplane provides the following benefits:
        </p>
        <table>
          <tr>
            <td style={{ width: "30%" }}>
              <b>Reduce Integration time</b>
            </td>
            <td>
              Developers do not have to learn the API for each cloud provider to
              determine how to access Cost, Access and Resource control data,
              including creation of Environments. By having a single abstracted
              API, you effectively outsource the concerns to the abstraction API
              and it takes care of the details, allowing Developers to focus on
              value generating tasks.
            </td>
          </tr>
          <tr>
            <td>
              <b>Efficient Offload</b>
            </td>
            <td>
              Improve performance in consuming systems by offloading the Extract
              and Transform processing to Backplane, alleviating logic and
              processing overhead for consuming systems and presenting data in a
              consistent shape.
            </td>
          </tr>
          <tr>
            <td>
              <b>Simplicity in Abstraction</b>
            </td>
            <td>
              The API transforms the data into standardised datashape, making it
              easier to reason about cost, access and resource controls across
              different cloud platforms.
            </td>
          </tr>
          <tr>
            <td>
              <b>Decoupling</b>
            </td>
            <td>
              Maintaining integrations can create a tight coupling and cause
              your consuming systems to become brittle. Backplane makes for a
              more flexible and scalable solution for its consumers.
            </td>
          </tr>
        </table>
      </div>

      <div className={styles.container}>
        <div style={{ marginTop: "20px" }}>
          <Link
            className={`button button--secondary button--lg ${styles.blue}`}
            to="/docs/quick-start"
          >
            Try it out!
          </Link>
        </div>
      </div>

      <div className={styles.container}>
        <h2>Open Source, always & forever!</h2>

        <Link
          className={`button button button--lg ${styles.yellow}`}
          to="/docs/sponsorship"
        >
          Become a Patreon
        </Link>
      </div>
    </Layout>
  );
};

export default mainPage;
