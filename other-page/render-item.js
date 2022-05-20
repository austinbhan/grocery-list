export function renderItem(item) {
    const li = document.createElement('li');
    li.setAttribute('id', 'container');

    const p = document.createElement('p');
    p.setAttribute('id', 'item-and-name');
    p.textContent = `${item.quantity} ${item.item} `;
    
    p.addEventListener('click', () => {
        p.classList.add('toggle');
    });

    li.append(p);
    return li;
}