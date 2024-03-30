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
      </div>

      <div className={styles.container}>
        <h2>Cloud Hypervisor!</h2>
        <ThemedImage
          alt="Backplane themed image"
          sources={{
            light: "/img/projectbackplane-light.png",
            dark: "/img/projectbackplane-dark.png",
          }}
          // className="logo"
          className={styles.image}
        />
        <p>
          Introducing the multi-cloud environment provisioning, cost, access and
          policy API, aka Cloud Abstraction API. Simply create your Org,
          register your cloud platforms, and you’re ready to create Apps in
          Azure, AWS or GCP through a single command! Try out the Cloud
          Abstraction API today to see how it can power your cloud
          transformation journey.
        </p>
        <p>
          <h2>Core Features</h2>
          <div
            style={{
              display: "flex",
              width: "auto",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {FeatureList.map((feature, id) => (
              <div>
                <Feature
                  key={id}
                  title={feature.title}
                  description={feature.description}
                  Svg={feature.Svg}
                />
              </div>
            ))}
          </div>
        </p>
        {/* <h2>How it works</h2>
        The Backplane API sits in front of the cloud platforms and provides a
        logical data model of Org, Platform, Product and App. The App is linked
        to a Cloud Platform, and generic queries for Cost, Access, Policy and
        Environment provisioning can be issued to the Backplane API, and it will
        translate the request into the correct format for the underlying cloud
        platform.
        <br /> */}
        <br />
        <h2>Benefits</h2>
        <Tabs>
          <TabItem value="speed" label="Building IDP MVP" default>
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
        <h2>Who's it for ? </h2>
        <Tabs>
          <TabItem value="platform-engineers" label="Platform Engineers">
            <p>
              Building the MVP IDP for your organisation will require
              integration with a Cloud Provider. If you use multiple Cloud
              Providers then this task is significantly ardeous. With
              Backplane's Single Cloud Abstraction API for environment
              provisioning, you can get your MVP IDP up and running quickly!
            </p>
          </TabItem>
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
            Get Started
          </Link>
        </div>
      </div>

      <div className={styles.container}>
        <h2>Community </h2>
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
