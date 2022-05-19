import { checkAuth, logout, addItem } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

const groceryList = document.getElementById('grocery-list');

groceryList.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(groceryList);
    const newItem = { 
        quantity: data.get('quantity'), 
        item: data.get('item') }; 
    const listOfItems = await addItem(newItem);
    console.log(listOfItems);
});