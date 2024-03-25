import Layout from "@theme/Layout";
import styles from "./index.module.css";
import Link from "@docusaurus/Link";
import diagram from "@site/docs/gsc-logo.png";
import referencearchitecture from "@site/docs/multicloud-diagram.png";
import Persona from "@site/src/components/Persona/Persona";

// import BackplaneSvg from "./backplane-logo.svg";
import ThemedImage from "@theme/ThemedImage";

import clsx from "clsx";
import Heading from "@theme/Heading";
// import styles from "./styles.module.css";

const Casestudy = () => {
  const CaseList = [
    {
      id: 1,
      role: "Chief Technology Officer",
      avatar: "cto",
      problem: "Slow Cloud Transformation",
      text: `"GSC\'s transformation efforts have stalled, partly owing to unchecked cloud spend but also due to no single organisational alignment across teams, resulting in a lack of consistency in the technology stack being deployed."`,
      // solution:
      //   "The Platform Engineering team can leverage Backplane’s Software Catalog to provide a full inventory of ALL line of business applications to represent both workloads in cloud and worklaods residing on premises. With a full view of the software landscape, they can be grouped and organised by business platforms and scored against cloud native transformation assessment which associates a value score of whether a cloud native transformation or migration to cloud will yield business value. Some workloads must reside in DC owing to industry regulation and/or data sovereignty laws, others can be migrated, whilst others retired and replaced. The software catalog allows transformation progress to be tracked by leadership.",
      solution:
        "Software Catalog provides a metadata store for all hosted applications whether in Cloud or On Premises. Transformation value scores can be associated with each workload as well as a prioritisation, budget request and status.",
    },
    {
      id: 2,
      role: "Enterprise Architect",
      avatar: "architect",
      problem: "Architectural Misalignment",
      text: '"The technology stack becoming increasingly fragmented as different product teams have chosen different technology stacks for their products."',
      solution:
        "Different Technology stacks and misalignment to reference architecture - Policies across the cloudplatforms can be aligned and viewed side-by-side so there is clearer visibility of compliance vs. non-compliance or architectural-drift.  Those workloads that have drifted can either request for policy exemption to controls or have a plan of action to re-architect inline with the reference architecture guidance for the enterprise.",
    },
    {
      id: 3,
      role: "Platform Engineer",
      avatar: "platformengineer",
      problem: "Multi-cloud Governance",
      text: "Owing to expansion plans, GSC have acquired two companies operating with a cloud platform that differs from GSC's primary cloud platform of Azure. This has introduced signifcant pressure on the existing cloud",
      solution:
        "Backplane is multi cloud platform aware and able to retrieve Cloud Cost, Access, Resource control and Environment data from all major public cloud providers. This can be consumed as multi-cloud governance-as-a-service to downstream systems or alternatively, Backplane’s software catalog surfaces cloud cost, access, policy and environments with Product-level, platform and org-level granularity. Providing a true 360-degree view of the organisations cloud governance landscape.",
    },
    {
      id: 4,
      role: "Cloud Governance",
      avatar: "governance",
      problem: "Soaring Cloud Cost",
      text: "Leadership have expressed significant concern with an explosion of cloud spend and lack of budget controls. Emergency cost controls have been product in place and have all but halted transformation efforts.",
      solution:
        "Backplane allows for a spend budget to be set at the organisation level, and Platform owners must explicitly request budget for their platforms. In turn, Product teams will request budget from the Platform for their Product. Once approved, the Product can delivery their cloud-based workload and the Product Owner will have visibility of cloud cost at the Product-level and be notified of its performance to budget. Any products that go over budget must either account for their under-budgeting or request additional budget from the Platform Owner. If the Platform does not have sufficient budget, they can request additional budget from the Organisation owner. This cost accounting embeds the practice of FinOps in the Platform and Product operating model.",
    },
  ];

  return (
    <Layout>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>Example Case Study</h1>
        <img src={diagram} style={{ width: "100px", marginTop: "20px" }} />
      </div>
      <div className={styles.container}>
        <h2>Global Shipping Co</h2>
        <br />

        <h5>Background</h5>
        <p>
          GSC is a fictional global logistics company looking to{" "}
          <b>
            migrate and transform their on-premises workloads from their
            datacenters to Cloud
          </b>{" "}
          in order to gain better value from their technology investments as
          well as benefits of cloud such as elasticity, codifying infrastructure
          provisioning (IaC) and consumption-based pricing.
        </p>
        <p>
          The Chief Technology Officer has outlined a multi-year digital
          transformation strategy with the board and instructed her leadership
          team to implement a cloud-first strategy. A Cloud Center of Excellence
          has been formed to help drive the strategy and deliver a world-class
          cloud engineering culture.
        </p>

        <p>
          Let's take a look at some of the issues being faced through the lens
          of the customer and how Backplane's features help address the
          problems.
        </p>

        <p>
          {CaseList.map((caseitem, id) => (
            <Persona
              id={id}
              role={caseitem.role}
              avatar={caseitem.avatar}
              problem={caseitem.problem}
              text={caseitem.text}
              solution={caseitem.solution}
            />
          ))}
        </p>
      </div>
    </Layout>
  );
};

export default Casestudy;
