import Link from "@docusaurus/Link";
import clsx from "clsx";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./hero.module.css";
import hero from "/static/img/hero.png";
import Heading from "@theme/Heading";

const Hero = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <img src={hero} width="200px" />
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/quick-start"
          >
            Get Started
          </Link>

          <Link
            className="button button--secondary button--lg"
            style={{ marginLeft: "10px" }}
            to="/docs/quick-start"
          >
            Try Demo
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Hero;
