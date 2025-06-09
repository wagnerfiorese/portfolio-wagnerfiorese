import { motion } from "framer-motion";

const ProjectCard = ({ title, description, techs, link, image }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="bg-zinc-800 rounded-xl shadow-md p-4 transition-all w-[300px] shrink-0 mx-2"
    >
      {image && (
        <div className="w-full h-24 overflow-hidden rounded-t-xl mb-4 flex justify-center">
          <img
            src={image}
            alt={title}
            className="max-w-[300px] max-h-[200px] object-cover rounded-md"
            style={{ borderRadius: "25px" }}
          />
        </div>
      )}

      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-gray-300 mb-4">{description}</p>

      <ul className="flex flex-wrap justify-center gap-3 mb-4 list-none">
        {techs.map((tech, index) => (
          <li
            key={index}
            className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-full min-w-[100px] text-center"
          >
            {tech}
          </li>
        ))}
      </ul>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-2 text-indigo-500 hover:underline"
      >
        Ver no GitHub →
      </a>
    </motion.div>
  );
};

export default ProjectCard;
