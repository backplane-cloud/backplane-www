import styles from "./persona.module.css";
import cto from "./cto.png";
import architect from "./architect.png";
import platformengineer from "./platform-engineer.png";
import governance from "./governance.png";

const Persona = ({ id, role, avatar, problem, text, solution }) => {
  let image = {
    cto,
    architect,
    platformengineer,
    governance,
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardbody}>
          <img src={image[avatar]} />
          <div className={styles.title}>{role}</div>

          <div className={styles.problem}>{problem}</div>

          <div>{text}</div>

          <div className={styles.text}>
            <span className={styles.solution}>Backplane feature</span>
          </div>
          <div>{solution}</div>
        </div>
      </div>{" "}
      <hr />
    </>
  );
};

export default Persona;
