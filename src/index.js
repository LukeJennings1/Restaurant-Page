
// we need to import everything from other modules to be bundled in the
// final main js doc.  
import { menu } from './menu.js';
import { create } from './contactpage.js';
import _ from 'lodash';
import "./style.css";
const divPicker = document.getElementById("mainContainer");

// button container below //

const siteContainer = document.createElement('div');
document.body.appendChild(siteContainer);
siteContainer.className = 'siteContainer';

const createtitle = document.createElement('span');
createtitle.textContent += 'CAFE EL DORADO';
siteContainer.appendChild(createtitle);


const buttonContainer = document.getElementById("buttonContainer");
buttonContainer.className = 'buttonContainer';
siteContainer.appendChild(buttonContainer);

const button1 = document.createElement('button');
button1.className = 'button1'
buttonContainer.appendChild(button1);
button1.textContent += 'Home';

const button2 = document.createElement('button');
buttonContainer.appendChild(button2);
button2.textContent += 'Menu';

const button3 = document.createElement('button');
buttonContainer.appendChild(button3);
button3.textContent += 'Contact info';

button1.addEventListener('click', () => {divPicker.innerHTML = '',
 createMainContainer(),
button1.style.backgroundColor = 'rgb(208 208 208)',
button1.style.color = 'black',
button2.style.color = 'black',
button2.style.color = 'rgb(255, 255, 255)',
button3.style.color = 'rgb(255, 255, 255)',
button2.style.backgroundColor = 'black',
button3.style.backgroundColor = 'black' }); 

button2.addEventListener('click', () => {divPicker.innerHTML = '',
menu(),
button2.style.backgroundColor = 'rgb(208 208 208)',
button2.style.color = 'black',
button1.style.color = 'rgb(255, 255, 255)',
button1.style.backgroundColor = 'black',
button3.style.color = 'rgb(255, 255, 255)', 
button3.style.backgroundColor = 'black'});

button3.addEventListener('click', () => {divPicker.innerHTML = '',
create(),
button3.style.backgroundColor = 'rgb(208 208 208)',
button3.style.color = 'black', 
button2.style.color = 'rgb(255, 255, 255)',
button2.style.backgroundColor = 'black',
button1.style.color = 'rgb(255, 255, 255)', 
button1.style.backgroundColor = 'black'}); 

/* When someone clicks a button is needs to load that page via a click 
event. We must clear the mainContainer dom element first.*/
// button container above ^^ //

// Home container below // 
function createMainContainer () {
    
const divPicker = document.getElementById("mainContainer");
const heading = document.createElement('h1');
heading.className = 'title';
siteContainer.appendChild(divPicker);
const headline = document.createElement('h2');
headline.textContent = 'WE DO THE BEST TACOS THIS SIDE OF THE ATLANTIC'
const info = document.createElement('p');
info.textContent = 'Try our food, try our food, TRY OUR FOOD! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin iaculis eros ut nisl pellentesque, eu dignissim urna tincidunt. Mauris vel ligula non lorem dictum dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat.';
divPicker.append(heading, headline, info);
}
createMainContainer();

// home container above ^^ //

