export function renderItem(item) {
    const li = document.createElement('li');
    li.setAttribute('id', 'container');

    const p = document.createElement('p');
    p.setAttribute('id', 'item');
    p.textContent = `${item.item}`;

    const number = document.createElement('p');
    number.setAttribute('id', 'number');
    number.textContent = `${item.quantity}`;

    li.append(p, number);
    return li;
}