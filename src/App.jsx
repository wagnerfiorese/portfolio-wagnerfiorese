import Hero from "./sections/Hero/";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="min-h-screen w-full bg-zinc-900 text-white transition-colors duration-300">
      <main className="max-w-5xl mx-auto p-6">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
