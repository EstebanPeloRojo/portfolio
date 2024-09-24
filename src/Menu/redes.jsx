import styles from "../Menu/redes.module.css";
import github from "../assets/icons8-github-48.png";

const Redes = () => {
  return (
    <div className={styles.redes}>
      <a href="https://github.com/EstebanPeloRojo">
        <img src={github} alt="" />
      </a>
    </div>
  );
};

export default Redes;
