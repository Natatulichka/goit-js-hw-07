// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:1.Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.2.Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).
const categoriesList = document.getElementById("categories");
const categoriesItems = categoriesList.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesItems.length}`);
categoriesItems.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;
  const categoryItems = item.querySelectorAll("ul li").length;
  console.log(`Category: ${categoryTitle} \nElements: ${categoryItems}`);
});
