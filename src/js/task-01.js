
const countCategories = document.querySelectorAll("li.item");
console.log(`Number of categories ${countCategories.length}.`);

countCategories.forEach(el => {
    console.log(el.firstElementChild.textContent, el.querySelectorAll('li').length);
});
