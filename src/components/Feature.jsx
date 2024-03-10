import styles from "./feature.module.css";

const Feature = ({ title, description, id, Svg }) => {
  return (
    <>
      <div key={id} className={styles.featureCard}>
        <div>
          <Svg
            className={styles.featureSvg}
            style={{
              width: "35px",
              height: "35px",
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

export default Feature;
