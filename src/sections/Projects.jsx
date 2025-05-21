const projects = [
  {
    title: "Habit",
    description: "App para monitoramento de hábitos com React.",
    image: "https://via.placeholder.com/300x180?text=Habit",
    link: "https://github.com/seu-usuario/habit",
  },
  {
    title: "ToDo List",
    description: "Lista de tarefas com salvamento local.",
    image: "https://via.placeholder.com/300x180?text=ToDo+List",
    link: "https://github.com/seu-usuario/todolist",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-400">Projetos</h2>
      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-cyan-400 hover:underline"
              >
                Ver no GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
