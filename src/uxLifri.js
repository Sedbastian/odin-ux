function primeraFuncion(idParent, objMenu) {

	function revealMenu(event) {
		console.log(event);
	}

	const parent = document.getElementById(idParent);
	const menuContainer = document.createElement('div');
	menuContainer.addEventListener('click', revealMenu);
	menuContainer.style.display = 'flex';
	menuContainer.style.flexDirection = 'column';
	menuContainer.textContent = 'Menu';

	const items = document.createElement('div');
	items.style.display = 'flex';
	items.style.flexDirection = 'column';
	
	for (const item of Object.keys(objMenu)) {
		const itemA = document.createElement('a');
		itemA.classList.add('item');
		itemA.textContent = item;
		itemA.href = objMenu[item];
		items.appendChild(itemA);
	};
	menuContainer.appendChild(items);
	parent.appendChild(menuContainer);
}

export { primeraFuncion };