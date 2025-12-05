import styles from "../Proyectos/proyectos.module.css";
import img1 from "../assets/InsercionVideo.png";
import img2 from "../assets/caso9.png"
import img3 from "../assets/cancionEmocional.png"
import img4 from "../assets/forest.png"
import img5 from "../assets/notion.png"
import img6 from "../assets/habilidades.png"
import play from "../assets/reproducir.png"
import html from "../assets/icons8-html-50.png";
import css from "../assets/icons8-css-50.png";
import php from "../assets/icons8-php-50.png";
import lvl from "../assets/icons8-laravel-50.png";

const Proyecto = () => {
  const tarjetas = [
    {
      image: [img1],
      name: "Mejores y peores lugares de la Univalle sede yumbo",
      description:
        "Este es el video de las primeras clases en el cual explicamos cuales eran nuestros lugares favoritos y cuales deberian mejorar en la sede.",
      url: "https://drive.google.com/file/d/1uaxbRMo46QEfeBdJviGtk9DZlwuKNCKT/view",
    },
    {
      image: [img2],
      name: "Acuerdo 009",
      description:
        "En este trabajo explicamos un poco el acuerdo 009 de la universidad y contabamos un caso hipotetico en el cual se puede aplicar este acuerdo.",
      url: "https://drive.google.com/file/d/1ZilTLG6Bt6WEFyu8dHjLkviHhtETuyhA/view?usp=drive_link",
    },
    {
      image: [img3],
      name: "Analisis Emocional",
      description:
        "En este trabajo se habla sobre el uso de canciones con tematicas sobre los sentimientos para tratar temas emocionales como el estrés o la ansiedad. Para este caso se toma como referencia una canción del genero urbano de nombre 'FANTASMA/AVC' de JHAYCO y Tainy.",
      url: "https://docs.google.com/document/d/17nnVry5lat-Hm1lu3dhjaIccJpRxvHOq/edit?usp=drive_link&ouid=106837990294392143404&rtpof=true&sd=true",
    },
    {
      image: [img4],
      name: "Manejo del Tiempo",
      description:
        "Durante esta actividad mis compañeros y mi persona hicimos una exposicion sobre una app de nombre 'Forest' para le manejo de distracciones.",
      url: "https://drive.google.com/file/d/1xQCMiPo2rSRPpE3CFBaI9P-l_rFAM90J/view?usp=drive_link",
    },
    {
      image: [img5],
      name: "Semana Ideal",
      description:
        "Esta actividad se trata tambien sobre la organizacion del tiempo y tareas a realizar en el dia a dia de la semana.",
      url: "https://drive.google.com/file/d/1xS-mIAI9yOs5NeihlQ4DAZl2pv6hiyM4/view?usp=drive_link",
    },
    {
      image: [img6],
      name: "Habilidades y Competencias",
      description:
        "Este trabajo de dos personas abarcamos el tema de las habilidades y competencias para tener en la vida general y profesional.",
      url: "https://drive.google.com/file/d/1_P_i-B1BUFVd0OyYAfxtvKf1a4xZpGNF/view?usp=drive_link",
    },
  ];
  return (
    <section className={styles.proyectos}>
      <h2>TRABAJOS</h2>
      <div className={styles.cards} >
        {tarjetas.map((card, index) => {
          return (
            <div key={index} className={styles.card}>
              <div className={styles.img1} >
                <img width="280px" src={card.image} alt="" />
              </div>
              <h3>{card.name}</h3>
              <p>{card.description}</p>
              
              <div className={styles.github}>
                <a href={card.url}>
                  <img src={play} alt="" />
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
