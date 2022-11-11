const itemsEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemsEl.length}`);
console.log('');
itemsEl.forEach((item) =>{
console.log( `Category: ${item.firstElementChild.textContent}`);
const listEL = item.lastElementChild;
    console.log(`Elements: ${listEL.children.length}`);
    console.log('');
});