// let currentDateAndTime = Date();
const lastModif = new Date(document.lastModified);
// console.log(`Last update ${currentDateAndTime}`);
// console.log(document.lastModified);
// console.log(Date(document.lastModified));
const footer = document.querySelector('footer');

// console.log(footer);
const dateSmallTag = document.createElement('small');

const updateDate = document.createTextNode(`Last update ${lastModif}`);

dateSmallTag.append(updateDate);
footer.appendChild(dateSmallTag);
