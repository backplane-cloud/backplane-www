import styles from "./persona.module.css";
import face from "./face.png";

const Persona = () => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.icon}>
          <img src={face} />
        </div>
        <div className={styles.cardbody}>
          <div>
            <h3>Cloud Platform Lead</h3>
          </div>
          <div className={styles.text}>
            Transitioning workloads to cloud and transforming ways of working
            are critical success factors for our Cloud Native strategy. The
            Backplane platform provides a robust governance, development and
            transformation tracking platform.
          </div>
        </div>
      </div>
    </>
  );
};

export default Persona;
