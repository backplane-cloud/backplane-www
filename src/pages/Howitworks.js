import Layout from "@theme/Layout";
import styles from "./index.module.css";
import Link from "@docusaurus/Link";
import diagram from "@site/docs/gsc-logo.png";
import referencearchitecture from "@site/docs/multicloud-diagram.png";
import irregular from "@site/docs/irregular.png";
import regular from "@site/docs/regular.png";

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

// import BackplaneSvg from "./backplane-logo.svg";
import ThemedImage from "@theme/ThemedImage";

import clsx from "clsx";
import Heading from "@theme/Heading";
// import styles from "./styles.module.css";

const Howitworks = () => {
  return (
    <Layout>
      <div className={styles.container} style={{ marginTop: "20px" }}>
        <h2>How it works ?</h2>
        <p>
          Platform engineers and developers are spending time integrating their
          internal developer portal by integrating with one or more cloud
          service providers. This gives rise to tight coupling, and the
          developers requiring familiarity with each cloud platform APIs.
        </p>
        <ThemedImage
          alt="Backplane themed image"
          sources={{
            light: "/img/withoutbackplane-light.png",
            dark: "/img/withoutbackplane-dark.png",
          }}
          style={{ width: "400px", margin: "20px 0" }}
        />
        <h2>Simplification through Abstraction</h2>
        <p>
          Backplane forms the governance plane and sits beneath the developer
          and integration plane. The abstraction API provides an interface that
          makes interfacing with the Cloud Service Providers simpler from an
          integration perspective, so upstream systems can consume governance
          data and create cloud environments simply and easily.
        </p>
        <ThemedImage
          alt="Backplane themed image"
          sources={{
            light: "/img/howbackplaneworks-light.png",
            dark: "/img/howbackplaneworks-dark.png",
          }}
          style={{ width: "400px", margin: "20px 0" }}
        />
        {/* <br />
        <h5>Reference Architecture Diagram</h5>
        <img src={referencearchitecture} />
        <br />
        <br /> */}
        <h2>The Data model</h2>
        <p>
          Your Organisation entity will contain Cloud Service Provider
          credentials with Read permissions in your Cloud Platform. The data
          model follows a hierarchy of: An{" "}
          <span className={styles.bluetext}>Organisation</span> can have many{" "}
          <span className={styles.bluetext}>Platforms</span>, Platforms can have
          many <span className={styles.bluetext}>Products</span> and Products
          can contain many <span className={styles.bluetext}>Apps</span>. Apps
          contain environments provisioned in an underlying cloud platform.
          Cost, Access and Resource control data (aka Policies) can then be
          viewed through the lens of the App, Product, Platform or Org.
        </p>
        <ThemedImage
          alt="Backplane themed image"
          sources={{
            light: "/img/datamodel-light.png",
            dark: "/img/datamodel-dark.png",
          }}
          // className="logo"
          style={{ padding: "20px", width: "400px" }}
        />
        <p>
          Backplane supports the importing of Apps and Products (see import
          instructions).
        </p>
        {/* <h2>Why an Abstraction API ?</h2>
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
        </p> */}
        <p>
          A multi-cloud landscape adds complexity with each cloud platform
          having their own specific way of handling Cost, Access, Resource
          controls and Environment provisioning. Consuming tools and/or systems
          will need to integrate with each Cloud Platform's API and process the
          data to transform it into a suitable format.
        </p>
        <br />
        <h2>MVP progress</h2>
        <p>
          The API Server supports Azure, GCP and AWS. The below matrix shows
          what is implemented as of 28 Mar 2024. The functionality resides in
          Backplane Library (@backplane-software/backplane-[cloud])
        </p>
        <p>
          <ThemedImage
            alt="Backplane themed image"
            sources={{
              light: "/img/mvpstatus-light.png",
              dark: "/img/mvpstatus-dark.png",
            }}
            // className="logo"
            // className={styles.image}
            style={{ width: "450px", margin: "20px 0" }}
          />
          {/* <br />
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
          <br /> */}
        </p>
      </div>
    </Layout>
  );
};

export default Howitworks;
