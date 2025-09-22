// defining arrays for breakfast,maincourse and dessert menu
const breakfastMenu = ['Pancakes','Eggs Benedict','Oatmeal','Frittata'];
const mainCourseMenu = ['Steak','Pasta','Burger','Salmon'];
const dessertMenu = ['Cake','Ice Cream','Pudding','Fruit Salad'];

// mapping through the breakfast array using the map method
const breakfastMenuItemsHTML = breakfastMenu.map((item,index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
// adding data to webpage
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

// looping using forEach for the main course menu
let mainCourseItem = '';
mainCourseMenu.forEach((item,index)=> {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
})
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

// looping using for loop for the desset menu
let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;