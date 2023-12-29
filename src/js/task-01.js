const mainItems = document.querySelectorAll(".item");

console.log(`Number of categories: ${mainItems.length}`);

mainItems.forEach((item) => {
  const category = item.children[0].textContent;
    const elements = item.children[0].nextElementSibling.children.length;
  console.log(`
  Category: ${category} 
  Elements: ${elements}
  `); 
});