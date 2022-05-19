import { checkAuth, logout, addItem } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

const groceryList = document.getElementById('grocery-list');

groceryList.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(groceryList);
    console.log({ quantity: data.get(''), item: data.get('') });
});