import { checkAuth, logout, addItem, getItems } from '../fetch-utils.js';
import { renderItem } from './render-item.js';

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
        item: data.get('item') 
    }; 
    const listOfItems = await addItem(newItem);
    console.log(listOfItems);
    loadList();
});

loadList();
// Make a Function That Displays The List
async function loadList() {
    const lists = await getItems();
    const groceryItems = document.getElementById('grocery-items');
    groceryItems.textContent = '';
    for (let item of lists) {
        const listDiv = renderItem(item);
        groceryItems.append(listDiv);
    }
}
