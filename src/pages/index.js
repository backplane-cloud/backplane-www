import Layout from "@theme/Layout";
import styles from "./index.module.css";
import Link from "@docusaurus/Link";
import ThemedImage from "@theme/ThemedImage";

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

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

        <h2>Cloud Abstraction API</h2>

        <p>
          {/* Simplifying multi-cloud governance and speeding up development of
          custom Internal Developer Portals. */}
          Backplane is an Open Source Cloud Abstraction API that simplifies
          multi-cloud governance and speeds up the development of internal
          developer portals
        </p>
        <div className={styles.cta}>
          <div>
            <Link
              className={`button button--secondary button--lg ${styles.gray}`}
              to="/docs/quick-start"
            >
              Try it out
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
        <h2>Problem</h2>
        <p>
          Governing multi-cloud at scale is complex. Integrating custom tooling
          to cloud platforms requires subject matter expertise and effort. By
          providing a single abstracted view of the concerns of Cloud Cost,
          Access, Resource Controls and Environment provisioning, platform
          engineering teams and developers can focus on speed of delivery and a
          separation of concerns that makes it simpler and easier to reason
          about multicloud governance.
        </p>
        <h2>Solution</h2>
        The Backplane API sits in front of the cloud platforms and provides a
        logical data model of Org, Platform, Product and App. The App is linked
        to a Cloud Platform, and generic queries for Cost, Access, Policy and
        Environment provisioning can be issued to the Backplane API, and it will
        translate the request into the correct format for the underlying cloud
        platform.
        <ThemedImage
          alt="Backplane themed image"
          sources={{
            light: "/img/projectbackplane-light.png",
            dark: "/img/projectbackplane-dark.png",
          }}
          // className="logo"
          className={styles.image}
        />
        <h2>Benefits</h2>
        <Tabs>
          <TabItem value="speed" label="Speed-up IDP MVP creation" default>
            <p>
              Developers do not have to learn the API for each cloud provider to
              determine how to access Cost, Access and Resource control data,
              including creation of Environments. By having a single abstracted
              API, you effectively outsource the concerns to the abstraction API
              and it takes care of the details, allowing Developers to focus on
              value generating tasks.
            </p>
          </TabItem>
          <TabItem value="efficiency" label="Offload efficiency">
            <p>
              Building the MVP IDP for your organisation will require
              integration with a Cloud Provider. If you use multiple Cloud
              Providers then this task is significantly ardeous. With
              Backplane's Single Cloud Abstraction API for environment
              provisioning, you can get your MVP IDP up and running quickly!
            </p>
          </TabItem>
          <TabItem value="business-process" label="Business Process">
            <p>
              Improve performance in consuming systems by offloading the Extract
              and Transform processing to Backplane, alleviating logic and
              processing overhead for consuming systems and presenting data in a
              consistent shape.
            </p>
          </TabItem>
          <TabItem value="simplicity" label="Simplicity">
            <p>
              The API transforms the data into standardised datashape, making it
              easier to reason about cost, access and resource controls across
              different cloud platforms.
            </p>
          </TabItem>
          <TabItem value="decouple" label="Decoupled">
            <p>
              Maintaining integrations can create a tight coupling and cause
              your consuming systems to become brittle. Backplane makes for a
              more flexible and scalable solution for its consumers.
            </p>
          </TabItem>
        </Tabs>
        <h2>Our Customers</h2>
        Backplane is designed and built for enterprise-scale cloud governance.
        <br />
        <br />
        <Tabs>
          <TabItem
            value="enterprise-architects"
            label="Enterprise Architects"
            default
          >
            <p>
              The Software Catalog provides a single-source-of-truth for all
              Cloud workloads across the cloud platforms. In addition, with full
              resource control visibility, ensuring workloads align with
              reference architecture is simplified, with exemption management
              workflows allowing for deviations where required subject to
              approval controls.
            </p>
          </TabItem>
          <TabItem value="platform-engineers" label="Platform Engineers">
            <p>
              Building the MVP IDP for your organisation will require
              integration with a Cloud Provider. If you use multiple Cloud
              Providers then this task is significantly ardeous. With
              Backplane's Single Cloud Abstraction API for environment
              provisioning, you can get your MVP IDP up and running quickly!
            </p>
          </TabItem>
          <TabItem value="governance" label="Governance Teams">
            <p>
              {" "}
              Enabling cloud platforms at enterprise-scale requires good
              governance around cost, access, resource controls and
              environments.
            </p>
          </TabItem>
          <TabItem value="finops" label="FinOps Teams">
            <p>
              Backplane not only provides cost visibility across cloud
              platforms, it allows that data to be viewed at the Organisation
              scope, Platform, Product and even App level granularity.
              Furthermore, Budgets can be set at each of these scopes with an
              approval workflow engine to ensure that Product teams are
              accountable for their cloud spend against their approved budget.
            </p>
          </TabItem>
        </Tabs>
        <br />
        <h2>Use Cases</h2>
        Here are some scenarios where Backplane's Cloud Abstraction API can
        help:
        <Tabs>
          <TabItem
            value="building-idp"
            label="Building Enterprise IDP MVP"
            default
          >
            <p>
              When building your IDP MVP, speed is of the essense. Off-loading
              environment provisioning to Backplane Cloud Abstraction API
              simplifies integration by providing a single integration point.
              Also, it reduces the dependency upon subject matter expertise on
              the developers and platform engineers tasked with coding.
            </p>
          </TabItem>
          <TabItem value="multicloud-governance" label="Multi-cloud Governance">
            <p>
              Being able to retrieve Cost, Access and Policy data across
              multiple clouds and in a datashape that allows side-by-side
              analysis.
            </p>
          </TabItem>
          <TabItem value="business-process" label="Business Process">
            <p>
              Business processes such as Budget Approvals are handled through
              Backplane's Workflow Engine. By creating a Request, it is sent to
              the appropiate approval authority.
            </p>
          </TabItem>
        </Tabs>
      </div>

      <div className={styles.container}>
        <div>
          <Link
            className={`button button--secondary button--lg ${styles.gray}`}
            to="/docs/quick-start"
          >
            Try it out
          </Link>
        </div>
      </div>

      <div className={styles.container}>
        <h2>Get involved, Backplane Community </h2>
        <p>
          We are a team of cloud engineers passionate about cloud adoption,
          enablement and governance. Feel free to get involved; whether
          collaborating on code, bug-fixed, new ideas or implementing new
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
