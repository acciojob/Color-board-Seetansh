const container = document.getElementById('container');

function getRandomColor() {
    const r = Math.floor(Math.random() * 206) + 50;
    const g = Math.floor(Math.random() * 206) + 50;
    const b = Math.floor(Math.random() * 206) + 50;
    return `rgb(${r}, ${g}, ${b})`;
}

for (let i = 0; i < 800; i++) {
    const square = document.createElement('div');
    square.className = 'square';
    
    square.style.setProperty('--hover-color', getRandomColor());
    
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = getComputedStyle(square).getPropertyValue('--hover-color');
    });
    
    square.addEventListener('mouseout', () => {
        square.style.backgroundColor = 'rgb(29, 29, 29)';
    });
    
    container.appendChild(square);
}