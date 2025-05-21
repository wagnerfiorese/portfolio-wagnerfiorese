import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded transition-colors"
    >
      {darkMode ? "☀️ Claro" : "🌙 Escuro"}
    </button>
  );
}
