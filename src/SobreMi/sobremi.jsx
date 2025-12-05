import styles from "../SobreMi/sobremi.module.css";
import perfil from "../assets/perfil.jpeg";
const SobreMi = () => {
  return (
    <section className={styles.SobreMi}>
      <article className={styles.mi}>
        <div className={styles.img}>
          <img src={perfil} alt="miFoto" />
        </div>
        <p>
          Hola, mi nombre es Esteban Montoya Muñoz, actualmente soy estudiante de la universidad del valle
          pero tambien fui aprendiz 
          del Servicio Nacional de Aprendizaje o tambien conocido como SENA, me
          encuentro haciendo una formacion tecnologica para la carrera de
          desarrollador de software, soy una persona comunicadora que siempre
          busca simplificar mi comunicacion para que la gente siempre pueda
          entender lo que expreso, cuento con titulo de bachiller que conseguí
          en la Institucion Educativa Hernando Navia Varon
        </p>
      </article>

      <div className={styles.edu}>
        <h2>Educación</h2>
        <div>
          <h3>I.E.T.C Hernando Navia Varon</h3>
          <span>Bachiller</span>
          <h3>SENA</h3>
          <span>Tecnico en Programacion de Software</span>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
