import Layout from "@theme/Layout";
import styles from "./index.module.css";
import Link from "@docusaurus/Link";

import lewis from "@site/docs/lewis-xl.png";
import dave from "@site/docs/davebrown.png";
import marek from "@site/docs/marek.png";
import riccardo from "@site/docs/riccardo.png";
import fernando from "@site/docs/fernando.png";
import tamas from "@site/docs/tamas.png";
import fatima from "@site/docs/fatima.png";
import manish from "@site/docs/manish.png";
import saurabh from "@site/docs/saurabh.png";

import logo from "@site/docs/backplane-logo.png";

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

// import BackplaneSvg from "./backplane-logo.svg";
import ThemedImage from "@theme/ThemedImage";

import clsx from "clsx";
import Heading from "@theme/Heading";
// import styles from "./styles.module.css";

const About = () => {
  return (
    <Layout>
      <div className={styles.container} style={{ marginTop: "20px" }}>
        <h2>Core Team</h2>
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ padding: "20px" }}>
            <div style={{ marginTop: "20px" }}>
              <img src={lewis} style={{ width: "100px" }} />
            </div>
            <div style={{ marginTop: "20px" }}>
              <strong>Lewis Sheridan</strong>
              <br />
              Founder @ Backplane
            </div>
          </div>

          <div style={{ padding: "20px" }}>
            <div style={{ marginTop: "20px" }}>
              <img src={dave} style={{ width: "100px" }} />
            </div>
            <div style={{ marginTop: "20px" }}>
              <strong>Dave Brown</strong>
              <br />
              Cloud Architect <br />@ Backlogger.io
            </div>
          </div>
        </div>
        <br />
        <br />
        <h2>Private Preview Group</h2>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ padding: "20px" }}>
            <div style={{ marginTop: "20px" }}>
              <img src={riccardo} style={{ width: "100px" }} />
            </div>
            <div style={{ marginTop: "20px" }}>
              <strong>Riccardo Pomato</strong>
              <br />
              Cloud Architect @ Microsoft
            </div>
          </div>
          <div style={{ padding: "20px" }}>
            <div style={{ marginTop: "20px" }}>
              <img src={fatima} style={{ width: "100px" }} />
            </div>
            <div style={{}}>
              <strong>Fatima Mookhtiar</strong>
              <br />
              Architecture Strategy
              <br /> @ Maersk
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ padding: "20px" }}>
            <div style={{ marginTop: "20px" }}>
              <img src={fernando} style={{ width: "100px" }} />
            </div>
            <div style={{}}>
              <strong>Fernando Dos Santos Serrano</strong>
              <br />
              Cloud Architect @ Cognizant
            </div>
          </div>
          <div style={{ padding: "20px" }}>
            <div style={{ marginTop: "20px" }}>
              <img src={marek} style={{ width: "100px" }} />
            </div>
            <div style={{ marginTop: "20px" }}>
              <strong>Marek Cielniaszek</strong>
              <br />
              Cloud Architect @ DNV
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ padding: "20px" }}>
            <div style={{ marginTop: "20px" }}>
              <img src={saurabh} style={{ width: "100px" }} />
            </div>
            <div style={{}}>
              <strong>Saurabh Mishra</strong>
              <br />
              Cloud Security
              <br /> @ Commonwealth Bank
            </div>
          </div>
          <div style={{ padding: "20px" }}>
            <div style={{ marginTop: "20px" }}>
              <img src={manish} style={{ width: "100px" }} />
            </div>
            <div style={{}}>
              <strong>Manish Agrahari</strong>
              <br />
              Cloud Security @ Maersk
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ padding: "20px" }}>
            <div style={{ marginTop: "20px" }}>
              <img src={tamas} style={{ width: "100px" }} />
            </div>
            <div style={{}}>
              <strong>Tamás Gémesi</strong>
              <br />
              FinOps Owner @ Natwest
            </div>
          </div>
          <div style={{ padding: "20px" }}>
            <div style={{ marginTop: "20px" }}>
              <img src={logo} style={{ width: "100px" }} />
            </div>
            <div style={{}}>
              <strong>Could this be you ? </strong>
              <br />
              Click below to get involved
            </div>
          </div>
        </div>

        <br />
        <Link
          className={`button button--secondary button--lg ${styles.yellow}`}
          to="/docs/quick-start"
        >
          Join Preview Team
        </Link>
      </div>
    </Layout>
  );
};

export default About;
