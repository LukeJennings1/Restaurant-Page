export function menu() {
   const divPicker = document.getElementById("mainContainer");
   const divCreator = document.createElement('div');
   divPicker.appendChild(divCreator);
   divCreator.textContent = 'Menu';
};