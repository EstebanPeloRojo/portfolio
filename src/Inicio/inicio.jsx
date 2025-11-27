import styles from "../Inicio/inicio.module.css";
import Animacion from "../animacion/Animacion.jsx";

const Inicio = () => {
  return (
    <section className={styles.inicio}>
      <article className={styles.dev}>
        <h1>Estudiante de Desarrollo de Software</h1>
        <p>
          Desarrollador web junior en PHP, Python y javascript, estudiante de
          la universidad del valle, poseo habilidades para desarrollar
          aplicativos web y conocimiento basico de Backend y frontend.
        </p>
      </article>

      <div className={styles.botones}>
        <h2>Esteban Montoya Muñoz</h2>
      </div>
      <Animacion />
    </section>
  );
};

export default Inicio;
