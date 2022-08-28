import "./style.css";
import { dropDown, tabsAndMores, imageSlider} from "./uxLifri.js";
import joyo from "./joyo.jpg";
import osho25 from "./osho25.jpg";
import osho26 from "./osho26.jpg";
import osho27 from "./osho27.jpg";
import osho28 from "./osho28.jpg";
import osho29 from "./osho29.jpg";

const menuPrimero = {
	Name: "Menu",
  Home: "link1",
  Information: "link2",
  Contact: "link3",
  "About us": "link4"
};

const menuSegundo = {
	Name: "Rarísimo",
  "Corchi Polin": "leindk",
  "Chacul Manen": "leika",
  "Carpit Lonmon": "lonm"
};

dropDown("nav", "1", menuPrimero);

dropDown("nav", "1", menuSegundo);

tabsAndMores(
  "main",
  "tabsAndMoresContainer",
  "2",
  ["Selassie", "1"],
  { Name: "Haile I", Conjio: "Merdel", Buman: "Bemnepr" }
);

imageSlider("main", 400, joyo, osho25, osho26, osho27, osho28, osho29);