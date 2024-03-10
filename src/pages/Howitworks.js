import Layout from "@theme/Layout";
import styles from "./index.module.css";
import Link from "@docusaurus/Link";
import diagram from "@site/docs/gsc-logo.png";
import referencearchitecture from "@site/docs/multicloud-diagram.png";
import irregular from "@site/docs/irregular.png";

// import BackplaneSvg from "./backplane-logo.svg";
import ThemedImage from "@theme/ThemedImage";

import clsx from "clsx";
import Heading from "@theme/Heading";
// import styles from "./styles.module.css";

const Howitworks = () => {
  return (
    <Layout>
      <div className={styles.container} style={{ marginTop: "50px" }}>
        <h2>How Backplane works</h2>

        <p>
          Backplane forms the governance plane and sits beneath the developer
          and integration plane. The abstraction API provides an interface that
          makes interfacing with the Cloud Service Providers simpler from an
          integration perspective, so upstream systems can consume governance
          data and create cloud environments simply and easily.
        </p>
        <br />
        <h5>Reference Architecture Diagram</h5>
        <img src={referencearchitecture} />
        <br />
        <br />
        <h2>Why an Abstraction API ?</h2>
        <p style={{ textAlign: "justify" }}>
          As enterprises journey towards cloud-native architectures, they are
          increasingly finding themselves with a multi-cloud environment they
          need to govern. Below are some examples of why enterprises are
          adopting multi-cloud:
        </p>

        <p style={{ textAlign: "left" }}>
          <p>
            <h5>Feature Availability</h5>
            An organisation may wish to use a certain Cloud Platform for their
            differentiating features from their current Cloud Platform. For
            example, Oracle may provide more attractive licensing for database
            workloads running on IaaS.
          </p>
          <p>
            <h5>Avoiding vendor Lock-in</h5>
            The need to de-risk dependency upon a single Cloud Platform and
            avoid vendor lock-in. Vendor lock-in can adversely affect
            contractual and commercial negotiations upon renewal as well as
            constraining technical capabilities and services.
          </p>

          <p>
            <h5>Mergers & Acquisitions</h5>
            Through business activities of mergers and acquisitions - an
            acquired business may have workloads in Ali Baba or Oracle. This
            presents significant challenges to Enterprise Architects and Cloud
            Governance teams, since each cloud platform will have its own
            governance implementation pertaining to cost, access, resource
            controls and environment creation. This leads to complexity scaling
            governance and also reasoning about governance concerns across
            multiple cloud platforms.
          </p>
        </p>

        <p>
          A multi-cloud landscape adds complexity with each cloud platform
          having their own specific way of handling Cost, Access, Resource
          controls and Environment provisioning. Consuming tools and/or systems
          will need to integrate with each Cloud Platform's API and process the
          data to transform it into a suitable format.
        </p>

        <p>
          <br />
          <h4>Multi-Cloud Governance today</h4>
          <img src={irregular} style={{ padding: "20px", width: "400px" }} />
          <h2>Problems</h2>
          <ul style={{ textAlign: "left" }}>
            <li>
              <b>Complexity</b> - Irregular data-shape which pushes data
              transformation processing logic to consumers
            </li>
            <li>
              <b>Tight Coupling</b> - making integration with cloud providers’
              API’s more brittle.
            </li>
            <li>
              <b>Increased Effort</b> - Multi integration points adds complexity
              and effort.
            </li>
          </ul>
          <br />
        </p>
        <br />
      </div>
    </Layout>
  );
};

export default Howitworks;
