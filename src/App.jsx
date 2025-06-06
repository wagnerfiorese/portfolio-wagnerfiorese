import ThemeToggle from "./components/ThemeToggle";
import Hero from "./sections/Hero/";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import useDarkMode from "./hooks/useDarkMode";

function App() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-900 dark:bg-[#0e0e10] dark:text-[rgba(255,255,255,0.87)] transition-colors duration-300 font-sans">
      <header className="fixed top-0 left-0 w-full bg-white/80 dark:bg-[#242424]/80 backdrop-blur-md shadow-md z-50 p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Meu Portfólio</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded border border-gray-400 bg-gray-200 dark:bg-gray-700 dark:text-white transition"
          aria-label="Toggle dark mode"
        >
          {darkMode ? "Modo Claro" : "Modo Escuro"}
        </button>
      </header>
      <main className="max-w-5xl mx-auto pt-24 p-6 space-y-24">
        {<Hero /> }
        {<About />}
        {<Projects />}
        {<Contact />}
      </main>
      <footer className="text-center text-sm text-gray-500 dark:text-gray-400 py-6">
        Desenvolvido por wagner-fiorese.
      </footer>
    </div>
  );
}

export default App;
