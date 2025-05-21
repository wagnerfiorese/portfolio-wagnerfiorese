import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import MotionWrapper from "../components/MotionWrapper";

const About = () => {
  return (
    <section className="py-20 px-4 bg-gray-800 text-white text-center">
      <MotionWrapper>
        <h2 className="text-3xl font-bold mb-6 text-cyan-400">Sobre mim</h2>
      </MotionWrapper>
      <p className="max-w-2xl mx-auto text-gray-300 mb-10">
        Sou um desenvolvedor front-end júnior com experiência em criar aplicações modernas com React, JavaScript, HTML5 e CSS3. Gosto de transformar ideias em experiências visuais funcionais.
      </p>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center text-4xl text-cyan-400">
      <FaHtml5 title="HTML5" />
      <FaCss3Alt title="CSS3" />
      <FaJs title="JavaScript" />
      <FaReact title="React" />
    </div>
    </section>
  );
};

export default About;
