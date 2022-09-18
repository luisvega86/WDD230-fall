let currentDateAndTime = Date();

// console.log(`Last update ${currentDateAndTime}`);

const footer = document.querySelector('footer');

// console.log(footer);
const dateSmallTag = document.createElement('small');

const updateDate = document.createTextNode(`Last update ${currentDateAndTime}`);

dateSmallTag.append(updateDate);
footer.appendChild(dateSmallTag);
