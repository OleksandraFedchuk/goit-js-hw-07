
// const categoriesList = document.querySelectorAll('.js-categories');

const categoryItems = document.querySelectorAll('.js-item');


console.log(`Number of categories: ${categoryItems.length}`);


const result = categoryItems.forEach((element) => {

const categoryTitle = element.querySelector('h2').textContent;
console.log(`Category : ${categoryTitle}`);
const categoryNumbers = element.querySelectorAll('li').length;
console.log(`Elements : ${categoryNumbers}`);

})

