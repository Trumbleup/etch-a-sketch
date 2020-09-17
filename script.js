
const container = document.createElement('div');
container.setAttribute('id', 'container');

document.body.appendChild(container);

for (let i = 0 ; i < 16 ; i++) {
	const square = document.createElement('div');
	square.classList.add('square');
	container.appendChild(square);
}

