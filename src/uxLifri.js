function dropDown(
  parentsClass,
  size,
  objMenu
) {
  function revealMenu(event) {
    if (event.target.children[0].style.height === "0px") {
      event.target.childNodes[0].data = `\u{25B5}  ${objMenu["Name"]}`;
      event.target.children[0].style.height = `${event.target.children[0].scrollHeight}px`;
    } else if (event.target.children[0].style.height !== "0px") {
      event.target.childNodes[0].data = `\u{25BF}  ${objMenu["Name"]}`;
      event.target.children[0].style.height = "0px";
    }
  }

  const parent = document.getElementsByClassName(parentsClass)[0];
  parent.style.height = `${2.2 * size}rem`;
  const menuContainer = document.createElement("div");
	menuContainer.addEventListener("click", revealMenu);
	menuContainer.style.display = "inline-flex";
	menuContainer.style.flexDirection = "column";
	menuContainer.style.alignItems = "center";
  menuContainer.style.fontSize = `${size}rem`;
  menuContainer.style.margin = `${size / 2}rem`;
  menuContainer.style.color = "white";
  menuContainer.style.cursor = "pointer";
  menuContainer.textContent = `\u{25BF}  ${objMenu["Name"]}`;

  const items = document.createElement("div");
  items.style.display = "flex";
  items.style.flexDirection = "column";
  items.style.overflow = "hidden";
  items.style.height = "0px";
  items.style.transition = "height 1s";

  for (const item of Object.keys(objMenu)) {
		if (item !== "Name") {
		const itemA = document.createElement("a");
    itemA.textContent = item;
    itemA.href = objMenu[item];
    itemA.style.textDecoration = "none";
    itemA.style.color = "lightgrey";
    itemA.style.cursor = "pointer";
		items.appendChild(itemA);
		};
  }

  menuContainer.appendChild(items);
  parent.appendChild(menuContainer);
}

function tabsAndMores(parentsClass, menuContainerClass, size, ...tabsOrMores) {
	const parent = document.getElementsByClassName(parentsClass)[0];
	parent.style.height = `${2.2 * size}rem`;
  const menuContainer = document.createElement("div");
  menuContainer.classList.add(menuContainerClass);
  parent.appendChild(menuContainer);

  tabsOrMores.forEach((element, index) => {
    if (typeof element === "object") {
      if (Array.isArray(element) === true) {
        const itemA = document.createElement("a");
        itemA.classList.add(`${menuContainerClass}Item`);
        itemA.textContent = element[0];
        itemA.href = element[1];
				itemA.style.textDecoration = "none";
				itemA.style.fontSize = `${size}rem`;
				itemA.style.margin = `${size / 2}rem`;
        itemA.style.color = "white";
        itemA.style.cursor = "pointer";
        menuContainer.appendChild(itemA);
      } else {
        dropDown(
          menuContainerClass,
          size,
          element
        );
      }
    } else {
      console.log(`Wrong typeof ${element}, index: ${index}`);
    }
  });
}

export { dropDown, tabsAndMores };
