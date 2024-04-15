import React from "react";
export default function Competences() {
  return (
    <nav className="competences" id="competences">
      <ul className="tab-competences">
        <h2>Mes Compétences</h2>
        <li className="competences-item html">
          <p>
            <i class="fa-brands fa-html5"></i>HTML
          </p>
        </li>
        <li className="competences-item css">
          <p>
            <i class="fa-brands fa-css3-alt"></i>CSS
          </p>
        </li>
        <li className="competences-item responsive">
          <p>
            <i class="fa-light fa-laptop-mobile"></i>Responsive
          </p>
        </li>
        <li className="competences-item scss">
          <p>
            <i class="fa-brands fa-sass"></i>SCSS
          </p>
        </li>
        <li className="competences-item javascript">
          <p>
            <i class="fa-brands fa-js"></i>JAVASCRIPT
          </p>
        </li>
        <li className="competences-item react">
          <p>
            <i class="fa-brands fa-react"></i>REACT
          </p>
        </li>
        <li className="competences-item green">
          <p>
            <i class="fa-solid fa-tree-deciduous"></i>Green code
          </p>
        </li>
        <li className="competences-item seo">
          <p>
            <i class="fa-regular fa-user-magnifying-glass"></i>Référencement SEO
          </p>
        </li>
        <li className="competences-item redux">
          <p>
            <i class="fa-light fa-users-gear"></i>REDUX
          </p>
        </li>
      </ul>
    </nav>
  );
}
