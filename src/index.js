import "./style.css";
import { dropDown, tabsAndMores } from "./uxLifri.js";

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
