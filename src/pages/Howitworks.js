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
      </div>
    </Layout>
  );
};

export default Howitworks;
