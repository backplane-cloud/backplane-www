import Layout from "@theme/Layout";
import styles from "./index.module.css";
import Link from "@docusaurus/Link";
import diagram from "@site/docs/gsc-logo.png";
import Feature from "@site/src/components/Feature";

// import BackplaneSvg from "./backplane-logo.svg";
import ThemedImage from "@theme/ThemedImage";

import clsx from "clsx";
import Heading from "@theme/Heading";
// import styles from "./styles.module.css";

const Casestudy = () => {
  const FeatureList = [
    {
      title: "Software Catalog",
      Svg: require("@site/static/img/catalog.svg").default,
      description: (
        <>
          <b>Slow Transformation</b> - The Platform Engineering team can
          leverage Backplane’s Software Catalog to provide a full inventory of
          ALL line of business applications to represent both workloads in cloud
          and worklaods residing on premises. With a full view of the software
          landscape, they can be grouped and organised by business platforms and
          scored against cloud native transformation assessment which associates
          a value score of whether a cloud native transformation or migration to
          cloud will yield business value. Some workloads must reside in DC
          owing to industry regulation and/or data sovereignty laws, others can
          be migrated, whilst others retired and replaced. The software catalog
          allows transformation progress to be tracked by leadership.
        </>
      ),
    },
    {
      title: "Cost Budget Controls",
      Svg: require("@site/static/img/budget.svg").default,
      description: (
        <>
          <b>Soaring Cloud Costs</b> - Backplane allows for a spend budget to be
          set at the organisation level, and Platform owners must explicitly
          request budget for their platforms. In turn, Product teams will
          request budget from the Platform for their Product. Once approved, the
          Product can delivery their cloud-based workload and the Product Owner
          will have visibility of cloud cost at the Product-level and be
          notified of its performance to budget. Any products that go over
          budget must either account for their under-budgeting or request
          additional budget from the Platform Owner. If the Platform does not
          have sufficient budget, they can request additional budget from the
          Organisation owner. This cost accounting embeds the practice of FinOps
          in the Platform and Product operating model.
        </>
      ),
    },
    {
      title: "Policy Visibility",
      Svg: require("@site/static/img/policy.svg").default,
      description: (
        <>
          <b>Architectural Misalignment</b> - Different Technology stacks and
          misalignment to reference architecture - Policies across the cloud
          platforms can be aligned and viewed side-by-side so there is clearer
          visibility of compliance vs. non-compliance or architectural-drift.
          Those workloads that have drifted can either request for policy
          exemption to controls or have a plan of action to re-architect inline
          with the reference architecture guidance for the enterprise.
        </>
      ),
    },
    {
      title: "Abstraction API",
      Svg: require("@site/static/img/logo.svg").default,
      description: (
        <>
          <b>Multi-cloud Governance</b> - Backplane is multi cloud platform
          aware and able to retrieve Cloud Cost, Access, Resource control and
          Environment data from all major public cloud providers. This can be
          consumed as multi-cloud governance-as-a-service to downstream systems
          or alternatively, Backplane’s software catalog surfaces cloud cost,
          access, policy and environments with Product-level, platform and
          org-level granularity. Providing a true 360-degree view of the
          organisations cloud governance landscape.
        </>
      ),
    },
  ];

  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <img src={diagram} style={{ width: "100px", marginTop: "50px" }} />
      </div>
      <div className={styles.container}>
        <b>Global Shipping Co*</b>
        <br />
        <i>(*a fictionalised company to illustrate Backplane's features)</i>
        <br />
        <br />
        <h4>Background</h4>
        <p>
          GSC is a world renowned logistics company looking to migrate and
          transform their on-premises workloads from their datacenters to Cloud
          in order to gain better value from their technology investments as
          well as benefits of cloud such as elasticity, codifying infrastructure
          provisioning (IaC) and consumption-based pricing.
        </p>
        <p>
          As well as adopting cloud, they are also transitioning away from
          waterfall-based project management methods towards Agile ways of
          working to align with the benefits of incremental delivery and
          increase deployment velocity to maintain a competitive advantage
          against their competitors. The Chief Technology Officer has outlined a
          multi-year digital transformation strategy with the board and
          instructed her leadership team to implement a cloud-first strategy. A
          Cloud Center of Excellence has been established to help deliver a
          world-class cloud engineering culture to enable their strategy.
        </p>

        <p>
          <br /> <h4>Problems</h4>
          <br />
          <ul style={{ textAlign: "left" }}>
            <li>
              <b>Slow Transformation</b> - Their transformation efforts have
              stalled, partly owing to unchecked cloud spend but also due to no
              single organisational alignment across teams, resulting in a lack
              of consistency in the technology stack being deployed.{" "}
            </li>
            <br />
            <li>
              <b>Architectural Misalignment</b> - The technology stack becoming
              increasingly fragmented as different product teams have chosen
              different technology stacks for their products.{" "}
            </li>
            <br />
            <li>
              <b>Multiple Clouds to Govern, Manage and Operate</b> - Owing to
              expansion plans, GSC have acquired two companies operating with a
              cloud platform that differs from GSC's primary cloud platform of
              Azure. This has introduced signifcant pressure on the existing
              cloud engineering teams to expand their subject matter expertise
              to these new cloud platforms. They need to be able to adopt,
              enable and govern these platforms quickly in order not to impact
              integrating the businesses.
            </li>
            <br />
            <li>
              <b>Soaring Cloud Cost</b> - Leadership have expressed significant
              concern with an explosion of cloud spend and lack of budget
              controls. Emergency cost controls have been product in place and
              have all but halted transformation efforts.
            </li>
          </ul>
        </p>

        <p>
          Backplane’s Cloud Abstraction API has features that can tackle each of
          these issues.
        </p>

        <br />
        <h4>Backplane's Solution</h4>
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
    </Layout>
  );
};

export default Casestudy;
