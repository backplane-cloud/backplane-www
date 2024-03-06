import Layout from "@theme/Layout";
import styles from "./Roadmap.module.css";
import Link from "@docusaurus/Link";
import diagram from "@site/docs/backplane-intro.png";

// import BackplaneSvg from "./backplane-logo.svg";
import ThemedImage from "@theme/ThemedImage";

import clsx from "clsx";
import Heading from "@theme/Heading";
// import styles from "./styles.module.css";

const ShowcaseFeature = ({ title, description, id, Svg }) => {
  return (
    <>
      <div key={id} className={styles.featureCard}>
        <div>
          <Svg
            className={styles.featureSvg}
            style={{
              width: "50px",
              height: "50px",
              padding: "0px",
              // background: "blue",
              // color: "#2a7fff",
            }}
          />
        </div>

        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </>
  );
};
const EnterpriseFeature = ({ title, description, id }) => {
  return (
    <>
      <div key={id} className={styles.featureCardEnterprise}>
        <div className={styles.titleEnterprise}>{title}</div>
        <div className={styles.descriptionEnterprise}>{description}</div>
      </div>
    </>
  );
};

const Roadmap = () => {
  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <ThemedImage
          alt="Backplane themed image"
          sources={{
            light: "/img/backplane-logo-blue.svg",
            dark: "/img/backplane-logo-blue.svg",
          }}
          className="logo"
        />
      </div>
      <div className={styles.container}>
        <div className={styles.timeline}>
          <div className={styles.outer}>
            <div className={styles.card}>
              <div className={styles.info}>
                <h3 className={styles.title}>Next</h3>
                <h4>Entering Seed Funding Rounds with VCs</h4>
                <p>
                  Seeking Seed Capital to developed Backplane.Cloud as a
                  hosted-SaaS offering as well as extensions aimed at
                  Enterprises.
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.info}>
                <h3 className={styles.title}>March 24</h3>
                <h4>Private Previews </h4>
                <p>
                  Testing and validation of scenarios at large enterprises
                  through priviate preview team.
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.info}>
                <h3 className={styles.title}>June - Nov </h3>
                <h4>Developed MVP </h4>
                <p>
                  API and CLI developed in NodeJS to demonstrate proof points of
                  multi cloud environment provisioning and cost, access and
                  policy data retrieval.
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.info}>
                <h3 className={styles.title}>May 2023</h3>
                <h4>Joined Microsoft for Startups </h4>
                <p>
                  The initial concept and idea to create a cloud abstraction API
                  to simplify multi cloud governance and development of IDPs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Roadmap;
