import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Environment Provisioning",
    Svg: require("@site/static/img/env.svg").default,
    description: (
      <>
        Backplane was designed from the ground up make cloud integration as easy
        as possible.
      </>
    ),
  },
  {
    title: "Software Catalog",
    Svg: require("@site/static/img/catalog.svg").default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: "CLI & SDK",
    Svg: require("@site/static/img/cli.svg").default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: "Cloud Controls",
    Svg: require("@site/static/img/controls.svg").default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: "Access Management",
    Svg: require("@site/static/img/access.svg").default,
    description: (
      <>
        The security posture of your Cloud depends upon good access governance.
        Knowing who has access to what across Cloud Platforms is crucial for
        enterprise-scale.
      </>
    ),
  },
  {
    title: "Cloud Economics",
    Svg: require("@site/static/img/finance.svg").default,
    description: (
      <>
        The Backplane CLI allows for custom automation orchestration and with
        Open API SDK for popular languages, integration has never been easier.
      </>
    ),
  },
  {
    title: "Service Integration",
    Svg: require("@site/static/img/integration.svg").default,
    description: (
      <>
        The Backplane CLI allows for custom automation orchestration and with
        Open API SDK for popular languages, integration has never been easier.
      </>
    ),
  },
  {
    title: "Workflow Engine",
    Svg: require("@site/static/img/workflow.svg").default,
    description: (
      <>
        The Backplane CLI allows for custom automation orchestration and with
        Open API SDK for popular languages, integration has never been easier.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
