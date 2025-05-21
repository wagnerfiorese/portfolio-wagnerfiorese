import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-gray-800 text-white text-center">
      <h2 className="text-3xl font-bold mb-6 text-cyan-400">Contato</h2>
      <p className="text-gray-300 mb-8">Vamos conversar! Me encontre nas redes:</p>
      <div className="flex flex-wrap justify-center gap-6 text-3xl text-cyan-400">
        <a href="https://github.com/wagnerfiorese" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/wagner-fiorese" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:wagner.fiorese@gmail.com">
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
};

export default Contact;
