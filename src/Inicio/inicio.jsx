import styles from "../Inicio/inicio.module.css";
import Animacion from "../animacion/Animacion.jsx";

const Inicio = () => {
  return (
    <section className={styles.inicio}>
      <article className={styles.dev}>
        <h1>Desarrollador Junior</h1>
        <p>
          Desarrollador web junior en PHP, Python y javascript, aprendiz del Servicio
          Nacional de Aprendizaje SENA, poseo habilidades para desarrollar
          aplicativos web y conocimiento basico de Backend y frontend.
        </p>
      </article>

      <div className={styles.botones}>
        <h2>Esteban Montoya Muñoz</h2>
        <div>
          <a href="">Gmail</a>
          <a href="">Hoja de vida</a>
        </div>
      </div>
      <Animacion />
    </section>
  );
};

export default Inicio;
