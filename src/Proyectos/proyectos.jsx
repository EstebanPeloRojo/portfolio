import styles from "../Proyectos/proyectos.module.css";
import img1 from "../assets/ips.png";
import github from "../assets/icons8-github-48.png";
import html from "../assets/icons8-html-50.png";
import css from "../assets/icons8-css-50.png";
import php from "../assets/icons8-php-50.png";
import lvl from "../assets/icons8-laravel-50.png";

const Proyecto = () => {
  const tarjetas = [
    {
      image: [img1],
      name: "Proyecto IPS",
      description:
        "Este proyecto que esta en etapa de desarrollo busca ser un sistema administrativo para una ips",
      techno: [html, css, php, lvl],
      url: "https://github.com/EstebanPeloRojo/Mini-IPS",
    },
  ];
  return (
    <section className={styles.proyectos}>
      <h2>PROYECTOS</h2>
      <div className={styles.cards}>
        {tarjetas.map((card, index) => {
          return (
            <div key={index} className={styles.card}>
              <div className={styles.img1}>
                <img width="280px" src={card.image} alt="" />
              </div>
              <h3>{card.name}</h3>
              <p>{card.description}</p>
              <div className={styles.techno}>
                <img width="40px" src={card.techno[0]} />
                <img width="40px" src={card.techno[1]} />
                <img width="40px" src={card.techno[2]} />
                <img width="40px" src={card.techno[3]} />
              </div>
              <div className={styles.github}>
                <a href={card.url}>
                  <img src={github} alt="" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Proyecto;
