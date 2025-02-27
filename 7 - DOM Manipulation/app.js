// Document Object Model
// Allow us to use JavaScript to change the style, content, Structure of Website

//querySelector()
const elementWithID = document.querySelector('#first-div');

console.log(elementWithID);

elementWithID.textContent = 'Div 1';
elementWithID.style.color = 'Green';
elementWithID.style.fontFamily = "Impact";

// .querySelectorAll()
// Pass: #id, .classname, tagname
const elementsWithClass = document.querySelectorAll(".sample-div")
console.log(elementsWithClass);
elementsWithClass[1].textContent = "Div 2";
elementsWithClass[1].style.color = "#faf0ca";
elementsWithClass[1].style.backgroundColor = "#0d3b66";

const headings = document.querySelectorAll('h3');
console.log(headings);

headings.forEach(heading => {
    heading.style.color = '#f3f1de';
    heading.style.backgroundColor = '#e07a5f';
    heading.style.textAlign = 'center';
});


// Updating Element Attributes
const dayNightIcon = document.querySelector('#day-night-icon');
dayNightIcon.setAttribute(
  'src',
  'https://cdn-icons-png.flaticon.com/512/3688/3688129.png'
);

//Appending New Elements
const parentElement = document.querySelector('#parent-element');
const createdElement = document.createElement('div');
createdElement.textContent = "Child Element";
parentElement.appendChild(createdElement);

// Remove an Element
const elementToBeRemove = document.querySelector('#element-to-be-removed');
elementToBeRemove.remove();

// Adding Event Listeners
const darkModeButton = document.querySelector('#dark-mode-btn');
darkModeButton.addEventListener('click', function () {
  const pageContainer = document.querySelector('#page-container');
  pageContainer.style.backgroundColor = 'black';
  pageContainer.style.color = 'White';
  const pageModeText = document.querySelector('#page-mode-text');
  pageModeText.textContent = 'Dark Mode';
});