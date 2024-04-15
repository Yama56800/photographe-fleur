import { useRef } from "react";
import lion from "../../images/lion.jpg";
const items = [
  {
    id: 1,
    title: "Lossless Youths",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    imageUrl: lion,
  },
  {
    id: 2,
    title: "Estrange Bond",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    imageUrl: "https://i.redd.it/tc0aqpv92pn21.jpg",
  },
  {
    id: 3,
    title: "The Gate Keeper",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    imageUrl: "https://wharferj.files.wordpress.com/2015/11/bio_north.jpg",
  },
  {
    id: 4,
    title: "Last Trace Of Us",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    imageUrl: "https://images7.alphacoders.com/878/878663.jpg",
  },
  {
    id: 5,
    title: "Urban Decay",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    imageUrl:
      "https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg",
  },
  {
    id: 6,
    title: "The Migration",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    imageUrl: "https://da.se/app/uploads/2015/09/simon-december1994.jpg",
  },
];

const Slider = () => {
  const sliderRef = useRef();

  const handleNavigation = (direction) => {
    const slider = sliderRef.current;
    if (direction === "next") {
      slider.appendChild(slider.firstChild);
    } else {
      slider.insertBefore(slider.lastChild, slider.firstChild);
    }
  };

  return (
    <div className="bodi">
      <main>
        <ul className="slider" ref={sliderRef}>
          {items.map((item) => (
            <li
              className="item"
              key={item.id}
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            >
              <div className="content">
                <h2 className="title">{item.title}</h2>
                <p className="description">{item.description}</p>
                <button>Read More</button>
              </div>
            </li>
          ))}
        </ul>
        <nav className="nav">
          <ion-icon
            className="btn prev"
            name="arrow-back-outline"
            onClick={() => handleNavigation("prev")}
          ></ion-icon>
          <ion-icon
            className="btn next"
            name="arrow-forward-outline"
            onClick={() => handleNavigation("next")}
          ></ion-icon>
        </nav>
      </main>
    </div>
  );
};

export default Slider;
