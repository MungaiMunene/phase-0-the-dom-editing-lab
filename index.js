// Remove the <main> element with id 'main'
document.querySelector('main#main').remove();

// Create a new <h1> element and assign it to a globally accessible variable
window.newHeader = document.createElement('h1');

// Set the id of the new <h1> element to 'victory'
newHeader.id = 'victory';

// Set the text of the new <h1> element to 'Mungai is the champion'
newHeader.innerHTML = 'Mungai is the champion';  

// Append the new <h1> element to the body
document.body.appendChild(newHeader);