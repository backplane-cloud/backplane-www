import Layout from "@theme/Layout";
import styles from "./index.module.css";
import Link from "@docusaurus/Link";
import Feature from "@site/src/components/Feature";

const Features = () => {
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
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Features at-a-glance</h2>
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
    </Layout>
  );
};

export default Features;
