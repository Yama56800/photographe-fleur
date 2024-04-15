// Assurez-vous que le chemin vers votre fichier SCSS est correct

const CharmUI = () => {
  // Fonction pour basculer le thème entre clair et sombre
  const toggleTheme = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <main className="header-main">
      <div className="relative flex flex-col h-[40vh] items-center justify-center bg-white dark:bg-black transition-bg">
        <div className="absolute inset-0 overflow-hidden">
          <div className="jumbo absolute -inset-[10px] opacity-50"></div>
        </div>

        <div className="mt-4">
          <button
            onClick={toggleTheme}
            className="px-3 py-1 border border-stone-200 rounded-full drop-shadow-sm text-sm text-stone-800 dark:text-white bg-white/40 dark:bg-black/40 backdrop-blur-lg hover:border-stone-300 transition-colors dark:border-stone-500 dark:hover:border-stone-400"
          >
            Toggle Theme
          </button>
        </div>
      </div>
    </main>
  );
};

export default CharmUI;
