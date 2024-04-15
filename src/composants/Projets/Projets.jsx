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
    // Prévenir le comportement de drag natif
    e.preventDefault();

    const el = e.target;

    // Coordonnées initiales de la souris par rapport au document
    let startX = e.clientX;
    let startY = e.clientY;

    // Fonction pour calculer le déplacement et appliquer le transform
    function onMouseMove(e) {
      // Calculer le déplacement par rapport à la position initiale de la souris
      let moveX = e.clientX - startX;
      let moveY = e.clientY - startY;

      // Appliquer la translation à l'élément
      el.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }

    // Ajouter l'écouteur d'événements pour le mouvement de la souris
    document.addEventListener("mousemove", onMouseMove);

    // Supprimer les écouteurs d'événements lorsque le bouton de la souris est relâché
    document.addEventListener("mouseup", function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    });
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
              draggable="false"
              style={{ cursor: "grab", userSelect: "none" }}
            />
            <p>{projet.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
