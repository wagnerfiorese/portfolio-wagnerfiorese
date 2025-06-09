import ProjectCard from "../components/projectCard";
import habitImagem from "../assets/habit.webp";
import imbueShrine from "../assets/imbuing_Shrine.gif";

const Projects = () => {
  const projectList = [
    {
      title: "Habit",
      description: "App de rastreamento de hábitos feito com React, Firebase e animações com Framer Motion.",
      techs: ["React", "Tailwind", "Firebase"],
      link: "https://github.com/wagnerfiorese/habit",
      image: habitImagem,
    },
    {
      title: "Imbuements Calculator",
      description: "Ferramenta de cálculo de imbuements do jogo Tibia, feita com React.",
      techs: ["React"],
      link: "https://github.com/wagnerfiorese/imbuements-calculator",
      image: imbueShrine,
    },
    {
      title: "Imbuements Calculator",
      description: "Ferramenta de cálculo de imbuements do jogo Tibia, feita com React.",
      techs: ["React"],
      link: "https://github.com/wagnerfiorese/imbuements-calculator",
      image: imbueShrine,
    },
    {
      title: "Imbuements Calculator",
      description: "Ferramenta de cálculo de imbuements do jogo Tibia, feita com React.",
      techs: ["React"],
      link: "https://github.com/wagnerfiorese/imbuements-calculator",
      image: imbueShrine,
    },
        {
      title: "Imbuements Calculator",
      description: "Ferramenta de cálculo de imbuements do jogo Tibia, feita com React.",
      techs: ["React"],
      link: "https://github.com/wagnerfiorese/imbuements-calculator",
      image: imbueShrine,
    },
        {
      title: "Imbuements Calculator",
      description: "Ferramenta de cálculo de imbuements do jogo Tibia, feita com React.",
      techs: ["React"],
      link: "https://github.com/wagnerfiorese/imbuements-calculator",
      image: imbueShrine,
    },
        {
      title: "Imbuements Calculator",
      description: "Ferramenta de cálculo de imbuements do jogo Tibia, feita com React.",
      techs: ["React"],
      link: "https://github.com/wagnerfiorese/imbuements-calculator",
      image: imbueShrine,
    },
  ];

  return (
    <section id="projects" className="py-16 px-4 max-w-screen-xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Projetos</h2>
      <div className="overflow-x-auto">
        <div className="flex overflow-x-auto gap-4 py-4 px-2">
          {projectList.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
