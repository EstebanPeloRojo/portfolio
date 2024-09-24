import styles from "../Menu/menu.module.css";
import { Link } from "react-router-dom";
import Redes from "./redes.jsx";
import github from "../assets/icons8-github-48.png";
import E from "../assets/icons8-hiragana-e-50.png";

const Menu = () => {
  return (
    <header className={styles.header}>
      <span className={styles.span}>
        <img src={E} alt="" />
      </span>
      <nav className={styles.nav}>
        <Link to="/Portafolio-React">
          <span>I</span>nicio
        </Link>
        <Link to="/Portafolio-React/Proyectos">
          <span>P</span>royectos
        </Link>
        <Link to="/Portafolio-React/SobreMi">
          <span>S</span>obre Mi
        </Link>
      </nav>
      <nav className={styles.navMobile}>
        <Link>
          <a href="https://github.com/EstebanPeloRojo">
            <img src={github} alt="" />
          </a>
        </Link>
      </nav>

      <Redes />
    </header>
  );
};

export default Menu;
