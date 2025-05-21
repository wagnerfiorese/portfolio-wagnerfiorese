import ThemeToggle from "./components/ThemeToggle";
import Hero from "./sections/Hero/";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import { useEffect } from "react";
import useDarkMode from "./hooks/useDarkMode";

function App() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-900 dark:bg-[#242424] dark:text-[rgba(255,255,255,0.87)] transition-colors duration-300">
      <header className="p-4 flex justify-end">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded border border-gray-400 bg-gray-200 dark:bg-gray-700 dark:text-white transition"
          aria-label="Toggle dark mode"
        >
          {darkMode ? "Modo Claro" : "Modo Escuro"}
        </button>
      </header>

      <main className="max-w-5xl mx-auto p-6">
        {<Hero /> }
        {<About />}
        {<Projects />}
        {<Contact />}
        <h1 className="text-4xl font-bold mb-6">Bem-vindo ao meu Portfólio</h1>
        <p className="mb-4">
          Aqui você encontra meus projetos pessoais e habilidades como desenvolvedor front-end.
        </p>
      </main>
    </div>
  );
}

export default App;