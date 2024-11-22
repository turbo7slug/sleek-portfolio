import styles from './ProjectsStyles.module.css';
import pharmatrackai from '../../assets/pharmatrackai.png';
import freshBurger from '../../assets/mesaverde.png';
import ecommerce from '../../assets/ecommerce.png';
import fitLift from '../../assets/prompt-hub.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={pharmatrackai}
          link="https://github.com/turbo7slug/PharmaTrackAI"
          h3="PharmaTrackAI"
          p=" inventory management app"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/turbo7slug/MesaVerde-RealEstate"
          h3="MesaVerde"
          p="Real Estate App"
        />
        <ProjectCard
          src={ecommerce}
          link="https://github.com/turbo7slug/Ecommerce"
          h3="E-Kart"
          p="Ecommerce App"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/turbo7slug/prompt-hub"
          h3="Prompt Hub"
          p="Share AI prompts"
        />
      </div>
    </section>
  );
}

export default Projects;
