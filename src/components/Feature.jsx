import styles from "./feature.module.css";
import oscaa from "@site/src/components/oscaa.png";

const Feature = ({ title, svg, description }) => {
  return (
    <>
      <div className={styles.featurecard}>
        <div>
          d{oscaa}d dd
          <img src={oscaa} />
          <h1>{title}</h1>
          <p>{description}</p>ddd
        </div>
      </div>
    </>
  );
};

export default Feature;
