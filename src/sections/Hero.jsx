import MotionWrapper from "../components/MotionWrapper";

const Hero = () => {
  return (
    <section className="text-center py-20 px-4 bg-zinc-900 text-white min-h-screen flex flex-col items-center justify-center">
      <MotionWrapper>
        <h1 className="text-3xl md:text-5xl font-bold text-cyan-400 drop-shadow-md">
          Olá, eu sou o Wagner
        </h1>
      </MotionWrapper>

      <MotionWrapper delay={0.2}>
        <p className="mt-4 text-base md:text-lg text-zinc-300 max-w-xl leading-relaxed">
          Desenvolvedor Front-End apaixonado por criar interfaces incríveis.
        </p>
      </MotionWrapper>

      <MotionWrapper delay={0.4}>
        <a
          href="#projects"
          className="inline-block mt-6 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full shadow-md transition-colors duration-300"
        >
          Ver Projetos
        </a>
      </MotionWrapper>
    </section>
  );
};

export default Hero;
