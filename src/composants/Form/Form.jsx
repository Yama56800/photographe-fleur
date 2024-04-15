import fleur_rose from "../../images/fleur/aa.webp";
import fleur_blanche from "../../images/fleur/fleur_blanche.avif";
import fleur_jaune from "../../images/fleur/fleur_jaunett.webp";
import fleur_rouge from "../../images/fleur/fleur_rouge.jpg";

export default function Projets() {
  const projets = [
    { image: fleur_rose, description: "" },
    { image: fleur_jaune, description: "" },
    { image: fleur_blanche, description: "" },
    { image: fleur_rouge, description: "" },
  ];

  const onMouseDown = (e) => {
    const el = e.target;
    el.style.cursor = "grabbing";

    // Définir le déplacement initial
    let shiftX = e.clientX - el.getBoundingClientRect().left;
    let shiftY = e.clientY - el.getBoundingClientRect().top;

    // Fonction pour déplacer l'image
    const onMouseMove = (e) => {
      el.style.position = "absolute";
      el.style.zIndex = 1000; // S'assurer que l'élément est au-dessus des autres éléments

      // Calculer la nouvelle position de l'image
      el.style.left = e.pageX - shiftX + "px";
      el.style.top = e.pageY - shiftY + "px";
    };

    // Ajouter l'événement de mouvement
    document.addEventListener("mousemove", onMouseMove);

    // Supprimer l'événement de mouvement lorsque la souris est relâchée
    el.onmouseup = () => {
      document.removeEventListener("mousemove", onMouseMove);
      el.onmouseup = null;
      el.style.cursor = "grab";
    };
    el.onmouseleave = function () {
      document.removeEventListener("mousemove", onMouseMove);
      el.onmouseup = null;
      el.style.cursor = "grab"; // Remettre le curseur à son état initial
    };
  };

  // Assurez-vous de supprimer l'événement de mouvement si la souris sort de la fenêtre
  const onMouseMove = (e) => {
    const el = e.target; // Define 'el' variable

    el.style.position = "absolute";
    el.style.zIndex = 1000; // S'assurer que l'élément est au-dessus des autres éléments

    const shiftX = e.clientX - el.getBoundingClientRect().left; // Define 'shiftX' variable
    const shiftY = e.clientY - el.getBoundingClientRect().top; // Define 'shiftY' variable

    // Calculer la nouvelle position de l'image
    el.style.left = e.pageX - shiftX + "px";
    el.style.top = e.pageY - shiftY + "px";
  };

  const onMouseUp = () => {
    document.removeEventListener("mousemove", onMouseMove);
  };

  return (
    <div className="projet">
      <h2>PROJECTS</h2>
      <div className="projet-content">
        {projets.map((projet, index) => (
          <div
            key={index}
            className={`projet-${index % 2 === 0 ? "right" : "left"}`}
          >
            <img
              src={projet.image}
              alt={`projet ${index + 1}`}
              onMouseDown={onMouseDown}
              onMouseUp={onMouseUp}
              draggable="false" // On désactive le glisser-déposer natif
              style={{ cursor: "grab" }} // Style du curseur
            />
            <p>{projet.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
